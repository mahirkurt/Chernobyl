/**
 * Carbon Markdown to PDF
 * Main module exports
 */

export { convertToTypst } from './convert-typst.js';
export { convertToQuarto } from './convert-quarto.js';
export {
  parseMarkdown,
  markdownToHtml,
  markdownToTypst,
  getCarbonTheme,
  extractToc
} from './utils/markdown-parser.js';
export {
  readFile,
  writeFile,
  fileExists,
  getProjectRoot,
  getTemplatePath,
  getOutputPath
} from './utils/file-utils.js';

// AI-powered Carbon Design Advisor
export {
  analyzeDocument,
  analyzeFile,
  askDesignQuestion
} from './ai/carbon-advisor.js';

/**
 * Convert markdown to PDF using specified engine
 * @param {string} inputPath - Path to markdown file
 * @param {object} options - Conversion options
 * @returns {Promise<string|object>} Path(s) to generated PDF(s)
 */
export async function convertMarkdownToPdf(inputPath, options = {}) {
  const {
    engine = 'both',  // 'typst', 'quarto', or 'both'
    outputPath = null,
  } = options;

  const { convertToTypst } = await import('./convert-typst.js');
  const { convertToQuarto } = await import('./convert-quarto.js');

  if (engine === 'typst') {
    return await convertToTypst(inputPath, outputPath);
  } else if (engine === 'quarto') {
    return await convertToQuarto(inputPath, outputPath);
  } else if (engine === 'both') {
    const results = await Promise.allSettled([
      convertToTypst(inputPath, outputPath ? outputPath.replace('.pdf', '-typst.pdf') : null),
      convertToQuarto(inputPath, outputPath ? outputPath.replace('.pdf', '-quarto.pdf') : null)
    ]);

    return {
      typst: results[0].status === 'fulfilled' ? results[0].value : results[0].reason,
      quarto: results[1].status === 'fulfilled' ? results[1].value : results[1].reason
    };
  } else {
    throw new Error(`Unknown engine: ${engine}. Use 'typst', 'quarto', or 'both'.`);
  }
}

export default {
  convertMarkdownToPdf,
  convertToTypst,
  convertToQuarto
};
