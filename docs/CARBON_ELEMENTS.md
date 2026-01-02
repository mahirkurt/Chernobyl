# IBM Carbon Design System - Kapsamlı Element Listesi

> PDF Raporlar için Gelişmiş Tasarım Elementleri ve Uygulama Kılavuzu

## 📚 İçindekiler

1. [Typography (Tipografi)](#typography)
2. [Color System (Renk Sistemi)](#color-system)
3. [2x Grid & Layout (Izgara & Düzen)](#2x-grid--layout)
4. [Spacing (Boşluk)](#spacing)
5. [Icons & Pictograms (İkonlar & Piktogramlar)](#icons--pictograms)
6. [Data Visualization (Veri Görselleştirme)](#data-visualization)
7. [Motion & Animation (Hareket & Animasyon)](#motion--animation)
8. [Components (Bileşenler)](#components)

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
code-02: 14px / 0.875rem
code-01: 12px / 0.75rem
label-01: 12px / 0.75rem
helper-text-01: 12px / 0.75rem
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

**Red (Danger/Error):**
- red-10 → red-100
- red-60: #da1e28 ⭐ (Error)

**Green (Success):**
- green-10 → green-100
- green-60: #24a148 ⭐ (Success)

**Yellow (Warning):**
- yellow-20: #fdd13a ⭐ (Warning)

**Purple (Accent):**
- purple-60: #8a3ffc ⭐ (Code Keywords)

**Cyan (Accent):**
- cyan-50: #1192e8 ⭐ (Links)

**Magenta, Teal, Orange** - Veri görselleştirme için ek renkler

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

**UI Tokens:**
```scss
$ui-background
$ui-01, $ui-02, $ui-03, $ui-04, $ui-05
$interactive-01, $interactive-02, $interactive-03, $interactive-04
$danger-01, $danger-02
$focus
$inverse-01, $inverse-02
$field-01, $field-02
$border-subtle, $border-strong
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
```

**Link Tokens:**
```scss
$link-primary
$link-secondary
$link-visited
$link-inverse
```

### Data Visualization Renkleri

**Categorical Palette (14 renk):**
1. purple-70
2. cyan-50
3. teal-70
4. magenta-70
5. red-50
6. red-90
7. green-60
8. blue-80
9. magenta-50
10. purple-50
11. teal-50
12. cyan-90
13. blue-50
14. green-30

**Sequential Palettes:**
- Monochromatic (tek renk gradyanları)
- Diverging (iki uçlu gradyanlar)

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
sm: 320px   (0-671px)
md: 672px   (672-1055px)
lg: 1056px  (1056-1311px)
xlg: 1312px (1312-1583px)
max: 1584px (1584px+)
```

### Grid Modes (Gutter Yapıları)

**1. Wide (Varsayılan):**
- 32px gutter
- En yaygın kullanım

**2. Narrow:**
- 16px gutter
- Daha sıkışık layout

**3. Condensed:**
- 1px gutter
- Çok yoğun içerik

### Grid Implementation

```scss
@use '@carbon/grid';

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
    md: 6,
    lg: 8
  ));
}
```

### Columns & Margins

**16 Column Grid:**
- Her sütun esnek genişlik
- Margins: kenarlardan boşluk
- Gutters: sütunlar arası boşluk

**Margin Değerleri:**
```
sm: 16px
md: 16px
lg: 16px
xlg: 16px
max: 24px
```

---

## Spacing

### Spacing Scale (Boşluk Ölçeği)

**Base Unit: 8px**

**Spacing Tokens:**
```scss
$spacing-01: 0.125rem  // 2px
$spacing-02: 0.25rem   // 4px
$spacing-03: 0.5rem    // 8px
$spacing-04: 0.75rem   // 12px
$spacing-05: 1rem      // 16px
$spacing-06: 1.5rem    // 24px
$spacing-07: 2rem      // 32px
$spacing-08: 2.5rem    // 40px
$spacing-09: 3rem      // 48px
$spacing-10: 4rem      // 64px
$spacing-11: 5rem      // 80px
$spacing-12: 6rem      // 96px
$spacing-13: 10rem     // 160px
```

### Layout Modülleri

**Vertical Rhythm:**
- Consistent spacing between sections
- 8px multiples

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
```

---

## Icons & Pictograms

### Icons (UI İkonları)

**Boyutlar:**
- 16px (varsayılan) - En yaygın
- 20px - Listelerde
- 24px - Toolbar
- 32px - Önemli aksiyonlar

**Stiller:**
- Outlined (çizgili) - Varsayılan
- Filled (dolu) - Seçili durumlar

**Kategoriler:**
- Action icons (düzenle, sil, ekle)
- Status icons (uyarı, hata, başarı)
- Navigation icons (ok, menu, arama)
- Social icons (sosyal medya)
- File type icons (pdf, doc, xls)

**2000+ İkon Mevcut**

### Pictograms (Piktogramlar)

**Boyutlar:**
- 48px
- 64px
- 80px
- 96px
- 128px

**Kullanım:**
- İllüstrasyonlar
- Empty states
- Hero sections
- Feature highlights

**4 Renk Teması:**
1. Dark (koyu arka plan)
2. Light (açık arka plan)
3. Monochromatic Dark
4. Monochromatic Light

### Implementation

```javascript
import { Add16, Edit20, Delete24 } from '@carbon/icons-react';

<Add16 />
<Edit20 className="icon" />
<Delete24 aria-label="Delete item" />
```

**SVG kullanımı:**
```html
<svg class="icon">
  <use xlink:href="sprite.svg#add--16"></use>
</svg>
```

---

## Data Visualization

### Carbon Charts Kütüphanesi

**26 Chart Türü Mevcut**

### Basit Charts

**1. Area Chart**
- Zaman serisi verileri
- Trend gösterimi
- Filled line charts

**2. Bar Chart**
- Vertical / Horizontal
- Grouped bars
- Stacked bars
- Karşılaştırma için ideal

**3. Line Chart**
- Simple lines
- Multi-series
- Stepped lines
- Trend analizi

**4. Scatter Plot**
- Korelasyon analizi
- İki değişken karşılaştırma
- Outlier tespiti

**5. Pie / Donut Chart**
- Yüzdelik dağılım
- Part-to-whole ilişkiler

**6. Gauge Chart**
- Progress gösterimi
- KPI'lar

### Karmaşık Charts

**1. Alluvial (Sankey) Diagram**
- Flow gösterimi
- Süreç akışları
- Kaynak-hedef ilişkileri

**2. Heat Map**
- Yoğunluk gösterimi
- Matriks verileri
- Zamansal patterns

**3. Network Diagram**
- İlişki ağları
- Bağlantı haritaları
- Sosyal ağ analizi

**4. Parallel Coordinates**
- Çok boyutlu veri
- Karşılaştırmalı analiz

**5. Tree Diagram**
- Hiyerarşik yapılar
- Organizational charts
- Kategori ağaçları

**6. Treemap**
- Hiyerarşik oranlar
- Nested kategoriler

**7. Circle Pack**
- Hiyerarşik boyutlar
- Nested circles

**8. Radar/Spider Chart**
- Çok değişkenli karşılaştırma
- Yetenek analizi

**9. Bullet Chart**
- KPI tracking
- Target comparison

**10. Bubble Chart**
- 3 boyutlu veri
- Size + position encoding

### Data Viz Renk Paletleri

**Categorical (14 renk):**
- Her kategori için farklı renk
- Accessible contrast

**Sequential:**
- Tek renk gradyanları
- Sıralı veriler için

**Diverging:**
- Orta nokta referanslı
- Pozitif/negatif gösterimi

**Alert:**
- Error: red
- Warning: yellow
- Success: green
- Info: blue

### Chart Anatomy (Grafik Anatomisi)

**Temel Bileşenler:**
- Title (başlık)
- Subtitle (alt başlık)
- Legend (açıklama)
- Axes (eksenler)
- Grid lines (ızgara çizgileri)
- Data markers
- Tooltips
- Labels
- Zero baseline

### Accessibility

- Color + pattern/texture
- WCAG AA compliant
- Screen reader support
- Keyboard navigation
- High contrast mode

---

## Motion & Animation

### Motion Tokens

**2 Ana Kategori:**

**1. Productive (Üretken):**
- Hızlı, etkili
- Ürün arayüzleri için
- Kullanıcı odaklı

**2. Expressive (İfadeli):**
- Yavaş, dramatik
- Marketing, storytelling
- Marka odaklı

### Duration (Süre)

```scss
// Productive
$duration-fast-01: 70ms   // Micro-interactions
$duration-fast-02: 110ms  // Micro-interactions
$duration-moderate-01: 150ms // Transitions
$duration-moderate-02: 240ms // Transitions
$duration-slow-01: 400ms  // Complex animations
$duration-slow-02: 700ms  // Complex animations

// Expressive
$duration-expressive-01: 100ms
$duration-expressive-02: 240ms
$duration-expressive-03: 400ms
$duration-expressive-04: 700ms
$duration-expressive-05: 1000ms
```

### Easing (Hızlanma Eğrileri)

**Productive Easings:**
```scss
$entrance-productive: cubic-bezier(0, 0, 0.38, 0.9)
$exit-productive: cubic-bezier(0.2, 0, 1, 0.9)
$standard-productive: cubic-bezier(0.2, 0, 0.38, 0.9)
```

**Expressive Easings:**
```scss
$entrance-expressive: cubic-bezier(0, 0, 0.3, 1)
$exit-expressive: cubic-bezier(0.4, 0.14, 1, 1)
$standard-expressive: cubic-bezier(0.4, 0.14, 0.3, 1)
```

### Animation Principles

1. **Purposeful** - Her animasyon bir amaca hizmet eder
2. **Responsive** - Kullanıcı aksiyonlarına cevap
3. **Natural** - Fizik kurallarına uygun
4. **Efficient** - Performans odaklı
5. **Accessible** - `prefers-reduced-motion` desteği

---

## Components

### PDF Raporlar için Uygun Bileşenler

**1. Typography Components**
- Headings (6 seviye)
- Body text (long/short)
- Captions
- Labels
- Code blocks
- Quotes

**2. Layout Components**
- Grid
- Containers
- Spacers
- Dividers
- Sections

**3. Content Components**
- Tables (simple, complex, data)
- Lists (ordered, unordered, definition)
- Cards
- Tiles
- Accordions

**4. Data Components**
- Charts (tüm türleri)
- Gauges
- Progress indicators
- Statistics
- KPI cards

**5. Feedback Components**
- Notifications
- Toasts
- Inline notifications
- Banners

**6. Navigation Components**
- Breadcrumbs
- Tabs
- Side navigation
- Table of contents

**7. Media Components**
- Images
- Image with caption
- Image galleries
- Icons
- Pictograms

**8. Form Components** (interactive PDFs için)
- Text inputs
- Checkboxes
- Radio buttons
- Selects
- Buttons

**9. Status & Tags**
- Tags
- Status indicators
- Badges
- Labels

---

## Kaynaklar

### Resmi Dokümantasyon
- [Carbon Design System](https://carbondesignsystem.com/)
- [Carbon Charts](https://charts.carbondesignsystem.com/)
- [Carbon Elements](https://carbondesignsystem.com/elements/typography/overview/)
- [2x Grid System](https://carbondesignsystem.com/elements/2x-grid/usage/)
- [Icons Library](https://carbondesignsystem.com/elements/icons/code/)
- [Pictograms](https://carbondesignsystem.com/elements/pictograms/usage/)

### GitHub Repositories
- [carbon-design-system/carbon](https://github.com/carbon-design-system/carbon)
- [carbon-design-system/carbon-charts](https://github.com/carbon-design-system/carbon-charts)
- [IBM/plex](https://github.com/IBM/plex)
- [carbon-design-system/carbon-icons](https://github.com/carbon-design-system/carbon-icons)

### NPM Packages
```bash
npm install @carbon/react
npm install @carbon/styles
npm install @carbon/colors
npm install @carbon/themes
npm install @carbon/type
npm install @carbon/grid
npm install @carbon/layout
npm install @carbon/motion
npm install @carbon/icons
npm install @carbon/icons-react
npm install @carbon/pictograms
npm install @carbon/pictograms-react
npm install @carbon/charts
```

### Figma Resources
- [IBM Carbon Design Kit](https://www.figma.com/community/file/867034983513005028)
- IBM UI Icon Library
- IBM Pictogram Library

### Research & Articles
- [IBM Carbon UI: Concepts and Design (ResearchGate)](https://www.researchgate.net/publication/376450590_IBM_Carbon_UI_Concepts_and_Design)
- [Carbon Design System by IBM (Medium)](https://medium.com/elirius/carbon-design-system-by-ibm-97a28870939f)
- [Carbon Design System Overview (Motiff)](https://motiff.com/design-system-wiki/design-systems-overview/carbon-design-system-overview-ibm-framework-consistent-scalable-ui-ux)

### IBM Design Language
- [IBM Design Language](https://www.ibm.com/design/language/)
- [IBM 2x Grid](https://www.ibm.com/design/language/2x-grid/)
- [IBM Typeface](https://www.ibm.com/design/language/typography/typeface/)
- [IBM Plex Official](https://www.ibm.com/plex/)

---

## Sonraki Adımlar

1. ✅ Kapsamlı element listesi oluşturuldu
2. ⏭️ Gelişmiş typography sistemi implementasyonu
3. ⏭️ Data visualization entegrasyonu
4. ⏭️ 2x grid sistemi uygulaması
5. ⏭️ Icons & pictograms entegrasyonu
6. ⏭️ Gelişmiş şablonlar oluşturma
7. ⏭️ Örnek raporlar hazırlama

---

*Bu dokümantasyon IBM Carbon Design System v11 temel alınarak hazırlanmıştır.*
*Son güncelleme: 2 Ocak 2026*
