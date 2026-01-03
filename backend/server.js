/**
 * Backend API Server
 * Handles document conversion, authentication, and billing
 */

import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// File upload configuration
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../temp/uploads');
    await fs.mkdir(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword',
      'text/plain',
      'text/markdown',
      'application/rtf',
      'application/vnd.oasis.opendocument.text',
    ];
    
    if (allowedTypes.includes(file.mimetype) || 
        file.originalname.endsWith('.md') || 
        file.originalname.endsWith('.txt')) {
      cb(null, true);
    } else {
      cb(new Error('Desteklenmeyen dosya formatı'), false);
    }
  }
});

/**
 * Convert document to Markdown using Marker
 * POST /api/convert/to-markdown
 */
app.post('/api/convert/to-markdown', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Dosya yüklenmedi' });
    }

    const inputPath = req.file.path;
    const outputDir = path.join(__dirname, '../temp/output');
    await fs.mkdir(outputDir, { recursive: true });

    // Check file type
    const ext = path.extname(req.file.originalname).toLowerCase();
    
    // If already markdown or text, just read it
    if (ext === '.md' || ext === '.txt') {
      const content = await fs.readFile(inputPath, 'utf-8');
      await fs.unlink(inputPath); // Clean up
      return res.json({ 
        success: true, 
        markdown: content,
        fileName: req.file.originalname,
      });
    }

    // Use Marker to convert PDF/Word to Markdown
    const outputPath = path.join(outputDir, `${path.basename(inputPath, ext)}.md`);
    
    // Call Marker CLI
    const markerProcess = spawn('marker_single', [
      inputPath,
      outputDir,
      '--output_format', 'markdown',
    ]);

    let stdout = '';
    let stderr = '';

    markerProcess.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    markerProcess.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    await new Promise((resolve, reject) => {
      markerProcess.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Marker process exited with code ${code}: ${stderr}`));
        }
      });
      
      markerProcess.on('error', (err) => {
        reject(err);
      });
    });

    // Read the converted markdown
    const files = await fs.readdir(outputDir);
    const mdFile = files.find(f => f.endsWith('.md'));
    
    if (!mdFile) {
      throw new Error('Markdown çıktısı oluşturulamadı');
    }

    const markdown = await fs.readFile(path.join(outputDir, mdFile), 'utf-8');

    // Clean up
    await fs.unlink(inputPath);
    await fs.unlink(path.join(outputDir, mdFile));

    res.json({
      success: true,
      markdown,
      fileName: req.file.originalname,
    });

  } catch (error) {
    console.error('Conversion error:', error);
    
    // Fallback: Try Python-based conversion
    try {
      const markdown = await convertWithPython(req.file.path);
      res.json({
        success: true,
        markdown,
        fileName: req.file.originalname,
      });
    } catch (fallbackError) {
      res.status(500).json({ 
        error: 'Dönüştürme hatası', 
        details: error.message 
      });
    }
  }
});

/**
 * Fallback Python conversion
 */
async function convertWithPython(inputPath) {
  const pythonScript = path.join(__dirname, 'converters/document_converter.py');
  
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn('python', [pythonScript, inputPath]);
    
    let output = '';
    let errorOutput = '';

    pythonProcess.stdout.on('data', (data) => {
      output += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
      errorOutput += data.toString();
    });

    pythonProcess.on('close', (code) => {
      if (code === 0) {
        resolve(output);
      } else {
        reject(new Error(errorOutput || 'Python conversion failed'));
      }
    });
  });
}

/**
 * Convert Markdown to PDF using Typst/Quarto
 * POST /api/convert/to-pdf
 */
app.post('/api/convert/to-pdf', async (req, res) => {
  try {
    const { markdown, engine, template, settings } = req.body;

    if (!markdown) {
      return res.status(400).json({ error: 'Markdown içeriği gerekli' });
    }

    const tempDir = path.join(__dirname, '../temp');
    await fs.mkdir(tempDir, { recursive: true });

    const timestamp = Date.now();
    const mdPath = path.join(tempDir, `input-${timestamp}.md`);
    const outputPath = path.join(tempDir, `output-${timestamp}.pdf`);

    // Add frontmatter from settings
    const frontmatter = generateFrontmatter(settings);
    const fullContent = frontmatter + markdown;

    await fs.writeFile(mdPath, fullContent, 'utf-8');

    // Convert using specified engine
    if (engine === 'typst' || engine === 'both') {
      await convertWithTypst(mdPath, outputPath, template);
    } else if (engine === 'quarto') {
      await convertWithQuarto(mdPath, outputPath, template);
    }

    // Read and send PDF
    const pdfBuffer = await fs.readFile(outputPath);

    // Clean up
    await fs.unlink(mdPath);
    await fs.unlink(outputPath);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="document.pdf"`);
    res.send(pdfBuffer);

  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).json({ 
      error: 'PDF oluşturma hatası', 
      details: error.message 
    });
  }
});

/**
 * Generate YAML frontmatter from settings
 */
function generateFrontmatter(settings) {
  if (!settings || Object.keys(settings).length === 0) {
    return '';
  }

  const lines = ['---'];
  
  if (settings.documentType) {
    lines.push(`documentType: ${settings.documentType}`);
  }
  if (settings.audience) {
    lines.push(`audience: ${settings.audience}`);
  }
  if (settings.tone) {
    lines.push(`tone: ${settings.tone}`);
  }
  if (settings.colorScheme) {
    lines.push(`colorScheme: ${settings.colorScheme}`);
  }
  if (settings.layoutStyle) {
    lines.push(`layoutStyle: ${settings.layoutStyle}`);
  }
  if (settings.emphasis && settings.emphasis.length > 0) {
    lines.push(`emphasis: [${settings.emphasis.join(', ')}]`);
  }
  if (settings.components && settings.components.length > 0) {
    lines.push(`components: [${settings.components.join(', ')}]`);
  }
  
  lines.push('---\n\n');
  
  return lines.join('\n');
}

/**
 * Convert using Typst
 */
async function convertWithTypst(inputPath, outputPath, template) {
  const templatesDir = path.join(__dirname, '../templates/typst');
  const templateFile = `${template || 'carbon-advanced'}.typ`;
  
  return new Promise((resolve, reject) => {
    const typstProcess = spawn('typst', [
      'compile',
      inputPath,
      outputPath,
    ]);

    typstProcess.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Typst process exited with code ${code}`));
      }
    });

    typstProcess.on('error', reject);
  });
}

/**
 * Convert using Quarto
 */
async function convertWithQuarto(inputPath, outputPath, template) {
  return new Promise((resolve, reject) => {
    const quartoProcess = spawn('quarto', [
      'render',
      inputPath,
      '--to', 'pdf',
      '--output', path.basename(outputPath),
    ]);

    quartoProcess.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Quarto process exited with code ${code}`));
      }
    });

    quartoProcess.on('error', reject);
  });
}

/**
 * Import from Google Docs URL
 * POST /api/import/google-docs
 */
app.post('/api/import/google-docs', async (req, res) => {
  try {
    const { url } = req.body;

    if (!url || !url.includes('docs.google.com')) {
      return res.status(400).json({ error: 'Geçersiz Google Docs URL' });
    }

    // Extract document ID from URL
    const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (!match) {
      return res.status(400).json({ error: 'Doküman ID bulunamadı' });
    }

    const docId = match[1];

    // For public documents, use export URL
    const exportUrl = `https://docs.google.com/document/d/${docId}/export?format=txt`;

    const response = await fetch(exportUrl);
    
    if (!response.ok) {
      throw new Error('Google Docs içeriği alınamadı. Dokümanın herkese açık olduğundan emin olun.');
    }

    const content = await response.text();

    res.json({
      success: true,
      content,
      title: `Google Doc - ${docId}`,
    });

  } catch (error) {
    console.error('Google Docs import error:', error);
    res.status(500).json({ 
      error: 'İçe aktarma hatası', 
      details: error.message 
    });
  }
});

/**
 * Health check
 */
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: err.message });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend API server running on port ${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/api/health`);
});

export default app;
