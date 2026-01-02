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

#### Type Scale (Productive)
| Token | Size | Line Height | Kullanım |
|-------|------|-------------|----------|
| `code-01` | 12px/0.75rem | 16px | Kod blokları |
| `code-02` | 14px/0.875rem | 20px | Inline code |
| `label-01` | 12px/0.75rem | 16px | Form etiketleri |
| `label-02` | 14px/0.875rem | 18px | Büyük etiketler |
| `helper-text-01` | 12px/0.75rem | 16px | Yardımcı metinler |
| `helper-text-02` | 14px/0.875rem | 18px | Açıklamalar |
| `legal-01` | 12px/0.75rem | 16px | Yasal metinler |
| `legal-02` | 14px/0.875rem | 18px | Dipnotlar |
| `body-compact-01` | 14px/0.875rem | 18px | Kompakt paragraf |
| `body-compact-02` | 16px/1rem | 22px | Kompakt gövde |
| `body-01` | 14px/0.875rem | 20px | Paragraf metni |
| `body-02` | 16px/1rem | 24px | Ana gövde metni |
| `heading-compact-01` | 14px/0.875rem | 18px | Kompakt başlık |
| `heading-compact-02` | 16px/1rem | 22px | Alt başlık |
| `heading-01` | 14px/0.875rem | 20px | H6 başlık |
| `heading-02` | 16px/1rem | 24px | H5 başlık |
| `heading-03` | 20px/1.25rem | 28px | H4 başlık |
| `heading-04` | 28px/1.75rem | 36px | H3 başlık |
| `heading-05` | 32px/2rem | 40px | H2 başlık |
| `heading-06` | 42px/2.625rem | 50px | H1 başlık |
| `heading-07` | 54px/3.375rem | 64px | Hero başlık |

#### Type Scale (Expressive)
| Token | Size | Line Height | Weight | Kullanım |
|-------|------|-------------|--------|----------|
| `display-01` | 42px | 50px | 300 | Küçük display |
| `display-02` | 42px | 50px | 600 | Vurgulu display |
| `display-03` | 54-84px | 64-94px | 300 | Responsive display |
| `display-04` | 84-156px | 94-164px | 300 | Büyük display |
| `quotation-01` | 20px | 28px | 400 | Alıntılar |
| `quotation-02` | 32px | 40px | 300 | Büyük alıntılar |

#### Font Families
| Token | Font | Kullanım |
|-------|------|----------|
| `font-family-sans` | 'IBM Plex Sans', sans-serif | Genel metin |
| `font-family-sans-condensed` | 'IBM Plex Sans Condensed', sans-serif | Dar alanlar |
| `font-family-serif` | 'IBM Plex Serif', serif | Editoryal içerik |
| `font-family-mono` | 'IBM Plex Mono', monospace | Kod blokları |
| `font-family-sans-arabic` | 'IBM Plex Sans Arabic', sans-serif | Arapça metin |
| `font-family-sans-hebrew` | 'IBM Plex Sans Hebrew', sans-serif | İbranice metin |

#### Font Weights
| Token | Weight | Kullanım |
|-------|--------|----------|
| `font-weight-thin` | 100 | Ultra hafif |
| `font-weight-extralight` | 200 | Çok hafif |
| `font-weight-light` | 300 | Hafif |
| `font-weight-regular` | 400 | Normal |
| `font-weight-medium` | 500 | Orta |
| `font-weight-semibold` | 600 | Yarı kalın |
| `font-weight-bold` | 700 | Kalın |

**Etki:** 🔥🔥🔥 (Çok Yüksek)
**Zorluk:** ⭐⭐ (Orta)

---

### Phase 2: Color System (⚡ Yüksek Öncelik)
**Durum:** Temel renkler mevcut, genişletilecek

✅ **Mevcut:**
- 6 temel renk (blue, gray, green, red, purple, cyan)
- Basic semantic colors

🎯 **Eklenecek:**

#### Core Color Palettes (10 Shade Her Biri)

##### Blue (Primary)
| Shade | Hex | RGB | Kullanım |
|-------|-----|-----|----------|
| Blue 10 | `#edf5ff` | 237, 245, 255 | Hover background |
| Blue 20 | `#d0e2ff` | 208, 226, 255 | Light background |
| Blue 30 | `#a6c8ff` | 166, 200, 255 | Border light |
| Blue 40 | `#78a9ff` | 120, 169, 255 | Border |
| Blue 50 | `#4589ff` | 69, 137, 255 | G90 primary |
| Blue 60 | `#0f62fe` | 15, 98, 254 | **Primary action** |
| Blue 70 | `#0043ce` | 0, 67, 206 | Hover |
| Blue 80 | `#002d9c` | 0, 45, 156 | Active |
| Blue 90 | `#001d6c` | 0, 29, 108 | Dark text |
| Blue 100 | `#001141` | 0, 17, 65 | Ultra dark |

##### Gray (Neutral)
| Shade | Hex | RGB | Kullanım |
|-------|-----|-----|----------|
| Gray 10 | `#f4f4f4` | 244, 244, 244 | Background (G10) |
| Gray 20 | `#e0e0e0` | 224, 224, 224 | Border subtle |
| Gray 30 | `#c6c6c6` | 198, 198, 198 | Border |
| Gray 40 | `#a8a8a8` | 168, 168, 168 | Placeholder |
| Gray 50 | `#8d8d8d` | 141, 141, 141 | Icon secondary |
| Gray 60 | `#6f6f6f` | 111, 111, 111 | Text helper |
| Gray 70 | `#525252` | 82, 82, 82 | Text secondary |
| Gray 80 | `#393939` | 57, 57, 57 | Text primary |
| Gray 90 | `#262626` | 38, 38, 38 | Background (G90) |
| Gray 100 | `#161616` | 22, 22, 22 | **Background (G100)** |

##### Green (Success)
| Shade | Hex | Kullanım |
|-------|-----|----------|
| Green 10 | `#defbe6` | Success background |
| Green 20 | `#a7f0ba` | Success light |
| Green 30 | `#6fdc8c` | Success border |
| Green 40 | `#42be65` | Success icon |
| Green 50 | `#24a148` | Success G90 |
| Green 60 | `#198038` | **Success primary** |
| Green 70 | `#0e6027` | Success hover |
| Green 80 | `#044317` | Success active |
| Green 90 | `#022d0d` | Success dark |
| Green 100 | `#071908` | Success ultra dark |

##### Red (Danger)
| Shade | Hex | Kullanım |
|-------|-----|----------|
| Red 10 | `#fff1f1` | Error background |
| Red 20 | `#ffd7d9` | Error light |
| Red 30 | `#ffb3b8` | Error border |
| Red 40 | `#ff8389` | Error icon |
| Red 50 | `#fa4d56` | **Error primary** |
| Red 60 | `#da1e28` | Error hover |
| Red 70 | `#a2191f` | Error active |
| Red 80 | `#750e13` | Error dark |
| Red 90 | `#520408` | Error ultra dark |
| Red 100 | `#2d0709` | Error deepest |

##### Yellow (Warning)
| Shade | Hex | Kullanım |
|-------|-----|----------|
| Yellow 10 | `#fcf4d6` | Warning background |
| Yellow 20 | `#fddc69` | Warning light |
| Yellow 30 | `#f1c21b` | **Warning primary** |
| Yellow 40 | `#d2a106` | Warning hover |
| Yellow 50 | `#b28600` | Warning dark |
| Yellow 60 | `#8e6a00` | Warning darker |

##### Purple (Accent)
| Shade | Hex | Kullanım |
|-------|-----|----------|
| Purple 10 | `#f6f2ff` | Purple background |
| Purple 20 | `#e8daff` | Purple light |
| Purple 30 | `#d4bbff` | Purple border |
| Purple 40 | `#be95ff` | Purple icon |
| Purple 50 | `#a56eff` | Purple G90 |
| Purple 60 | `#8a3ffc` | **Purple primary** |
| Purple 70 | `#6929c4` | Purple hover |
| Purple 80 | `#491d8b` | Purple active |
| Purple 90 | `#31135e` | Purple dark |
| Purple 100 | `#1c0f30` | Purple ultra dark |

##### Cyan (Info)
| Shade | Hex | Kullanım |
|-------|-----|----------|
| Cyan 10 | `#e5f6ff` | Info background |
| Cyan 20 | `#bae6ff` | Info light |
| Cyan 30 | `#82cfff` | Info border |
| Cyan 40 | `#33b1ff` | Info icon |
| Cyan 50 | `#1192e8` | Info G90 |
| Cyan 60 | `#0072c3` | **Info primary** |
| Cyan 70 | `#00539a` | Info hover |
| Cyan 80 | `#003a6d` | Info active |
| Cyan 90 | `#012749` | Info dark |
| Cyan 100 | `#061727` | Info ultra dark |

##### Magenta (Highlight)
| Shade | Hex | Kullanım |
|-------|-----|----------|
| Magenta 10 | `#fff0f7` | Magenta background |
| Magenta 20 | `#ffd6e8` | Magenta light |
| Magenta 30 | `#ffafd2` | Magenta border |
| Magenta 40 | `#ff7eb6` | Magenta icon |
| Magenta 50 | `#ee5396` | Magenta G90 |
| Magenta 60 | `#d02670` | **Magenta primary** |
| Magenta 70 | `#9f1853` | Magenta hover |
| Magenta 80 | `#740937` | Magenta active |
| Magenta 90 | `#510224` | Magenta dark |
| Magenta 100 | `#2a0a18` | Magenta ultra dark |

##### Teal (Secondary)
| Shade | Hex | Kullanım |
|-------|-----|----------|
| Teal 10 | `#d9fbfb` | Teal background |
| Teal 20 | `#9ef0f0` | Teal light |
| Teal 30 | `#3ddbd9` | Teal border |
| Teal 40 | `#08bdba` | Teal icon |
| Teal 50 | `#009d9a` | Teal G90 |
| Teal 60 | `#007d79` | **Teal primary** |
| Teal 70 | `#005d5d` | Teal hover |
| Teal 80 | `#004144` | Teal active |
| Teal 90 | `#022b30` | Teal dark |
| Teal 100 | `#081a1c` | Teal ultra dark |

##### Orange (Accent Alt)
| Shade | Hex | Kullanım |
|-------|-----|----------|
| Orange 10 | `#fff2e8` | Orange background |
| Orange 20 | `#ffd9be` | Orange light |
| Orange 30 | `#ffb784` | Orange border |
| Orange 40 | `#ff832b` | **Orange primary** |
| Orange 50 | `#eb6200` | Orange hover |
| Orange 60 | `#ba4e00` | Orange active |
| Orange 70 | `#8a3800` | Orange dark |
| Orange 80 | `#5e2900` | Orange darker |
| Orange 90 | `#3e1a00` | Orange deepest |
| Orange 100 | `#231000` | Orange ultra dark |

#### Theme Modes
| Theme | Background | Text | Border | Kullanım |
|-------|------------|------|--------|----------|
| **White** | `#ffffff` | Gray 100 | Gray 30 | Varsayılan, temiz |
| **G10** | Gray 10 | Gray 100 | Gray 30 | Subtle kontrast |
| **G90** | Gray 90 | Gray 10 | Gray 70 | Dark professional |
| **G100** | Gray 100 | Gray 10 | Gray 80 | Full dark mode |

#### Data Visualization Palettes

##### Categorical (14 Renk)
| # | Hex | Renk Adı |
|---|-----|----------|
| 1 | `#8a3ffc` | Purple 60 |
| 2 | `#1192e8` | Cyan 50 |
| 3 | `#005d5d` | Teal 70 |
| 4 | `#9f1853` | Magenta 70 |
| 5 | `#fa4d56` | Red 50 |
| 6 | `#570408` | Red 90 |
| 7 | `#198038` | Green 60 |
| 8 | `#002d9c` | Blue 80 |
| 9 | `#ee538b` | Magenta 50 |
| 10 | `#b28600` | Yellow 50 |
| 11 | `#009d9a` | Teal 50 |
| 12 | `#012749` | Cyan 90 |
| 13 | `#8a3800` | Orange 70 |
| 14 | `#a56eff` | Purple 50 |

##### Sequential Palettes
- **Blue Sequential:** Blue 10 → Blue 90
- **Purple Sequential:** Purple 10 → Purple 90
- **Teal Sequential:** Teal 10 → Teal 90
- **Green Sequential:** Green 10 → Green 90

##### Diverging Palettes
- **Red-Blue:** Red 60 ← Gray 30 → Blue 60
- **Purple-Teal:** Purple 60 ← Gray 30 → Teal 60

##### Alert Palettes
- **Red Alert:** Red 60 → Red 50 → Red 40
- **Yellow Alert:** Yellow 40 → Yellow 30 → Yellow 20
- **Green Alert:** Green 60 → Green 50 → Green 40

**Etki:** 🔥🔥🔥 (Çok Yüksek)
**Zorluk:** ⭐⭐ (Orta)

---

### Phase 3: 2x Grid & Spacing (⚡ Orta Öncelik)
**Durum:** Basic spacing mevcut, grid sistemi yok

✅ **Mevcut:**
- Fixed margins (2.5cm)
- Basic section spacing

🎯 **Eklenecek:**

#### Spacing Scale (8px Base)
| Token | px | rem | Kullanım |
|-------|-----|-----|----------|
| `spacing-01` | 2px | 0.125rem | İnce ayrım |
| `spacing-02` | 4px | 0.25rem | Çok küçük boşluk |
| `spacing-03` | 8px | 0.5rem | Küçük padding |
| `spacing-04` | 12px | 0.75rem | Kompakt margin |
| `spacing-05` | 16px | 1rem | **Standart boşluk** |
| `spacing-06` | 24px | 1.5rem | Orta boşluk |
| `spacing-07` | 32px | 2rem | Büyük padding |
| `spacing-08` | 40px | 2.5rem | Section gap |
| `spacing-09` | 48px | 3rem | Büyük section |
| `spacing-10` | 64px | 4rem | Major section |
| `spacing-11` | 80px | 5rem | Sayfa bölümü |
| `spacing-12` | 96px | 6rem | Hero spacing |
| `spacing-13` | 160px | 10rem | Mega section |

#### Layout Tokens
| Token | Değer | Kullanım |
|-------|-------|----------|
| `layout-01` | 16px | Container padding |
| `layout-02` | 24px | Gutter narrow |
| `layout-03` | 32px | Gutter wide |
| `layout-04` | 48px | Section margin |
| `layout-05` | 64px | Page margin |
| `layout-06` | 96px | Hero margin |
| `layout-07` | 160px | Mega margin |

#### Grid System (16-Column)
| Breakpoint | Genişlik | Columns | Margin | Gutter | Kullanım |
|------------|----------|---------|--------|--------|----------|
| `sm` | 320-671px | 4 | 16px | 16px | Mobile |
| `md` | 672-1055px | 8 | 16px | 16px | Tablet |
| `lg` | 1056-1311px | 16 | 16px | 16px | Desktop |
| `xlg` | 1312-1583px | 16 | 24px | 16px | Large |
| `max` | 1584px+ | 16 | 24px | 24px | Max width |

#### Grid Modes
| Mode | Gutter | Kullanım |
|------|--------|----------|
| **Wide** | 32px | Default, rahat okuma |
| **Narrow** | 16px | Dense layout |
| **Condensed** | 1px | Maksimum içerik |

#### Container Sizes
| Token | Değer | Kullanım |
|-------|-------|----------|
| `container-01` | 320px | Small widget |
| `container-02` | 640px | Form container |
| `container-03` | 768px | Content narrow |
| `container-04` | 1024px | Content standard |
| `container-05` | 1280px | Content wide |

**Etki:** 🔥🔥 (Yüksek)
**Zorluk:** ⭐⭐⭐ (Yüksek - PDF'de grid karmaşık)

---

### Phase 4: Data Visualization (⚡ Yüksek Öncelik)
**Durum:** Yok, sıfırdan geliştirilecek

🎯 **Eklenecek:**

#### Chart Types

##### Comparison Charts
| Tür | Kullanım | Complexity |
|-----|----------|------------|
| Bar chart | Kategori karşılaştırma | ⭐ |
| Grouped bar | Multi-series karşılaştırma | ⭐⭐ |
| Stacked bar | Part-to-whole | ⭐⭐ |
| Floating bar | Range gösterimi | ⭐⭐ |
| Lollipop | Minimal karşılaştırma | ⭐ |
| Bullet chart | KPI vs hedef | ⭐⭐ |

##### Trend Charts
| Tür | Kullanım | Complexity |
|-----|----------|------------|
| Line chart | Zaman serisi | ⭐ |
| Multi-line | Çoklu seri | ⭐⭐ |
| Area chart | Hacim trendi | ⭐⭐ |
| Stacked area | Kümülatif trend | ⭐⭐ |
| Sparkline | Inline trend | ⭐ |

##### Part-to-Whole Charts
| Tür | Kullanım | Complexity |
|-----|----------|------------|
| Pie chart | Basit oranlar | ⭐ |
| Donut chart | Merkezi metrikli oran | ⭐ |
| Treemap | Hiyerarşik oranlar | ⭐⭐⭐ |
| Sunburst | İç içe kategoriler | ⭐⭐⭐ |
| Meter chart | Tek değer oran | ⭐ |
| Gauge | Progress gösterimi | ⭐ |

##### Correlation Charts
| Tür | Kullanım | Complexity |
|-----|----------|------------|
| Scatter plot | İki değişken ilişki | ⭐⭐ |
| Bubble chart | Üç değişken | ⭐⭐⭐ |
| Heatmap | Matris korelasyon | ⭐⭐⭐ |

##### Distribution Charts
| Tür | Kullanım | Complexity |
|-----|----------|------------|
| Histogram | Frekans dağılımı | ⭐⭐ |
| Box plot | İstatistik özet | ⭐⭐ |

##### Geospatial Charts
| Tür | Kullanım | Complexity |
|-----|----------|------------|
| Choropleth | Bölgesel değerler | ⭐⭐⭐⭐ |
| Bubble map | Lokasyon büyüklük | ⭐⭐⭐⭐ |
| Connection map | Akış gösterimi | ⭐⭐⭐⭐ |

##### Other Charts
| Tür | Kullanım | Complexity |
|-----|----------|------------|
| Radar chart | Multi-axis karşılaştırma | ⭐⭐⭐ |
| Alluvial/Sankey | Akış diyagramı | ⭐⭐⭐⭐ |
| Word cloud | Metin frekansı | ⭐⭐ |

#### Chart Anatomy
| Element | Açıklama | Zorunlu |
|---------|----------|---------|
| Title | Chart başlığı | ✅ |
| Subtitle | Açıklama | ⬜ |
| Legend | Seri açıklamaları | ✅ (multi-series) |
| X-axis | Yatay eksen | ✅ |
| Y-axis | Dikey eksen | ✅ |
| Grid lines | Referans çizgileri | ⬜ |
| Data labels | Değer etiketleri | ⬜ |
| Tooltip | Hover bilgi (interactive) | N/A (PDF) |
| Annotations | Vurgular | ⬜ |
| Source | Veri kaynağı | ⬜ |

#### Chart Colors
```javascript
const chartColors = {
  categorical: [
    '#8a3ffc', '#1192e8', '#005d5d', '#9f1853',
    '#fa4d56', '#570408', '#198038', '#002d9c',
    '#ee538b', '#b28600', '#009d9a', '#012749',
    '#8a3800', '#a56eff'
  ],
  sequential: {
    blue: ['#edf5ff', '#d0e2ff', '#a6c8ff', '#78a9ff', '#4589ff', '#0f62fe', '#0043ce', '#002d9c', '#001d6c'],
    purple: ['#f6f2ff', '#e8daff', '#d4bbff', '#be95ff', '#a56eff', '#8a3ffc', '#6929c4', '#491d8b', '#31135e']
  },
  diverging: {
    redBlue: ['#da1e28', '#fa4d56', '#ff8389', '#ffd7d9', '#f4f4f4', '#d0e2ff', '#78a9ff', '#0f62fe', '#002d9c']
  }
};
```

**Etki:** 🔥🔥🔥 (Çok Yüksek - Raporlarda kritik)
**Zorluk:** ⭐⭐⭐⭐ (Çok Yüksek - Karmaşık)

---

### Phase 5: Icons & Pictograms (⚡ Orta Öncelik)
**Durum:** Yok

🎯 **Eklenecek:**

#### Icon Sizes
| Token | Size | Kullanım |
|-------|------|----------|
| `icon-size-16` | 16px | Inline icons |
| `icon-size-20` | 20px | Default size |
| `icon-size-24` | 24px | Navigation |
| `icon-size-32` | 32px | Headers |

#### Essential Icons (Öncelikli 50)
| Kategori | İkonlar |
|----------|---------|
| **Navigation** | arrow-left, arrow-right, arrow-up, arrow-down, chevron-left, chevron-right, chevron-up, chevron-down, menu, close |
| **Actions** | add, subtract, edit, delete, save, copy, download, upload, share, search |
| **Status** | checkmark, checkmark-filled, warning, warning-filled, error, error-filled, information, information-filled |
| **Objects** | document, folder, image, calendar, time, user, settings, filter, sort, view |
| **Communication** | email, notification, chat, phone, link |
| **Data** | chart-bar, chart-line, chart-pie, table, analytics |
| **Misc** | star, star-filled, bookmark, bookmark-filled, flag |

#### Pictogram Categories
| Kategori | Kullanım |
|----------|----------|
| **Business** | Finans, pazarlama, satış |
| **Technology** | IT, cloud, security |
| **Healthcare** | Tıbbi, sağlık |
| **Education** | Öğrenme, bilgi |
| **Environment** | Sürdürülebilirlik |

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

#### Content Components
| Component | Açıklama | Priority |
|-----------|----------|----------|
| **Accordion** | Expandable sections | ⬜ |
| **Breadcrumb** | Navigation path | ✅ |
| **Card** | Content container | ✅ |
| **Tile** | Interactive card | ✅ |
| **Tag** | Labels & categories | ✅ |
| **Callout** | Highlighted info | ✅ |
| **Notification** | Alerts & banners | ✅ |
| **Progress indicator** | Step indicator | ⬜ |
| **Tooltip** | N/A for PDF | ❌ |

#### Data Display
| Component | Açıklama | Priority |
|-----------|----------|----------|
| **Data table** | Advanced sorting/filtering | ✅ |
| **Definition list** | Term-definition pairs | ✅ |
| **Stat tile** | KPI display | ✅ |
| **Timeline** | Chronological events | ✅ |
| **Comparison table** | Feature matrices | ✅ |

#### Navigation (PDF)
| Component | Açıklama | Priority |
|-----------|----------|----------|
| **Table of contents** | Auto-generated | ✅ |
| **Page numbers** | Footer pagination | ✅ |
| **Internal links** | Cross-references | ✅ |
| **Index** | Alphabetical reference | ⬜ |

#### Typography Blocks
| Component | Açıklama | Priority |
|-----------|----------|----------|
| **Quote block** | Styled quotations | ✅ |
| **Code block** | Syntax highlighted | ✅ |
| **Math block** | LaTeX equations | ✅ |
| **Footnotes** | Page references | ✅ |
| **Bibliography** | Citation list | ⬜ |

**Etki:** 🔥🔥 (Yüksek)
**Zorluk:** ⭐⭐ (Orta)

---

### Phase 7: Motion & Advanced (⚡ Düşük Öncelik)
**Durum:** Yok, nice-to-have

🎯 **Eklenecek:**

#### Motion Tokens (Interactive PDF için referans)
| Token | Duration | Easing | Kullanım |
|-------|----------|--------|----------|
| `duration-fast-01` | 70ms | - | Micro-interactions |
| `duration-fast-02` | 110ms | - | Quick feedback |
| `duration-moderate-01` | 150ms | - | Standard |
| `duration-moderate-02` | 240ms | - | Standard expand |
| `duration-slow-01` | 400ms | - | Complex transitions |
| `duration-slow-02` | 700ms | - | Full page |

#### Easing Functions
| Token | Curve | Kullanım |
|-------|-------|----------|
| `ease-in` | cubic-bezier(0, 0, 0.38, 0.9) | Exit animations |
| `ease-out` | cubic-bezier(0.2, 0, 1, 0.9) | Enter animations |
| `standard` | cubic-bezier(0.2, 0, 0.38, 0.9) | Default |
| `expressive` | cubic-bezier(0.4, 0.14, 0.3, 1) | Emphasis |

#### Advanced Features
| Feature | Açıklama | Complexity |
|---------|----------|------------|
| Multi-column layout | 2-3 sütun | ⭐⭐ |
| Mathematical notation | LaTeX math | ⭐⭐⭐ |
| Chemical formulas | Molecular diagrams | ⭐⭐⭐⭐ |
| Musical notation | Sheet music | ⭐⭐⭐⭐⭐ |
| Endnotes | Document-end notes | ⭐⭐ |
| Glossary | Term definitions | ⭐⭐ |
| Cross-references | \ref, \pageref | ⭐⭐ |
| Hyperlinks | External URLs | ⭐ |

**Etki:** 🔥 (Orta)
**Zorluk:** ⭐⭐⭐⭐ (Çok Yüksek)

---

## 🛠️ Teknik Implementasyon

### Typst Implementasyonu

#### Design Tokens as Variables
```typst
// === COLORS ===
#let carbon-blue-10 = rgb("#edf5ff")
#let carbon-blue-20 = rgb("#d0e2ff")
#let carbon-blue-30 = rgb("#a6c8ff")
#let carbon-blue-40 = rgb("#78a9ff")
#let carbon-blue-50 = rgb("#4589ff")
#let carbon-blue-60 = rgb("#0f62fe")
#let carbon-blue-70 = rgb("#0043ce")
#let carbon-blue-80 = rgb("#002d9c")
#let carbon-blue-90 = rgb("#001d6c")
#let carbon-blue-100 = rgb("#001141")

// === SPACING ===
#let sp-01 = 2pt
#let sp-02 = 4pt
#let sp-03 = 8pt
#let sp-04 = 12pt
#let sp-05 = 16pt
#let sp-06 = 24pt
#let sp-07 = 32pt
#let sp-08 = 40pt

// === TYPOGRAPHY ===
#let font-sans = "IBM Plex Sans"
#let font-mono = "IBM Plex Mono"
#let font-serif = "IBM Plex Serif"
```

#### Type Scale Functions
```typst
// Productive Type Scale
#let body-01(content) = text(size: 14pt, weight: 400, content)
#let body-02(content) = text(size: 16pt, weight: 400, content)

#let heading-01(content) = text(size: 14pt, weight: 600, content)
#let heading-02(content) = text(size: 16pt, weight: 600, content)
#let heading-03(content) = text(size: 20pt, weight: 600, content)
#let heading-04(content) = text(size: 28pt, weight: 400, content)
#let heading-05(content) = text(size: 32pt, weight: 300, content)
#let heading-06(content) = text(size: 42pt, weight: 300, content)
#let heading-07(content) = text(size: 54pt, weight: 300, content)

// Expressive Type Scale
#let display-01(content) = text(size: 42pt, weight: 300, content)
#let display-02(content) = text(size: 42pt, weight: 600, content)
#let display-03(content) = text(size: 54pt, weight: 300, content)
#let display-04(content) = text(size: 84pt, weight: 300, content)

#let quotation-01(content) = text(size: 20pt, weight: 400, style: "italic", content)
#let quotation-02(content) = text(size: 32pt, weight: 300, style: "italic", content)
```

#### Component Templates
```typst
// Card Component
#let carbon-card(title: none, content, variant: "default") = {
  let bg = if variant == "elevated" { white } else { carbon-gray-10 }
  let border = if variant == "outlined" { carbon-gray-30 } else { none }
  
  block(
    fill: bg,
    stroke: border,
    inset: sp-05,
    radius: 4pt,
    width: 100%,
    [
      #if title != none [
        #text(weight: 600, size: 14pt, title)
        #v(sp-03)
      ]
      #content
    ]
  )
}

// Tag Component
#let carbon-tag(label, color: "gray") = {
  let colors = (
    "gray": (bg: carbon-gray-20, text: carbon-gray-100),
    "blue": (bg: carbon-blue-20, text: carbon-blue-80),
    "green": (bg: carbon-green-20, text: carbon-green-80),
    "red": (bg: carbon-red-20, text: carbon-red-80),
    "purple": (bg: carbon-purple-20, text: carbon-purple-80),
  )
  let c = colors.at(color)
  
  box(
    fill: c.bg,
    inset: (x: sp-03, y: sp-02),
    radius: 2pt,
    text(size: 12pt, fill: c.text, label)
  )
}

// Notification Banner
#let carbon-notification(content, type: "info") = {
  let configs = (
    "info": (bg: carbon-blue-10, border: carbon-blue-60, icon: "ℹ"),
    "success": (bg: carbon-green-10, border: carbon-green-60, icon: "✓"),
    "warning": (bg: carbon-yellow-10, border: carbon-yellow-30, icon: "⚠"),
    "error": (bg: carbon-red-10, border: carbon-red-60, icon: "✕"),
  )
  let c = configs.at(type)
  
  block(
    fill: c.bg,
    stroke: (left: 3pt + c.border),
    inset: sp-05,
    width: 100%,
    [#text(weight: 600, c.icon) #h(sp-03) #content]
  )
}

// Stat Tile
#let carbon-stat(value, label, trend: none) = {
  block(
    fill: carbon-gray-10,
    inset: sp-05,
    radius: 4pt,
    [
      #text(size: 32pt, weight: 300, value)
      #v(sp-02)
      #text(size: 14pt, fill: carbon-gray-70, label)
      #if trend != none [
        #h(sp-03)
        #text(size: 12pt, fill: if trend.starts-with("+") { carbon-green-60 } else { carbon-red-60 }, trend)
      ]
    ]
  )
}
```

#### Chart Templates
```typst
// Simple Bar Chart
#let carbon-bar-chart(
  data: (),
  width: 100%,
  height: 200pt,
  colors: (carbon-blue-60,),
  show-labels: true,
  show-values: true,
) = {
  let max-val = calc.max(..data.map(d => d.value))
  
  block(width: width, height: height, [
    #for (i, item) in data.enumerate() [
      #let bar-width = item.value / max-val * 100%
      #let color = colors.at(calc.mod(i, colors.len()))
      
      #grid(
        columns: (80pt, 1fr, 40pt),
        gutter: sp-03,
        [#if show-labels [#text(size: 12pt, item.label)]],
        [#block(fill: color, height: 20pt, width: bar-width)],
        [#if show-values [#text(size: 12pt, str(item.value))]]
      )
      #v(sp-02)
    ]
  ])
}

// Donut Chart
#let carbon-donut(
  data: (),
  size: 150pt,
  thickness: 30pt,
  colors: (),
  center-label: none,
) = {
  // SVG donut implementation
  // ...
}

// Sparkline
#let carbon-sparkline(
  data: (),
  width: 80pt,
  height: 20pt,
  color: carbon-blue-60,
) = {
  // SVG line path
  // ...
}
```

---

### Quarto Implementasyonu

#### LaTeX Preamble
```latex
% === CARBON COLORS ===
\usepackage{xcolor}

% Blue palette
\definecolor{carbonBlue10}{HTML}{edf5ff}
\definecolor{carbonBlue20}{HTML}{d0e2ff}
\definecolor{carbonBlue30}{HTML}{a6c8ff}
\definecolor{carbonBlue40}{HTML}{78a9ff}
\definecolor{carbonBlue50}{HTML}{4589ff}
\definecolor{carbonBlue60}{HTML}{0f62fe}
\definecolor{carbonBlue70}{HTML}{0043ce}
\definecolor{carbonBlue80}{HTML}{002d9c}
\definecolor{carbonBlue90}{HTML}{001d6c}
\definecolor{carbonBlue100}{HTML}{001141}

% Gray palette
\definecolor{carbonGray10}{HTML}{f4f4f4}
\definecolor{carbonGray20}{HTML}{e0e0e0}
\definecolor{carbonGray30}{HTML}{c6c6c6}
\definecolor{carbonGray40}{HTML}{a8a8a8}
\definecolor{carbonGray50}{HTML}{8d8d8d}
\definecolor{carbonGray60}{HTML}{6f6f6f}
\definecolor{carbonGray70}{HTML}{525252}
\definecolor{carbonGray80}{HTML}{393939}
\definecolor{carbonGray90}{HTML}{262626}
\definecolor{carbonGray100}{HTML}{161616}

% === TYPOGRAPHY ===
\usepackage{fontspec}
\setmainfont{IBM Plex Sans}[
  UprightFont = *-Regular,
  BoldFont = *-Bold,
  ItalicFont = *-Italic,
  BoldItalicFont = *-BoldItalic,
  FontFace = {lt}{n}{*-Light},
  FontFace = {sb}{n}{*-SemiBold},
]
\setmonofont{IBM Plex Mono}
\setsansfont{IBM Plex Sans}

% Type scale commands
\newcommand{\carbonheadingone}[1]{\fontsize{14}{20}\selectfont\bfseries #1}
\newcommand{\carbonheadingtwo}[1]{\fontsize{16}{24}\selectfont\bfseries #1}
\newcommand{\carbonheadingthree}[1]{\fontsize{20}{28}\selectfont\bfseries #1}
\newcommand{\carbonheadingfour}[1]{\fontsize{28}{36}\selectfont #1}
\newcommand{\carbonheadingfive}[1]{\fontsize{32}{40}\selectfont\fontseries{lt}\selectfont #1}
\newcommand{\carbonheadingsix}[1]{\fontsize{42}{50}\selectfont\fontseries{lt}\selectfont #1}
\newcommand{\carbonheadingseven}[1]{\fontsize{54}{64}\selectfont\fontseries{lt}\selectfont #1}

% === SPACING ===
\newlength{\carbonspone}\setlength{\carbonspone}{2pt}
\newlength{\carbonsptwo}\setlength{\carbonsptwo}{4pt}
\newlength{\carbonspthree}\setlength{\carbonspthree}{8pt}
\newlength{\carbonspfour}\setlength{\carbonspfour}{12pt}
\newlength{\carbonspfive}\setlength{\carbonspfive}{16pt}
\newlength{\carbonspsix}\setlength{\carbonspsix}{24pt}
\newlength{\carbonspseven}\setlength{\carbonspseven}{32pt}
\newlength{\carbonspeight}\setlength{\carbonspeight}{40pt}
```

#### Component Environments
```latex
% Card environment
\usepackage{tcolorbox}
\newtcolorbox{carboncard}[1][]{
  colback=carbonGray10,
  colframe=carbonGray10,
  boxrule=0pt,
  arc=4pt,
  left=\carbonspfive,
  right=\carbonspfive,
  top=\carbonspfive,
  bottom=\carbonspfive,
  #1
}

% Notification boxes
\newtcolorbox{carboninfo}{
  colback=carbonBlue10,
  colframe=carbonBlue10,
  boxrule=0pt,
  leftrule=3pt,
  arc=0pt,
  left=\carbonspfive,
  right=\carbonspfive,
  top=\carbonspfive,
  bottom=\carbonspfive,
  borderline west={3pt}{0pt}{carbonBlue60}
}

\newtcolorbox{carbonsuccess}{
  colback=carbonGreen10,
  borderline west={3pt}{0pt}{carbonGreen60},
  % ...similar
}

\newtcolorbox{carbonwarning}{
  colback=carbonYellow10,
  borderline west={3pt}{0pt}{carbonYellow30},
  % ...similar
}

\newtcolorbox{carbonerror}{
  colback=carbonRed10,
  borderline west={3pt}{0pt}{carbonRed60},
  % ...similar
}
```

#### R Chart Theme
```r
# Carbon ggplot2 theme
library(ggplot2)

carbon_colors <- c(
  blue60 = "#0f62fe",
  gray100 = "#161616",
  gray70 = "#525252",
  gray30 = "#c6c6c6",
  gray10 = "#f4f4f4"
)

carbon_categorical <- c(
  "#8a3ffc", "#1192e8", "#005d5d", "#9f1853",
  "#fa4d56", "#570408", "#198038", "#002d9c",
  "#ee538b", "#b28600", "#009d9a", "#012749",
  "#8a3800", "#a56eff"
)

theme_carbon <- function(base_size = 14) {
  theme_minimal(base_size = base_size, base_family = "IBM Plex Sans") +
    theme(
      # Text
      text = element_text(color = carbon_colors["gray100"]),
      plot.title = element_text(size = rel(1.5), face = "plain", hjust = 0),
      plot.subtitle = element_text(size = rel(1), color = carbon_colors["gray70"]),
      
      # Axes
      axis.title = element_text(size = rel(0.85), color = carbon_colors["gray70"]),
      axis.text = element_text(size = rel(0.8), color = carbon_colors["gray70"]),
      axis.line = element_line(color = carbon_colors["gray30"]),
      
      # Grid
      panel.grid.major = element_line(color = carbon_colors["gray10"], size = 0.5),
      panel.grid.minor = element_blank(),
      
      # Legend
      legend.position = "bottom",
      legend.title = element_text(size = rel(0.85)),
      legend.text = element_text(size = rel(0.8)),
      
      # Background
      plot.background = element_rect(fill = "white", color = NA),
      panel.background = element_rect(fill = "white", color = NA)
    )
}

scale_fill_carbon <- function(...) {
  scale_fill_manual(values = carbon_categorical, ...)
}

scale_color_carbon <- function(...) {
  scale_color_manual(values = carbon_categorical, ...)
}
```

#### Python Chart Theme
```python
# Carbon plotly theme
import plotly.graph_objects as go
import plotly.io as pio

carbon_colors = {
    'blue60': '#0f62fe',
    'gray100': '#161616',
    'gray70': '#525252',
    'gray30': '#c6c6c6',
    'gray10': '#f4f4f4',
    'white': '#ffffff'
}

carbon_categorical = [
    '#8a3ffc', '#1192e8', '#005d5d', '#9f1853',
    '#fa4d56', '#570408', '#198038', '#002d9c',
    '#ee538b', '#b28600', '#009d9a', '#012749',
    '#8a3800', '#a56eff'
]

carbon_template = go.layout.Template(
    layout=go.Layout(
        font=dict(family='IBM Plex Sans', color=carbon_colors['gray100']),
        title=dict(font=dict(size=24, color=carbon_colors['gray100'])),
        paper_bgcolor=carbon_colors['white'],
        plot_bgcolor=carbon_colors['white'],
        colorway=carbon_categorical,
        xaxis=dict(
            gridcolor=carbon_colors['gray10'],
            linecolor=carbon_colors['gray30'],
            tickfont=dict(color=carbon_colors['gray70'])
        ),
        yaxis=dict(
            gridcolor=carbon_colors['gray10'],
            linecolor=carbon_colors['gray30'],
            tickfont=dict(color=carbon_colors['gray70'])
        ),
        legend=dict(
            orientation='h',
            yanchor='bottom',
            y=-0.2
        )
    )
)

pio.templates['carbon'] = carbon_template
pio.templates.default = 'carbon'
```

---

## 📁 Proje Yapısı (Geliştirilmiş)

```
Chernobyl/
├── src/
│   ├── cli.js
│   ├── convert-typst.js
│   ├── convert-quarto.js
│   ├── index.js
│   └── utils/
│       ├── markdown-parser.js
│       ├── file-utils.js
│       ├── chart-generator.js       # YENİ - SVG chart generation
│       ├── icon-embedder.js         # YENİ - Icon SVG injection
│       └── theme-resolver.js        # YENİ - Theme switching logic
│
├── templates/
│   ├── typst/
│   │   ├── carbon-template.typ      # Mevcut
│   │   ├── carbon-advanced.typ      # Mevcut
│   │   ├── tokens/                  # YENİ
│   │   │   ├── colors.typ           # Full color palette
│   │   │   ├── typography.typ       # Type scale functions
│   │   │   ├── spacing.typ          # Spacing tokens
│   │   │   └── grid.typ             # Grid system
│   │   ├── components/              # YENİ
│   │   │   ├── cards.typ
│   │   │   ├── tables.typ
│   │   │   ├── tags.typ
│   │   │   ├── notifications.typ
│   │   │   ├── stats.typ
│   │   │   ├── timeline.typ
│   │   │   └── toc.typ
│   │   ├── charts/                  # YENİ
│   │   │   ├── bar-chart.typ
│   │   │   ├── line-chart.typ
│   │   │   ├── donut-chart.typ
│   │   │   ├── sparkline.typ
│   │   │   └── gauge.typ
│   │   └── themes/                  # YENİ
│   │       ├── white.typ
│   │       ├── g10.typ
│   │       ├── g90.typ
│   │       └── g100.typ
│   │
│   └── quarto/
│       ├── carbon-template.qmd      # Mevcut
│       ├── carbon-advanced.qmd      # Mevcut
│       ├── _extensions/             # YENİ
│       │   └── carbon/
│       │       ├── _extension.yml
│       │       ├── carbon-theme.tex
│       │       ├── carbon-colors.tex
│       │       ├── carbon-components.tex
│       │       ├── carbon-charts.R
│       │       ├── carbon-charts.py
│       │       └── carbon-filters.lua
│       └── themes/                  # YENİ
│           ├── white.scss
│           ├── g10.scss
│           ├── g90.scss
│           └── g100.scss
│
├── styles/
│   └── carbon/
│       ├── theme.js                 # Mevcut
│       ├── colors-extended.js       # YENİ - Full 10-shade palettes
│       ├── typography-scale.js      # YENİ - All type tokens
│       ├── spacing-tokens.js        # YENİ - Spacing scale
│       ├── grid-system.js           # YENİ - Grid configuration
│       ├── data-viz-colors.js       # YENİ - Chart color schemes
│       └── motion-tokens.js         # YENİ - Animation reference
│
├── assets/                          # YENİ
│   ├── icons/
│   │   ├── carbon-icons-16.svg
│   │   ├── carbon-icons-20.svg
│   │   ├── carbon-icons-24.svg
│   │   └── carbon-icons-32.svg
│   ├── pictograms/
│   │   ├── business/
│   │   ├── technology/
│   │   └── healthcare/
│   └── fonts/
│       ├── IBMPlexSans/
│       ├── IBMPlexMono/
│       └── IBMPlexSerif/
│
├── examples/
│   ├── sample.md                    # Mevcut
│   ├── reports/                     # YENİ
│   │   ├── executive-summary.md
│   │   ├── quarterly-report.md
│   │   └── annual-review.md
│   ├── documentation/               # YENİ
│   │   ├── api-reference.md
│   │   ├── user-guide.md
│   │   └── technical-spec.md
│   ├── charts/                      # YENİ
│   │   ├── bar-chart-example.md
│   │   ├── line-chart-example.md
│   │   ├── donut-chart-example.md
│   │   └── dashboard-example.md
│   └── themes/                      # YENİ
│       ├── white-theme-demo.md
│       ├── g10-theme-demo.md
│       ├── g90-theme-demo.md
│       └── g100-theme-demo.md
│
├── docs/
│   ├── CARBON_ELEMENTS.md           # ✅ Mevcut
│   ├── IMPLEMENTATION_PLAN.md       # ✅ Bu dosya
│   ├── guides/                      # YENİ
│   │   ├── TYPOGRAPHY_GUIDE.md
│   │   ├── COLOR_GUIDE.md
│   │   ├── GRID_GUIDE.md
│   │   ├── CHART_GUIDE.md
│   │   ├── COMPONENT_GUIDE.md
│   │   └── THEME_GUIDE.md
│   └── api/                         # YENİ
│       ├── TYPST_API.md
│       └── QUARTO_API.md
│
├── tests/                           # YENİ
│   ├── visual/
│   │   ├── typography-test.md
│   │   ├── color-test.md
│   │   ├── spacing-test.md
│   │   └── component-test.md
│   └── integration/
│       ├── typst-render.test.js
│       └── quarto-render.test.js
│
└── output/
    ├── temp/
    └── samples/
```

---

## 🎨 Örnek Kullanım Senaryoları

### 1. Executive Dashboard Report
```yaml
---
title: "Q4 2025 Executive Summary"
subtitle: "Revenue & Growth Analysis"
author: "Finance Team"
date: "2025-12-31"
theme: white
typography: expressive
layout: two-column
---

# Key Metrics

::: {.stat-grid columns=4}
:::: {.stat-tile}
**$2.4M**
Revenue
+12% ↑
::::
:::: {.stat-tile}
**847**
New Customers
+23% ↑
::::
:::: {.stat-tile}
**94.2%**
Customer Satisfaction
+2.1% ↑
::::
:::: {.stat-tile}
**$1.2M**
Pipeline
-5% ↓
::::
:::

## Revenue Trend

```{chart}
type: area
data: revenue-monthly.csv
colors: sequential-blue
show-legend: true
```

## Market Share

```{chart}
type: donut
data: market-share.csv
colors: categorical
center-label: "32%\nMarket Share"
```
```

### 2. Technical API Documentation
```yaml
---
title: "API Documentation v2.0"
subtitle: "REST API Reference"
author: "Engineering Team"
date: "2025-01-02"
theme: g10
typography: productive
toc: true
toc-depth: 3
code-syntax: true
---

# Authentication

::: {.notification type="info"}
All API requests require authentication via Bearer token.
:::

## Endpoints

::: {.card title="GET /api/users"}

**Description:** Retrieve list of users

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `page` | integer | No | Page number |
| `limit` | integer | No | Items per page |

**Response:**
```json
{
  "data": [...],
  "meta": {
    "total": 100,
    "page": 1
  }
}
```
:::
```

### 3. Research Paper
```yaml
---
title: "Machine Learning in Healthcare"
subtitle: "A Systematic Review"
author: 
  - name: "Dr. Jane Smith"
    affiliation: "Stanford University"
  - name: "Dr. John Doe"
    affiliation: "MIT"
date: "2025-01-02"
theme: white
typography: productive
bibliography: references.bib
toc: true
abstract: |
  This paper reviews the application of machine learning
  algorithms in healthcare diagnostics...
---

# Introduction

Recent advances in machine learning [@smith2024] have shown
promising results in medical imaging analysis.

## Methodology

We analyzed $n = 1,247$ studies published between 2020-2025.

$$
\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}
$$

```{chart}
type: scatter
data: ml-accuracy.csv
x: sample_size
y: accuracy
color: algorithm
regression: true
```

## Results

::: {.comparison-table}
| Algorithm | Accuracy | Sensitivity | Specificity |
|-----------|----------|-------------|-------------|
| CNN | 94.2% | 92.1% | 96.3% |
| Random Forest | 89.7% | 87.4% | 92.0% |
| SVM | 85.3% | 83.2% | 87.4% |
:::
```

### 4. Marketing Brand Report
```yaml
---
title: "Brand Performance 2025"
subtitle: "Annual Marketing Report"
author: "Marketing Team"
date: "2025-12-31"
theme: white
typography: expressive
hero-image: brand-hero.jpg
---

::: {.hero-section}
# Building Tomorrow's Brand Today

Our brand reached **50M+ impressions** across all channels
in 2025, a 45% increase from the previous year.
:::

## Campaign Performance

::: {.timeline}
:::: {.event date="Q1 2025"}
**Product Launch Campaign**
Reached 12M impressions with 3.2% engagement rate
::::
:::: {.event date="Q2 2025"}
**Summer Promotion**
Generated $2.1M in attributed revenue
::::
:::: {.event date="Q3 2025"}
**Brand Refresh**
Increased brand awareness by 28%
::::
:::: {.event date="Q4
