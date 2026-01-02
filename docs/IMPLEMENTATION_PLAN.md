# Carbon Design System - PDF Implementation Planı

## 🎯 Hedef

IBM Carbon Design System'in en gelişmiş özelliklerini Typst ve Quarto şablonlarına entegre ederek profesyonel, erişilebilir ve görsel olarak çarpıcı PDF raporları üretmek.

---

## 📋 Öncelik Sıralaması

### Phase 1: Typography & Layout (⚡ Yüksek Öncelik)
**Durum:** Temel sistem mevcut, geliştirilecek

✅ **Mevcut:**
- IBM Plex Sans temel kullanım
- Basit heading hierarchy
- Basic paragraph styling

🎯 **Eklenecek:**
- [ ] Tam type scale (display-04'ten legal-01'e)
- [ ] 8 ağırlık desteği (Thin to Bold)
- [ ] Productive vs Expressive type sets
- [ ] Line height tokens
- [ ] Letter spacing optimization
- [ ] Type ramp system
- [ ] Responsive typography

**Etki:** 🔥🔥🔥 (Çok Yüksek)
**Zorluk:** ⭐⭐ (Orta)

---

### Phase 2: Color System (⚡ Yüksek Öncelik)
**Durum:** Temel renkler mevcut, genişletilecek

✅ **Mevcut:**
- 6 temel renk (blue, gray, green, red, purple, cyan)
- Basic semantic colors

🎯 **Eklenecek:**
- [ ] Tam color palette (10 shade her renk için)
- [ ] 4 tema modu (White, G10, G90, G100)
- [ ] Data visualization color palettes (14 categorical)
- [ ] Sequential & diverging palettes
- [ ] Color tokens sistemi
- [ ] Accessibility-compliant combinations
- [ ] Theme switching mechanism

**Etki:** 🔥🔥🔥 (Çok Yüksek)
**Zorluk:** ⭐⭐ (Orta)

---

### Phase 3: 2x Grid & Spacing (⚡ Orta Öncelik)
**Durum:** Basic spacing mevcut, grid sistemi yok

✅ **Mevcut:**
- Fixed margins (2.5cm)
- Basic section spacing

🎯 **Eklenecek:**
- [ ] 16-column grid system
- [ ] 5 breakpoint tanımları
- [ ] Spacing tokens (01-13)
- [ ] Grid-aware components
- [ ] Responsive layout modules
- [ ] Gutter variations (Wide, Narrow, Condensed)
- [ ] 8px base unit enforcement

**Etki:** 🔥🔥 (Yüksek)
**Zorluk:** ⭐⭐⭐ (Yüksek - PDF'de grid karmaşık)

---

### Phase 4: Data Visualization (⚡ Yüksek Öncelik)
**Durum:** Yok, sıfırdan geliştirilecek

🎯 **Eklenecek:**
- [ ] Chart wrapper templates
- [ ] 10 temel chart türü desteği:
  - Bar chart
  - Line chart
  - Area chart
  - Pie/Donut chart
  - Scatter plot
  - Table with visual encoding
  - Sparklines
  - Bullet chart
  - Gauge
  - Treemap
- [ ] Carbon chart color palettes
- [ ] Chart legends
- [ ] Axis styling
- [ ] Grid lines
- [ ] Data labels
- [ ] Accessibility features

**Etki:** 🔥🔥🔥 (Çok Yüksek - Raporlarda kritik)
**Zorluk:** ⭐⭐⭐⭐ (Çok Yüksek - Karmaşık)

---

### Phase 5: Icons & Pictograms (⚡ Orta Öncelik)
**Durum:** Yok

🎯 **Eklenecek:**
- [ ] SVG icon embedding
- [ ] 100+ yaygın icon set
- [ ] 4 boyut desteği (16, 20, 24, 32px)
- [ ] Outlined & filled variants
- [ ] Pictograms for sections
- [ ] Icon color theming
- [ ] Accessibility labels

**Etki:** 🔥🔥 (Yüksek)
**Zorluk:** ⭐⭐⭐ (Yüksek - SVG handling)

---

### Phase 6: Components Library (⚡ Orta Öncelik)
**Durum:** Bazı temel componentler var (tables, lists)

✅ **Mevcut:**
- Basic tables
- Ordered/unordered lists
- Blockquotes
- Code blocks
- Links

🎯 **Eklenecek:**
- [ ] Cards & Tiles
- [ ] Data tables (advanced)
- [ ] Definition lists
- [ ] Notification banners
- [ ] Status indicators
- [ ] Tags & badges
- [ ] Breadcrumbs
- [ ] Table of contents (auto-generated)
- [ ] Sidebars
- [ ] Callout boxes
- [ ] Timeline components

**Etki:** 🔥🔥 (Yüksek)
**Zorluk:** ⭐⭐ (Orta)

---

### Phase 7: Advanced Features (⚡ Düşük Öncelik)
**Durum:** Yok, nice-to-have

🎯 **Eklenecek:**
- [ ] Motion tokens (animation guide for interactive PDFs)
- [ ] Multi-column layouts
- [ ] Advanced mathematical typography
- [ ] Chemical formulas
- [ ] Music notation
- [ ] Footnotes & endnotes
- [ ] Citations & bibliography
- [ ] Index generation
- [ ] Glossary
- [ ] Cross-references
- [ ] Hyperlinks (internal/external)

**Etki:** 🔥 (Orta)
**Zorluk:** ⭐⭐⭐⭐ (Çok Yüksek)

---

## 🛠️ Teknik Implementasyon

### Typst Implementasyonu

**Avantajlar:**
- Modern, esnek syntax
- Native SVG support
- Math typography mükemmel
- Hızlı compile
- Scripting capabilities

**Zorluklar:**
- Yeni, az kaynak
- Data viz library yok (custom gerekli)
- Grid sistemi manuel

**Strateji:**
```typst
// Carbon design tokens as Typst variables
#let carbon-blue-60 = rgb("#0f62fe")
#let carbon-spacing-05 = 1rem

// Type scale functions
#let type-heading-05(content) = {
  text(size: 2rem, weight: 300, content)
}

// Grid system
#let grid-column(span, content) = {
  // 16-column grid logic
}

// Chart templates
#let bar-chart(data, options) = {
  // Custom bar chart rendering
}
```

---

### Quarto Implementasyonu

**Avantajlar:**
- LaTeX power
- R/Python integration (charts!)
- Mature ecosystem
- Publication-quality

**Zorluklar:**
- Yavaş compile
- LaTeX syntax karmaşık
- TinyTeX dependencies

**Strateji:**
```latex
% Carbon color definitions
\definecolor{carbonBlue60}{HTML}{0f62fe}

% Type scale commands
\newcommand{\headingfive}[1]{%
  \fontsize{32}{38}\selectfont #1%
}

% Grid system via minipage
\newenvironment{carbongrid}[1]{%
  % 16-column grid implementation
}

% Chart integration
% Use R ggplot2 with Carbon theme
<<r-chart, echo=FALSE>>=
library(ggplot2)
carbon_theme <- theme_minimal() +
  theme(text = element_text(family = "IBM Plex Sans"))
@
```

---

## 📊 Data Visualization Stratejisi

### Typst için Custom Charts

```typst
#let carbon-bar-chart(
  data: (),
  width: 100%,
  height: 200pt,
  color: carbon-blue-60,
  labels: true
) = {
  // SVG path generation
  // Canvas rendering
  // Automatic scaling
}
```

### Quarto için R/Python Integration

```r
# R ile Carbon themed charts
carbon_colors <- c(
  "#8a3ffc", "#1192e8", "#005d5d",
  "#9f1853", "#fa4d56", "#570408",
  "#198038", "#002d9c", "#ee538b"
)

ggplot(data) +
  geom_bar(fill = carbon_colors[1]) +
  theme_carbon()
```

```python
# Python plotly ile Carbon charts
import plotly.graph_objects as go

carbon_template = {
    'layout': {
        'font': {'family': 'IBM Plex Sans'},
        'colorway': carbon_colors
    }
}

fig = go.Figure(data=[...], layout=carbon_template)
```

---

## 📁 Proje Yapısı (Geliştirilmiş)

```
Chernobyl/
├── src/
│   ├── cli.js
│   ├── convert-typst.js
│   ├── convert-quarto.js
│   └── utils/
│       ├── markdown-parser.js
│       ├── file-utils.js
│       ├── chart-generator.js      # YENİ
│       └── grid-calculator.js      # YENİ
├── templates/
│   ├── typst/
│   │   ├── carbon-template.typ
│   │   ├── carbon-advanced.typ     # YENİ
│   │   ├── components/             # YENİ
│   │   │   ├── charts.typ
│   │   │   ├── tables.typ
│   │   │   ├── cards.typ
│   │   │   └── grids.typ
│   │   └── themes/                 # YENİ
│   │       ├── white.typ
│   │       ├── g10.typ
│   │       ├── g90.typ
│   │       └── g100.typ
│   └── quarto/
│       ├── carbon-template.qmd
│       ├── carbon-advanced.qmd     # YENİ
│       ├── _extensions/            # YENİ
│       │   └── carbon/
│       │       ├── charts.R
│       │       ├── theme.tex
│       │       └── components.lua
│       └── themes/                 # YENİ
├── styles/
│   └── carbon/
│       ├── theme.js
│       ├── colors-extended.js      # YENİ - Tam palette
│       ├── typography-scale.js     # YENİ - Type tokens
│       ├── spacing-tokens.js       # YENİ - Spacing scale
│       ├── grid-system.js          # YENİ - Grid config
│       └── data-viz-colors.js      # YENİ - Chart colors
├── assets/                         # YENİ
│   ├── icons/
│   │   └── carbon-icons.svg        # Icon sprite
│   ├── pictograms/
│   └── fonts/
│       └── IBMPlexSans/
├── examples/
│   ├── sample.md
│   ├── advanced-report.md          # YENİ
│   ├── data-viz-showcase.md        # YENİ
│   ├── multi-theme-demo.md         # YENİ
│   └── charts/                     # YENİ
│       ├── bar-chart-example.md
│       ├── line-chart-example.md
│       └── complex-viz-example.md
├── docs/
│   ├── CARBON_ELEMENTS.md          # ✅ Oluşturuldu
│   ├── IMPLEMENTATION_PLAN.md      # ✅ Oluşturuldu
│   ├── TYPOGRAPHY_GUIDE.md         # YENİ
│   ├── COLOR_GUIDE.md              # YENİ
│   ├── GRID_GUIDE.md               # YENİ
│   └── CHART_TEMPLATES.md          # YENİ
└── tests/                          # YENİ
    ├── typography-test.md
    ├── color-test.md
    └── chart-test.md
```

---

## 🎨 Örnek Kullanım Senaryoları

### 1. Executive Report
```yaml
---
title: "Q4 2025 Executive Summary"
theme: white
type-scale: expressive
charts:
  - revenue-trend
  - market-share
  - kpi-dashboard
components:
  - hero-card
  - stat-tiles
  - data-table-advanced
---
```

### 2. Technical Documentation
```yaml
---
title: "API Documentation v2.0"
theme: g10
type-scale: productive
layout: two-column
components:
  - code-blocks
  - syntax-highlighting
  - api-reference-table
  - endpoint-cards
---
```

### 3. Research Paper
```yaml
---
title: "Machine Learning in Healthcare"
theme: white
type-scale: productive
charts:
  - scatter-plot
  - box-plot
  - heatmap
components:
  - citations
  - footnotes
  - complex-tables
  - mathematical-notation
---
```

### 4. Marketing Report
```yaml
---
title: "Brand Performance 2025"
theme: white
type-scale: expressive
charts:
  - donut-chart
  - area-chart
  - gauge
components:
  - hero-section
  - pictograms
  - quote-callouts
  - timeline
---
```

---

## ⏱️ Zaman Tahmini

**Phase 1 (Typography):** 2-3 gün
**Phase 2 (Colors):** 1-2 gün
**Phase 3 (Grid):** 3-4 gün
**Phase 4 (Data Viz):** 5-7 gün ⚠️ En uzun
**Phase 5 (Icons):** 2-3 gün
**Phase 6 (Components):** 3-4 gün
**Phase 7 (Advanced):** 4-5 gün

**Toplam:** ~20-28 gün (iş günü)

---

## 🚀 İlk Adımlar (Hemen Başlanabilir)

### 1. Typography Enhancement (Bugün)
```bash
# Tam type scale ekle
# 8 font weight tanımla
# Productive/Expressive sets
```

### 2. Color System Expansion (Bugün)
```bash
# Tam color palette (10 shades x 10 colors)
# Theme switching
# Data viz colors
```

### 3. Simple Data Viz (2. Gün)
```bash
# Bar chart template
# Line chart template
# Table with visual encoding
```

---

## 📚 Referanslar

- ✅ [CARBON_ELEMENTS.md](./CARBON_ELEMENTS.md) - Tam element listesi
- [Carbon Design System](https://carbondesignsystem.com/)
- [Carbon Charts](https://charts.carbondesignsystem.com/)
- [Typst Documentation](https://typst.app/docs/)
- [Quarto Guide](https://quarto.org/docs/guide/)

---

*Plan Hazırlayan: Claude*
*Tarih: 2 Ocak 2026*
*Proje: Chernobyl - Carbon PDF System*
