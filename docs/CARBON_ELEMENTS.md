# IBM Carbon Design System - Kapsamlı Element Listesi

> PDF Raporlar için Gelişmiş Tasarım Elementleri ve Uygulama Kılavuzu

## 📚 İçindekiler

1. [Typography (Tipografi)](#typography)
2. [Color System (Renk Sistemi)](#color-system)
3. [2x Grid & Layout (Izgara & Düzen)](#2x-grid--layout)
4. [Spacing (Boşluk)](#spacing)
5. [Icons & Pictograms (İkonlar & Piktogramlar)](#icons--pictograms)
6. [Data Visualization (Veri Görselleştirme)](#data-visualization)
7. [Components (Bileşenler)](#components)
8. [Patterns (Desenler)](#patterns)
9. [Accessibility (Erişilebilirlik)](#accessibility)
10. [Design Tokens](#design-tokens)
11. [Theming](#theming)

---

## Typography

### IBM Plex Font Ailesi

**4 Ana Tip:**
- **IBM Plex Sans** - Genel kullanım, body text
- **IBM Plex Serif** - Başlıklar, vurgu
- **IBM Plex Mono** - Kod, teknik içerik
- **IBM Plex Sans Condensed** - Dar alanlarda kullanım

**8 Ağırlık:**
1. Thin (100)
2. Extra Light (200)
3. Light (300)
4. Regular (400)
5. Text (450)
6. Medium (500)
7. Semi-Bold (600)
8. Bold (700)

**Her ağırlık için:**
- Roman (normal)
- True Italic (gerçek italik)

**100+ Dil Desteği:**
- Arabic, Chinese, Cyrillic, Devanagari, Greek, Hebrew, Japanese, Korean, Thai
- IBM Plex Math (5000+ matematiksel sembol)

### Type Scale (Tipografi Ölçeği)

**Productive Type Set** (Ürün odaklı):
```
display-04: 112px / 7rem
display-03: 84px / 5.25rem
display-02: 60px / 3.75rem
display-01: 54px / 3.375rem
heading-07: 48px / 3rem
heading-06: 42px / 2.625rem
heading-05: 32px / 2rem
heading-04: 28px / 1.75rem
heading-03: 20px / 1.25rem
heading-02: 16px / 1rem
heading-01: 14px / 0.875rem
body-long-02: 16px / 1rem
body-long-01: 14px / 0.875rem
body-short-02: 16px / 1rem
body-short-01: 14px / 0.875rem
body-compact-02: 16px / 1rem
body-compact-01: 14px / 0.875rem
code-02: 14px / 0.875rem
code-01: 12px / 0.75rem
label-01: 12px / 0.75rem
label-02: 14px / 0.875rem
helper-text-01: 12px / 0.75rem
helper-text-02: 14px / 0.875rem
legal-01: 12px / 0.75rem
legal-02: 14px / 0.875rem
```

**Expressive Type Set** (Web, grafik, baskı):
- Daha dinamik tipografi hiyerarşisi
- Daha geniş type scale
- Daha fazla dramatic sizing

### Line Heights (Satır Yükseklikleri)

- **Tight**: 1.125 (18px at 16px base)
- **Default**: 1.5 (24px at 16px base)
- **Loose**: 1.75 (28px at 16px base)

### Letter Spacing

```scss
$letter-spacing-01: 0.16px   // Küçük metin
$letter-spacing-02: 0px      // Body metin
$letter-spacing-03: -0.64px  // Büyük başlıklar
```

### Type Tokens Kullanımı

```scss
// Carbon type tokens
@use '@carbon/type';

.heading {
  @include type.type-style('heading-05');
}

.body {
  @include type.type-style('body-long-02');
}
```

---

## Color System

### Ana Renk Paletleri

**Blue (Primary):**
- blue-10: #edf5ff
- blue-20: #d0e2ff
- blue-30: #a6c8ff
- blue-40: #78a9ff
- blue-50: #4589ff
- blue-60: #0f62fe ⭐ (Primary Interactive)
- blue-70: #0043ce
- blue-80: #002d9c
- blue-90: #001d6c
- blue-100: #001141

**Gray (Neutral):**
- white: #ffffff
- gray-10: #f4f4f4
- gray-20: #e0e0e0
- gray-30: #c6c6c6
- gray-40: #a8a8a8
- gray-50: #8d8d8d
- gray-60: #6f6f6f
- gray-70: #525252
- gray-80: #393939
- gray-90: #262626
- gray-100: #161616 ⭐ (Text Primary)
- black: #000000

**Cool Gray:**
- cool-gray-10: #f2f4f8
- cool-gray-20: #dde1e6
- cool-gray-30: #c1c7cd
- cool-gray-40: #a2a9b0
- cool-gray-50: #878d96
- cool-gray-60: #697077
- cool-gray-70: #4d5358
- cool-gray-80: #343a3f
- cool-gray-90: #21272a
- cool-gray-100: #121619

**Warm Gray:**
- warm-gray-10: #f7f3f2
- warm-gray-20: #e5e0df
- warm-gray-30: #cac5c4
- warm-gray-40: #ada8a8
- warm-gray-50: #8f8b8b
- warm-gray-60: #726e6e
- warm-gray-70: #565151
- warm-gray-80: #3c3838
- warm-gray-90: #272525
- warm-gray-100: #171414

**Red (Danger/Error):**
- red-10: #fff1f1
- red-20: #ffd7d9
- red-30: #ffb3b8
- red-40: #ff8389
- red-50: #fa4d56
- red-60: #da1e28 ⭐ (Error)
- red-70: #a2191f
- red-80: #750e13
- red-90: #520408
- red-100: #2d0709

**Green (Success):**
- green-10: #defbe6
- green-20: #a7f0ba
- green-30: #6fdc8c
- green-40: #42be65
- green-50: #24a148
- green-60: #198038 ⭐ (Success)
- green-70: #0e6027
- green-80: #044317
- green-90: #022d0d
- green-100: #071908

**Yellow (Warning):**
- yellow-10: #fcf4d6
- yellow-20: #fddc69
- yellow-30: #f1c21b ⭐ (Warning)
- yellow-40: #d2a106
- yellow-50: #b28600
- yellow-60: #8e6a00
- yellow-70: #684e00
- yellow-80: #483700
- yellow-90: #302400
- yellow-100: #1c1500

**Orange:**
- orange-10: #fff2e8
- orange-20: #ffd9be
- orange-30: #ffb784
- orange-40: #ff832b
- orange-50: #eb6200
- orange-60: #ba4e00
- orange-70: #8a3800
- orange-80: #5e2900
- orange-90: #3e1a00
- orange-100: #231000

**Purple (Accent):**
- purple-10: #f6f2ff
- purple-20: #e8daff
- purple-30: #d4bbff
- purple-40: #be95ff
- purple-50: #a56eff
- purple-60: #8a3ffc ⭐ (Code Keywords)
- purple-70: #6929c4
- purple-80: #491d8b
- purple-90: #31135e
- purple-100: #1c0f30

**Cyan (Accent):**
- cyan-10: #e5f6ff
- cyan-20: #bae6ff
- cyan-30: #82cfff
- cyan-40: #33b1ff
- cyan-50: #1192e8 ⭐ (Links)
- cyan-60: #0072c3
- cyan-70: #00539a
- cyan-80: #003a6d
- cyan-90: #012749
- cyan-100: #061727

**Teal:**
- teal-10: #d9fbfb
- teal-20: #9ef0f0
- teal-30: #3ddbd9
- teal-40: #08bdba
- teal-50: #009d9a
- teal-60: #007d79
- teal-70: #005d5d
- teal-80: #004144
- teal-90: #022b30
- teal-100: #081a1c

**Magenta:**
- magenta-10: #fff0f7
- magenta-20: #ffd6e8
- magenta-30: #ffafd2
- magenta-40: #ff7eb6
- magenta-50: #ee5396
- magenta-60: #d02670
- magenta-70: #9f1853
- magenta-80: #740937
- magenta-90: #510224
- magenta-100: #2a0a18

### 4 Tema Modu

**1. White Theme (G0)**
- Background: white
- En yaygın kullanım
- Gün içi, parlak ortamlar

**2. G10 (Light Gray)**
- Background: gray-10
- Hafif kontrast
- Web ve ürünler için

**3. G90 (Dark Gray)**
- Background: gray-90
- Karanlık tema
- Gece modu

**4. G100 (Black)**
- Background: gray-100
- En yüksek kontrast
- Profesyonel/teknik uygulamalar

### Color Tokens

**Background Tokens:**
```scss
$background
$background-active
$background-hover
$background-selected
$background-selected-hover
$background-inverse
$background-inverse-hover
$background-brand
```

**Layer Tokens:**
```scss
$layer-01
$layer-02
$layer-03
$layer-active-01
$layer-active-02
$layer-active-03
$layer-hover-01
$layer-hover-02
$layer-hover-03
$layer-selected-01
$layer-selected-02
$layer-selected-03
$layer-accent-01
$layer-accent-02
$layer-accent-03
$layer-accent-active-01
$layer-accent-active-02
$layer-accent-active-03
$layer-accent-hover-01
$layer-accent-hover-02
$layer-accent-hover-03
```

**Field Tokens:**
```scss
$field-01
$field-02
$field-03
$field-hover-01
$field-hover-02
$field-hover-03
```

**Border Tokens:**
```scss
$border-subtle-00
$border-subtle-01
$border-subtle-02
$border-subtle-03
$border-subtle-selected-01
$border-subtle-selected-02
$border-subtle-selected-03
$border-strong-01
$border-strong-02
$border-strong-03
$border-tile-01
$border-tile-02
$border-tile-03
$border-inverse
$border-interactive
$border-disabled
```

**Text Tokens:**
```scss
$text-primary
$text-secondary
$text-placeholder
$text-helper
$text-error
$text-inverse
$text-on-color
$text-on-color-disabled
$text-disabled
```

**Link Tokens:**
```scss
$link-primary
$link-primary-hover
$link-secondary
$link-visited
$link-inverse
$link-inverse-active
$link-inverse-hover
```

**Icon Tokens:**
```scss
$icon-primary
$icon-secondary
$icon-on-color
$icon-on-color-disabled
$icon-interactive
$icon-inverse
$icon-disabled
```

**Support Tokens:**
```scss
$support-error
$support-success
$support-warning
$support-info
$support-error-inverse
$support-success-inverse
$support-warning-inverse
$support-info-inverse
$support-caution-major
$support-caution-minor
$support-caution-undefined
```

### Data Visualization Renkleri

**Categorical Palette (14 renk):**
1. purple-70: #6929c4
2. cyan-50: #1192e8
3. teal-70: #005d5d
4. magenta-70: #9f1853
5. red-50: #fa4d56
6. red-90: #520408
7. green-60: #198038
8. blue-80: #002d9c
9. magenta-50: #ee5396
10. purple-50: #a56eff
11. teal-50: #009d9a
12. cyan-90: #012749
13. blue-50: #4589ff
14. green-30: #6fdc8c

**Sequential Palettes:**
- Monochromatic (tek renk gradyanları)
- Diverging (iki uçlu gradyanlar)
- 1-color, 2-color, 3-color, 4-color, 5-color seçenekleri

**Alert Palette:**
- $support-error: #da1e28
- $support-success: #24a148
- $support-warning: #f1c21b
- $support-info: #0043ce

---

## 2x Grid & Layout

### 2x Grid Konsepti

**Temel Prensipler:**
- Her şey 2'nin katları: 2, 4, 8, 16, 32, 64 sütun
- 8px mini unit (temel birim)
- 16 sütunlu responsive grid
- 5 breakpoint

### Breakpoints

```scss
// Carbon breakpoints
sm: 320px   (0-671px)      // 4 sütun
md: 672px   (672-1055px)   // 8 sütun
lg: 1056px  (1056-1311px)  // 16 sütun
xlg: 1312px (1312-1583px)  // 16 sütun
max: 1584px (1584px+)      // 16 sütun
```

### Grid Modes (Gutter Yapıları)

**1. Wide (Varsayılan):**
- 32px gutter
- En yaygın kullanım
- Daha fazla "nefes alma" alanı

**2. Narrow:**
- 16px gutter
- Daha sıkışık layout
- Daha fazla içerik alanı

**3. Condensed:**
- 1px gutter
- Çok yoğun içerik
- Data tables için ideal

### Grid Implementation

```scss
@use '@carbon/grid';

// CSS Grid kullanımı
.container {
  @include grid.css-grid();
}

.column {
  @include grid.column(4); // 4 sütun genişlik
}

// Responsive
.column {
  @include grid.column((
    sm: 4,
    md: 4,
    lg: 8,
    xlg: 8
  ));
}

// Offset
.column {
  @include grid.column(4);
  @include grid.offset(2); // 2 sütun sola kayma
}
```

### Subgrid

```scss
// Nested grids
.parent {
  @include grid.css-grid();
}

.child {
  @include grid.subgrid();
}
```

### Columns & Margins

**16 Column Grid:**
- Her sütun esnek genişlik
- Margins: kenarlardan boşluk
- Gutters: sütunlar arası boşluk

**Margin Değerleri:**
```
sm: 16px (her iki taraf)
md: 16px
lg: 16px
xlg: 16px
max: 24px
```

### Aspect Ratios

```scss
$aspect-ratios: (
  '16x9',   // Video, hero images
  '9x16',   // Portrait video
  '2x1',    // Banner
  '1x2',    // Tall content
  '4x3',    // Traditional
  '3x4',    // Portrait
  '1x1',    // Square
  '3x2',    // Landscape
  '2x3'     // Portrait
);
```

---

## Spacing

### Spacing Scale (Boşluk Ölçeği)

**Base Unit: 8px**

**Spacing Tokens:**
```scss
$spacing-01: 0.125rem  // 2px  - micro
$spacing-02: 0.25rem   // 4px  - micro
$spacing-03: 0.5rem    // 8px  - xs
$spacing-04: 0.75rem   // 12px - sm
$spacing-05: 1rem      // 16px - md
$spacing-06: 1.5rem    // 24px - lg
$spacing-07: 2rem      // 32px - xl
$spacing-08: 2.5rem    // 40px - 2xl
$spacing-09: 3rem      // 48px - 3xl
$spacing-10: 4rem      // 64px - 4xl
$spacing-11: 5rem      // 80px - 5xl
$spacing-12: 6rem      // 96px - 6xl
$spacing-13: 10rem     // 160px - 7xl
```

### Container Tokens

```scss
$container-01: 1.5rem   // 24px
$container-02: 2rem     // 32px
$container-03: 2.5rem   // 40px
$container-04: 3rem     // 48px
$container-05: 4rem     // 64px
```

### Icon Size Tokens

```scss
$icon-size-01: 1rem     // 16px
$icon-size-02: 1.25rem  // 20px
```

### Layout Modülleri

**Vertical Rhythm:**
- Consistent spacing between sections
- 8px multiples
- Section spacing: $spacing-09 veya $spacing-10

**Horizontal Spacing:**
- Gutters
- Margins
- Padding

### Uygulama

```scss
.section {
  padding: $spacing-07 0; // 32px vertical
  margin-bottom: $spacing-09; // 48px
}

.card {
  padding: $spacing-05; // 16px
  gap: $spacing-04; // 12px
}

.stack {
  > * + * {
    margin-top: $spacing-05; // 16px between items
  }
}
```

---

## Icons & Pictograms

### Icons (UI İkonları)

**Boyutlar:**
- 16px (varsayılan) - En yaygın, inline text
- 20px - Listelerde, form elements
- 24px - Toolbar, navigation
- 32px - Önemli aksiyonlar, empty states

**Stiller:**
- Outlined (çizgili) - Varsayılan, pasif durumlar
- Filled (dolu) - Seçili durumlar, aktif

**Kategoriler:**
- **Action icons**: add, edit, delete, save, download, upload, copy, paste
- **Status icons**: checkmark, warning, error, information, help
- **Navigation icons**: arrow, chevron, menu, search, home, close
- **Object icons**: document, folder, image, video, calendar, user
- **Social icons**: twitter, linkedin, github, slack
- **File type icons**: pdf, doc, xls, ppt, zip, csv
- **Device icons**: mobile, desktop, tablet, watch
- **Communication icons**: email, chat, notification, phone

**2000+ İkon Mevcut**

### Pictograms (Piktogramlar)

**Boyutlar:**
- 32px (small)
- 48px (medium)
- 64px (large)
- 80px (xl)

**Kullanım:**
- İllüstrasyonlar
- Empty states
- Hero sections
- Feature highlights
- Onboarding
- Error pages

**4 Renk Teması:**
1. Dark (koyu arka plan - white strokes)
2. Light (açık arka plan - dark strokes)
3. Monochromatic Dark (single color on dark)
4. Monochromatic Light (single color on light)

**Kategoriler:**
- Abstract concepts
- Technology
- Business
- Healthcare
- Finance
- Education
- Environment
- Travel
- Food & Beverage

---

## Data Visualization

### Carbon Charts Kütüphanesi

**30+ Chart Türü Mevcut**

### Comparison Charts

**1. Bar Chart**
- Simple bar
- Grouped bar
- Stacked bar
- Horizontal bar
- Floating bar
- Karşılaştırma için ideal

**2. Lollipop Chart**
- Minimal bar alternative
- Dot + line kombinasyonu

**3. Bullet Chart**
- KPI tracking
- Target vs actual
- Performance bands

### Trend Charts

**1. Line Chart**
- Simple line
- Multi-series line
- Stepped line
- Curved line
- Sparkline

**2. Area Chart**
- Simple area
- Stacked area
- Gradient area
- Bounded area

**3. Combo Chart**
- Line + Bar kombinasyonu
- Dual axis

### Part-to-Whole Charts

**1. Pie Chart**
- Standard pie
- Exploded pie
- Semi-circle pie

**2. Donut Chart**
- Standard donut
- Stacked donut

**3. Meter Chart**
- Proportional meter
- Arc meter

**4. Gauge Chart**
- Semi-circular gauge
- Full gauge

### Correlation Charts

**1. Scatter Plot**
- Simple scatter
- Bubble chart (3D data)
- Connected scatter

**2. Heat Map**
- Matrix heat map
- Calendar heat map

### Geospatial Charts

**1. Choropleth Map**
- Geographic regions
- Color-coded values

**2. Proportional Symbol Map**
- Sized markers on map

### Connection Charts

**1. Alluvial (Sankey) Diagram**
- Flow gösterimi
- Process flows
- Resource allocation

**2. Network Diagram**
- Node-link diagrams
- Force-directed layout

**3. Tree Diagram**
- Hierarchical structures
- Org charts

### Part-to-Whole Hierarchical

**1. Treemap**
- Nested rectangles
- Size = value

**2. Circle Pack**
- Nested circles
- Proportional sizes

**3. Sunburst**
- Radial treemap
- Multi-level hierarchy

### Multi-dimensional

**1. Radar/Spider Chart**
- Multi-variable comparison
- Skill analysis

**2. Parallel Coordinates**
- High-dimensional data
- Pattern finding

**3. Box Plot**
- Statistical distribution
- Quartiles & outliers

### Time-based

**1. Timeline**
- Event sequences
- Milestones

**2. Gantt Chart**
- Project scheduling
- Task duration

### Chart Anatomy (Grafik Anatomisi)

**Temel Bileşenler:**
```
┌─────────────────────────────────────────┐
│  Title                    [Legend]      │  ← Header
│  Subtitle                               │
├─────────────────────────────────────────┤
│  Y-Axis  │                              │
│  Label   │     ┌────────────────────┐   │
│          │     │   Chart Area       │   │  ← Body
│          │     │                    │   │
│          │     └────────────────────┘   │
│          └──────────────────────────────│
│                  X-Axis Label           │
├─────────────────────────────────────────┤
│  [Toolbar] [Export] [Zoom]              │  ← Footer (optional)
└─────────────────────────────────────────┘
```

**Detaylı Bileşenler:**
- Title (başlık) - Required
- Subtitle (alt başlık) - Optional
- Legend (açıklama) - Top, bottom, left, right
- Axes (eksenler) - X, Y, secondary Y
- Grid lines (ızgara çizgileri) - Major, minor
- Data markers - Points, bars, areas
- Labels - Data labels, axis labels
- Zero baseline - Reference line
- Threshold lines - Target, average
- Annotations - Callouts, highlights

### Chart Configuration

```javascript
const options = {
  title: "Monthly Revenue",
  axes: {
    left: {
      title: "Revenue ($)",
      mapsTo: "value",
      scaleType: "linear"
    },
    bottom: {
      title: "Month",
      mapsTo: "date",
      scaleType: "time"
    }
  },
  curve: "curveMonotoneX",
  height: "400px",
  theme: "g100",
  color: {
    scale: {
      "Product A": "#6929c4",
      "Product B": "#1192e8"
    }
  },
  legend: {
    alignment: "center",
    position: "bottom"
  }
};
```

### Accessibility in Charts

- Color + pattern/texture combinations
- WCAG AA compliant contrast
- Data table fallback
- Alt text for images

---

## Components

### Form Components

**Text Inputs:**
- Text input (single line)
- Text area (multi-line)
- Password input
- Number input
- Search input
- Date picker
- Time picker

**Selection Controls:**
- Checkbox
- Radio button
- Toggle
- Dropdown (single select)
- Multi-select dropdown
- Combo box
- Filterable dropdown

**Sliders:**
- Slider
- Range slider

**File Upload:**
- File uploader
- Drag and drop

**Buttons:**
- Primary button
- Secondary button
- Tertiary button
- Ghost button
- Danger button
- Icon button
- Button with icon
- Button set

### Navigation Components

**Global Navigation:**
- Header
- Side navigation
- UI shell

**Local Navigation:**
- Tabs
- Content switcher
- Breadcrumb
- Pagination
- Menu
- Context menu

**Page Navigation:**
- Link
- Skip to content
- Back to top

### Content Components

**Containers:**
- Tile (clickable, selectable, expandable)
- Card
- Accordion
- Modal
- Side panel
- Popover

**Data Display:**
- Data table (basic, sortable, expandable, batch actions)
- Structured list
- List
- Definition list
- Tree view

**Status:**
- Tag
- Badge
- Status indicator
- Progress bar
- Progress indicator (steps)

### Feedback Components

**Notifications:**
- Inline notification
- Toast notification
- Actionable notification

**Messaging:**
- Tooltip
- Definition tooltip
- Interactive tooltip
- Toggletip
- Popover

**Dialogs:**
- Modal (passive, transactional, danger)
- Inline confirm
- Tearsheet
- Full page

### Data Entry Helpers

- Form
- Form group
- Form label
- Form hint
- Form error
- Form requirement

### Media Components

- Image
- Image with caption
- Aspect ratio
- Icon
- Pictogram

### Layout Components

- Grid
- Stack (vertical spacing)
- Flex (flexbox container)
- Layer (elevation)
- Theme (context)

---

## Patterns

### Common UI Patterns

**1. Forms Pattern:**
- Single-column layout preferred
- Required field indicator (*)
- Inline validation
- Error summary at top
- Clear action buttons

**2. Empty States:**
- Illustrative pictogram
- Descriptive heading
- Helpful message
- Primary action button

**3. Error Handling:**
- Inline errors for fields
- Notification for page-level
- Error pages (404, 500)
- Retry actions

**4. Search Pattern:**
- Search input in header
- Typeahead/autocomplete
- Recent searches
- Search results page

**5. Filtering:**
- Filter panel (side or top)
- Active filter tags
- Clear all filters
- Filter count indicator

**6. Data Tables:**
- Column sorting
- Row selection (single/batch)
- Pagination
- Row expansion
- Inline actions
- Batch actions toolbar

**7. Wizards/Multi-step:**
- Progress indicator
- Step validation
- Save progress option
- Clear navigation

### Page Templates

**1. Overview/Dashboard:**
- Key metrics at top
- Charts and graphs
- Recent activity
- Quick actions

**2. List/Browse:**
- Search and filter
- Data table or card grid
- Pagination
- Batch actions

**3. Detail/Profile:**
- Header with key info
- Tabbed content
- Related items
- Actions

**4. Create/Edit:**
- Form layout
- Validation
- Save/Cancel actions
- Unsaved changes warning

**5. Settings:**
- Grouped sections
- Toggle controls
- Save behavior (auto/manual)

---

## Accessibility

### WCAG 2.1 Compliance

**Level AA Requirements:**
- 4.5:1 contrast ratio for text
- 3:1 contrast ratio for UI elements
- Focus indicators visible
- Keyboard navigable
- Screen reader compatible

### Color Accessibility

```scss
// High contrast pairs
$text-primary on $background        // 10.5:1
$text-secondary on $background      // 6.5:1
$text-on-color on $interactive     // 4.5:1+
$text-on-color on $support-error   // 4.5:1+
```

### Screen Reader Support

```html
<!-- Accessible labels -->
<button aria-label="Close dialog">
  <CloseIcon />
</button>

<!-- Live regions -->
<div aria-live="polite" aria-atomic="true">
  Form submitted successfully
</div>

<!-- Skip links -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>
```

---

## Design Tokens

### Token Structure

**Token Naming Convention:**
```
$[category]-[property]-[variant]-[state]

Examples:
$color-background-primary
$spacing-inline-md
$border-radius-lg
$shadow-elevation-02
```

### Token Categories

**1. Color Tokens:**
```scss
// Background
$background
$layer-01, $layer-02, $layer-03

// Text
$text-primary
$text-secondary

// Interactive
$interactive
$link-primary

// Support
$support-error
$support-success
```

**2. Spacing Tokens:**
```scss
$spacing-01 through $spacing-13
$container-01 through $container-05
```

**3. Typography Tokens:**
```scss
$font-family-sans
$font-family-serif
$font-family-mono
$font-size-01 through $font-size-10
$line-height-tight, $line-height-default, $line-height-loose
$font-weight-light, $font-weight-regular, $font-weight-semibold
```

**4. Size Tokens:**
```scss
$size-xsmall: 24px
$size-small: 32px
$size-medium: 40px
$size-large: 48px
$size-xlarge: 64px
$size-2xlarge: 80px
```

**5. Border Tokens:**
```scss
$border-width-01: 1px
$border-width-02: 2px
$border-width-03: 3px

$border-radius-01: 2px
$border-radius-02: 4px
$border-radius-03: 8px
$border-radius-round: 50%
```

**6. Shadow Tokens:**
```scss
$shadow-01: 0 2px 6px rgba(0,0,0,0.3);  // Raised
$shadow-02: 0 4px 8px rgba(0,0,0,0.3);  // Overlay
$shadow-03: 0 8px 24px rgba(0,0,0,0.3); // Sticky
```

**7. Z-Index Tokens:**
```scss
$z-index-dropdown: 9000
$z-index-sticky: 9100
$z-index-fixed: 9200
$z-index-overlay: 9300
$z-index-modal: 9400
$z-index-popover: 9500
$z-index-notification: 9600
$z-index-tooltip: 9700
```

### Token Usage

```scss
@use '@carbon/themes';
@use '@carbon/type';
@use '@carbon/layout';

.component {
  background-color: themes.$background;
  color: themes.$text-primary;
  padding: layout.$spacing-05;
  @include type.type-style('body-long-02');
  border: layout.$border-width-01 solid themes.$border-subtle-01;
  border-radius: layout.$border-radius-02;
}
```

---

## Theming

### Theme Implementation

**CSS Custom Properties:**
```scss
:root {
  // Light theme (default)
  --cds-background: #ffffff;
  --cds-layer-01: #f4f4f4;
  --cds-text-primary: #161616;
  --cds-text-secondary: #525252;
  --cds-interactive: #0f62fe;
  --cds-border-subtle-01: #e0e0e0;
}

[data-carbon-theme="g100"] {
  // Dark theme
  --cds-background: #161616;
  --cds-layer-01: #262626;
  --cds-text-primary: #f4f4f4;
  --cds-text-secondary: #c6c6c6;
  --cds-interactive: #4589ff;
  --cds-border-subtle-01: #393939;
}
```

### Custom Themes

```scss
@use '@carbon/themes';

// Custom theme
$custom-theme: themes.merge(
  themes.$white,
  (
    interactive: #6929c4,       // Purple primary
    link-primary: #6929c4,
    button-primary: #6929c4,
    focus: #6929c4,
  )
);

:root {
  @include themes.theme($custom-theme);
}
```

---

## PDF Export Considerations

### Print-Specific Styles

```scss
@media print {
  // Page setup
  @page {
    size: A4;
    margin: 2cm;
  }

  // Hide interactive elements
  .no-print,
  button,
  .navigation {
    display: none !important;
  }

  // Ensure text is black
  body {
    color: #000 !important;
    background: #fff !important;
  }

  // Break handling
  h1, h2, h3 {
    page-break-after: avoid;
  }

  table, figure {
    page-break-inside: avoid;
  }

  // Link URLs
  a[href]::after {
    content: " (" attr(href) ")";
    font-size: 0.8em;
  }
}
```

### PDF Color Considerations

```scss
// CMYK-safe colors for print
$print-blue: #0043ce;      // Blue-80 (better for print)
$print-gray: #161616;      // Gray-100
$print-red: #a2191f;       // Red-70
$print-green: #0e6027;     // Green-70
```

### Typography for PDF

```scss
// Ensure embedded fonts
@font-face {
  font-family: 'IBM Plex Sans';
  src: url('IBMPlexSans-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

// Print-optimized sizes
.print-body {
  font-size: 10pt;
  line-height: 1.5;
}

.print-heading {
  font-size: 14pt;
  font-weight: 600;
}
```

---

## Kaynaklar

### Resmi Dokümantasyon
- [Carbon Design System](https://carbondesignsystem.com/)
- [Carbon Components](https://carbondesignsystem.com/components/overview/)
- [Carbon Patterns](https://carbondesignsystem.com/patterns/overview/)
- [Carbon Charts](https://charts.carbondesignsystem.com/)
- [Carbon Elements](https://carbondesignsystem.com/elements/typography/overview/)
- [2x Grid System](https://carbondesignsystem.com/elements/2x-grid/usage/)
- [Icons Library](https://carbondesignsystem.com/elements/icons/library/)
- [Pictograms](https://carbondesignsystem.com/elements/pictograms/library/)
- [Color Tokens](https://carbondesignsystem.com/elements/color/tokens/)
- [Accessibility](https://carbondesignsystem.com/guidelines/accessibility/overview/)

### GitHub Repositories
- [carbon-design-system/carbon](https://github.com/carbon-design-system/carbon)
- [carbon-design-system/carbon-charts](https://github.com/carbon-design-system/carbon-charts)
- [IBM/plex](https://github.com/IBM/plex)
- [carbon-design-system/carbon-icons](https://github.com/carbon-design-system/carbon-icons)
- [carbon-design-system/carbon-pictograms](https://github.com/carbon-design-system/carbon-pictograms)

### NPM Packages

```bash
# Core packages
npm install @carbon/react         # React components
npm install @carbon/styles        # Sass styles
npm install @carbon/themes        # Theme tokens

# Elements
npm install @carbon/colors        # Color tokens
npm install @carbon/type          # Typography tokens
npm install @carbon/grid          # Grid system
npm install @carbon/layout        # Spacing tokens

# Icons & Pictograms
npm install @carbon/icons         # Icon SVGs
npm install @carbon/icons-react   # React icons
npm install @carbon/pictograms    # Pictogram SVGs
npm install @carbon/pictograms-react # React pictograms

# Charts
npm install @carbon/charts        # Vanilla charts
npm install @carbon/charts-react  # React charts

# Utilities
npm install @carbon/feature-flags # Feature toggles
npm install @carbon/telemetry     # Usage tracking
```

### Figma Resources
- [Carbon Design Kit for Figma](https://www.figma.com/community/file/867034983513005028)
- [IBM UI Icon Library](https://www.figma.com/community/file/884279660631941978)
- [IBM Pictogram Library](https://www.figma.com/community/file/943754408196798498)
- [Carbon Charts Kit](https://www.figma.com/community/file/898042258296410535)

### Sketch Resources
- [Carbon Design Kit for Sketch](https://www.carbondesignsystem.com/designing/kits/sketch/)
- IBM Design Language Kit

### Adobe XD Resources
- Carbon Design Kit for Adobe XD

### Research & Articles
- [IBM Carbon UI: Concepts and Design (ResearchGate)](https://www.researchgate.net/publication/376450590_IBM_Carbon_UI_Concepts_and_Design)
- [Carbon Design System by IBM (Medium)](https://medium.com/elirius/carbon-design-system-by-ibm-97a28870939f)
- [Carbon Design System Overview (Motiff)](https://motiff.com/design-system-wiki/design-systems-overview/carbon-design-system-overview-ibm-framework-consistent-scalable-ui-ux)
- [Building with Carbon Design System](https://www.ibm.com/design/language/resources/)

### IBM Design Language
- [IBM Design Language](https://www.ibm.com/design/language/)
- [IBM 2x Grid](https://www.ibm.com/design/language/2x-grid/)
- [IBM Typeface](https://www.ibm.com/design/language/typography/typeface/)
- [IBM Plex Official](https://www.ibm.com/plex/)
- [IBM Color Palette](https://www.ibm.com/design/language/color/)
- [IBM Iconography](https://www.ibm.com/design/language/iconography/ui-icons/usage/)
- [IBM Photography](https://www.ibm.com/design/language/photography/)

### Community Resources
- [Carbon Design System Slack](https://www.carbondesignsystem.com/community/slack/)
- [Stack Overflow - carbon-design-system](https://stackoverflow.com/questions/tagged/carbon-design-system)
- [GitHub Discussions](https://github.com/carbon-design-system/carbon/discussions)

---

## Version History

| Versiyon | Tarih | Değişiklikler |
|----------|-------|---------------|
| v11 | 2021 | Mevcut major versiyon |
| v10 | 2019 | CSS grid, design tokens |
| v9 | 2018 | React components |

---

## Sonraki Adımlar

1. ✅ Kapsamlı element listesi oluşturuldu
2. ✅ Tüm renk paletleri eklendi
3. ✅ Component listesi genişletildi
4. ✅ Patterns bölümü eklendi
5. ✅ Accessibility rehberi eklendi
6. ✅ Design tokens detaylandırıldı
7. ✅ Theming bölümü eklendi
8. ⏭️ PDF export örnekleri oluşturma
9. ⏭️ Data visualization implementasyonu
10. ⏭️ Örnek rapor şablonları

---

*Bu dokümantasyon IBM Carbon Design System v11 temel alınarak hazırlanmıştır.*
*Son güncelleme: 2 Ocak 2026*
