# Carbon Markdown to PDF

🎨 Professional markdown to PDF converter using IBM Carbon Design System, Typst, and Quarto.

## Features

- ✨ **IBM Carbon Design System** - Beautiful, consistent styling
- 📄 **Typst Support** - Modern typesetting system
- 📊 **Quarto Support** - Scientific publishing system
- 🎓 **Academic Focus** - Perfect for research papers, reports, and documentation
- 🌈 **Carbon Color Palette** - Professional color schemes
- 📝 **Typography** - IBM Plex font family integration

## Installation

### System Dependencies

```bash
# Install Typst
curl -fsSL https://typst.app/install.sh | sh

# Install Quarto
# Linux
wget https://github.com/quarto-dev/quarto-cli/releases/latest/download/quarto-linux-amd64.deb
sudo dpkg -i quarto-linux-amd64.deb
```

### Node Dependencies

```bash
npm install
```

## Usage

### CLI

```bash
# Convert using Typst
node src/cli.js examples/sample.md --engine typst

# Convert using Quarto
node src/cli.js examples/sample.md --engine quarto

# Convert using both
node src/cli.js examples/sample.md --engine both
```

### Programmatic

```javascript
import { convertToTypst, convertToQuarto } from './src/index.js';

await convertToTypst('input.md', 'output.pdf');
await convertToQuarto('input.md', 'output.pdf');
```

## Project Structure

```
.
├── src/
│   ├── cli.js              # Command-line interface
│   ├── index.js            # Main exports
│   ├── convert-typst.js    # Typst converter
│   ├── convert-quarto.js   # Quarto converter
│   └── utils/              # Utilities
├── templates/
│   ├── typst/              # Typst templates
│   └── quarto/             # Quarto templates
├── styles/
│   └── carbon/             # Carbon design styles
├── examples/               # Example markdown files
└── output/                 # Generated PDFs
```

## Carbon Design Integration

This project uses IBM Carbon Design System components:

- **Colors**: `@carbon/colors` - Professional color palette
- **Typography**: `@carbon/type` - IBM Plex font families
- **Layout**: `@carbon/layout` - Spacing and grid system
- **Themes**: `@carbon/themes` - White, G10, G90, G100 themes

## License

MIT
