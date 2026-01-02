#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFile } from './utils/file-utils.js';
import { convertToTypst } from './convert-typst.js';
import { convertToQuarto } from './convert-quarto.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read package.json for version
const packageJsonPath = path.join(__dirname, '../package.json');
let version = '1.0.0';
try {
  const packageJson = JSON.parse(await readFile(packageJsonPath));
  version = packageJson.version;
} catch (error) {
  // Use default version if package.json can't be read
}

const program = new Command();

// ASCII Art Banner
const banner = `
${chalk.blue('╔═══════════════════════════════════════════════════════╗')}
${chalk.blue('║')}   ${chalk.bold.white('Carbon Markdown to PDF Converter')}              ${chalk.blue('║')}
${chalk.blue('║')}   ${chalk.gray('IBM Carbon Design System')}                      ${chalk.blue('║')}
${chalk.blue('╚═══════════════════════════════════════════════════════╝')}
`;

program
  .name('carbon-pdf')
  .description('Convert markdown to beautiful PDFs using IBM Carbon Design System')
  .version(version)
  .addHelpText('beforeAll', banner);

program
  .argument('<input>', 'Input markdown file')
  .option('-e, --engine <engine>', 'Conversion engine: typst, quarto, or both', 'both')
  .option('-o, --output <output>', 'Output PDF file path')
  .option('-v, --verbose', 'Verbose output')
  .action(async (input, options) => {
    try {
      console.log(banner);
      console.log(chalk.bold.white('Starting conversion...\n'));

      const inputPath = path.resolve(input);
      const { engine, output, verbose } = options;

      if (verbose) {
        console.log(chalk.gray(`Input: ${inputPath}`));
        console.log(chalk.gray(`Engine: ${engine}`));
        console.log(chalk.gray(`Output: ${output || 'auto'}\n`));
      }

      if (engine === 'typst' || engine === 'both') {
        console.log(chalk.blue.bold('\n━━━ Typst Conversion ━━━\n'));
        try {
          const typstOutput = await convertToTypst(
            inputPath,
            output || null
          );
          console.log(chalk.green.bold(`\n✓ Typst PDF: ${typstOutput}`));
        } catch (error) {
          console.error(chalk.red.bold(`\n✗ Typst conversion failed: ${error.message}`));
          if (engine === 'typst') process.exit(1);
        }
      }

      if (engine === 'quarto' || engine === 'both') {
        console.log(chalk.blue.bold('\n━━━ Quarto Conversion ━━━\n'));
        try {
          const quartoOutput = await convertToQuarto(
            inputPath,
            output || null
          );
          console.log(chalk.green.bold(`\n✓ Quarto PDF: ${quartoOutput}`));
        } catch (error) {
          console.error(chalk.red.bold(`\n✗ Quarto conversion failed: ${error.message}`));
          if (engine === 'quarto') process.exit(1);
        }
      }

      if (engine !== 'typst' && engine !== 'quarto' && engine !== 'both') {
        console.error(chalk.red.bold(`\n✗ Unknown engine: ${engine}`));
        console.log(chalk.yellow('Valid engines: typst, quarto, both'));
        process.exit(1);
      }

      console.log(chalk.green.bold('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
      console.log(chalk.green.bold('✓ Conversion completed successfully!'));
      console.log(chalk.green.bold('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n'));

    } catch (error) {
      console.error(chalk.red.bold('\n✗ Error:'), error.message);
      if (options.verbose) {
        console.error(chalk.gray('\nStack trace:'));
        console.error(chalk.gray(error.stack));
      }
      process.exit(1);
    }
  });

// Info command
program
  .command('info')
  .description('Display system information')
  .action(async () => {
    console.log(banner);
    console.log(chalk.bold.white('System Information:\n'));

    // Check Typst
    try {
      const { execSync } = await import('child_process');
      const typstVersion = execSync('typst --version', { encoding: 'utf-8' }).trim();
      console.log(chalk.green('✓'), chalk.bold('Typst:'), typstVersion);
    } catch {
      console.log(chalk.red('✗'), chalk.bold('Typst:'), 'Not installed');
    }

    // Check Quarto
    try {
      const { execSync } = await import('child_process');
      const quartoVersion = execSync('quarto --version', { encoding: 'utf-8' }).trim();
      console.log(chalk.green('✓'), chalk.bold('Quarto:'), quartoVersion);
    } catch {
      console.log(chalk.red('✗'), chalk.bold('Quarto:'), 'Not installed');
    }

    console.log(chalk.green('✓'), chalk.bold('Node.js:'), process.version);
    console.log(chalk.green('✓'), chalk.bold('Carbon PDF:'), `v${version}`);

    console.log(chalk.blue('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n'));
  });

// Example command
program
  .command('example')
  .description('Generate an example markdown file')
  .action(async () => {
    console.log(banner);
    console.log(chalk.bold.white('Creating example markdown file...\n'));

    const exampleContent = `---
title: "Sample Academic Report"
subtitle: "IBM Carbon Design System Integration"
author: "Dr. Jane Smith"
date: "December 2024"
---

# Introduction

This is a **sample academic report** demonstrating the *IBM Carbon Design System* integration with markdown to PDF conversion.

## Key Features

### Typography

The document uses **IBM Plex Sans** for body text, creating a professional and readable appearance.

### Color Palette

Carbon's carefully crafted color system ensures:

- Optimal contrast ratios
- Accessibility compliance
- Visual hierarchy
- Professional appearance

## Code Examples

Here's a simple Python example:

\`\`\`python
def fibonacci(n):
    """Calculate fibonacci number"""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
\`\`\`

Inline code looks like this: \`const result = calculate(42);\`

## Mathematical Notation

The formula for the area of a circle: A = πr²

## Lists

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- Research methodology
- Data collection
- Analysis procedures
- Conclusion

## Blockquotes

> "Design is not just what it looks like and feels like. Design is how it works."
> — Steve Jobs

## Tables

| Feature | Typst | Quarto |
|---------|-------|--------|
| Speed | Fast | Moderate |
| Syntax | Simple | Rich |
| Output | PDF | Multiple |

## Links

Visit [IBM Carbon Design System](https://carbondesignsystem.com) for more information.

## Conclusion

This template demonstrates professional document styling using IBM's Carbon Design System, providing a modern and accessible reading experience.
`;

    const examplePath = path.join(process.cwd(), 'example.md');
    const { writeFile } = await import('./utils/file-utils.js');
    await writeFile(examplePath, exampleContent);

    console.log(chalk.green('✓'), `Example created: ${examplePath}`);
    console.log(chalk.blue('\nTo convert to PDF, run:'));
    console.log(chalk.gray(`  carbon-pdf example.md\n`));
  });

program.parse();
