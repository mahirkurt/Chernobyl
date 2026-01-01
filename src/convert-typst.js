import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import Mustache from 'mustache';
import {
  readFile,
  writeFile,
  getTemplatePath,
  getOutputPath,
  ensureDir,
  getProjectRoot
} from './utils/file-utils.js';
import {
  parseMarkdown,
  markdownToTypst
} from './utils/markdown-parser.js';

const execAsync = promisify(exec);

/**
 * Convert markdown to PDF using Typst with Carbon Design System
 * @param {string} inputPath - Path to markdown file
 * @param {string} outputPath - Path to output PDF (optional)
 * @returns {Promise<string>} Path to generated PDF
 */
export async function convertToTypst(inputPath, outputPath = null) {
  try {
    console.log('📄 Reading markdown file...');
    const markdownContent = await readFile(inputPath);

    console.log('🔍 Parsing markdown...');
    const { metadata, content } = parseMarkdown(markdownContent);

    console.log('🎨 Converting to Typst format...');
    const typstContent = markdownToTypst(content);

    console.log('📋 Loading Carbon template...');
    const templatePath = getTemplatePath('typst', 'carbon-template.typ');
    let template = await readFile(templatePath);

    console.log('✨ Applying Carbon Design System styling...');
    // Replace template variables (use raw content, don't escape)
    // We manually handle escaping in markdownToTypst
    Mustache.escape = (text) => text; // Disable HTML escaping
    const renderedContent = Mustache.render(template, {
      title: metadata.title || 'Untitled',
      subtitle: metadata.subtitle || '',
      author: metadata.author || 'Anonymous',
      date: metadata.date || new Date().toLocaleDateString(),
      content: typstContent
    });

    // Create temporary typst file
    const projectRoot = getProjectRoot();
    const tempDir = path.join(projectRoot, 'output', 'temp');
    await ensureDir(tempDir);

    const tempTypstPath = path.join(tempDir, 'temp.typ');
    await writeFile(tempTypstPath, renderedContent);

    // Determine output path
    const finalOutputPath = outputPath || getOutputPath(inputPath, 'typst');
    await ensureDir(path.dirname(finalOutputPath));

    console.log('🚀 Compiling with Typst...');
    await execAsync(`typst compile "${tempTypstPath}" "${finalOutputPath}"`);

    console.log(`✅ PDF generated successfully: ${finalOutputPath}`);
    return finalOutputPath;

  } catch (error) {
    console.error('❌ Error converting to PDF with Typst:', error.message);
    throw error;
  }
}

// Allow running as standalone script
if (import.meta.url === `file://${process.argv[1]}`) {
  const inputPath = process.argv[2];
  const outputPath = process.argv[3];

  if (!inputPath) {
    console.error('Usage: node convert-typst.js <input.md> [output.pdf]');
    process.exit(1);
  }

  convertToTypst(inputPath, outputPath)
    .then(output => {
      console.log(`\n🎉 Success! PDF created at: ${output}`);
    })
    .catch(error => {
      console.error('\n💥 Conversion failed:', error.message);
      process.exit(1);
    });
}

export default convertToTypst;
