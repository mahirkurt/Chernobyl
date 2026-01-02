# Carbonac Web Design Guide

> IBM Carbon Design System - Web Uygulamaları için Kapsamlı Tasarım Kılavuzu

**Versiyon:** 1.0.0  
**Son Güncelleme:** Ocak 2026  
**Hedef Kitle:** Frontend Geliştiriciler, UI/UX Tasarımcılar

---

## 📚 İçindekiler

1. [Giriş](#1-giriş)
2. [Motion & Animasyon](#2-motion--animasyon)
3. [Easing Curves & Duration Tokens](#3-easing-curves--duration-tokens)
4. [Choreography & Micro-interactions](#4-choreography--micro-interactions)
5. [Interactive States](#5-interactive-states)
6. [Responsive Design & Breakpoints](#6-responsive-design--breakpoints)
7. [React Components & Patterns](#7-react-components--patterns)
8. [Web Accessibility](#8-web-accessibility)
9. [Theming & Dark Mode](#9-theming--dark-mode)
10. [Performans Optimizasyonu](#10-performans-optimizasyonu)
11. [Kaynaklar](#11-kaynaklar)

---

## 1. Giriş

### 1.1 Bu Kılavuzun Amacı

Bu doküman, Carbonac web uygulaması için IBM Carbon Design System'in **web-spesifik** özelliklerini kapsamlı şekilde tanımlar. Mevcut `CARBON_ELEMENTS.md` dosyası PDF çıktıları için statik tasarım kurallarını içerirken, bu kılavuz **dinamik, interaktif ve animasyonlu** web deneyimi için gerekli tüm standartları belirler.

### 1.2 PDF vs Web: Temel Farklılıklar

| Özellik | PDF (Statik) | Web (Dinamik) |
|---------|--------------|---------------|
| **Layout** | Sabit sayfa boyutu | Responsive, fluid |
| **Tipografi** | Gömülü fontlar | Web font loading |
| **Renk** | CMYK/RGB sabit | CSS custom properties |
| **Etkileşim** | Yok | Hover, click, focus, drag |
| **Animasyon** | Yok | Transitions, transforms |
| **Durum Yönetimi** | Tek durum | Çoklu state (loading, error, success) |
| **Erişilebilirlik** | Screen reader | Keyboard, focus management, ARIA |
| **Tema** | Tek tema | Dinamik tema değiştirme |

### 1.3 Carbon Design System Felsefesi

IBM Carbon, **işlevsellik öncelikli** bir tasarım sistemidir:

```
"Design is not just what it looks like, design is how it works."
```

**Temel İlkeler:**

1. **Purposeful (Amaçlı):** Her animasyon bir amaca hizmet eder
2. **Responsive (Duyarlı):** Kullanıcı aksiyonlarına anında tepki
3. **Natural (Doğal):** Fizik kurallarına uygun hareket
4. **Accessible (Erişilebilir):** Herkes için kullanılabilir

### 1.4 Carbonac Web Mimarisi

```
┌─────────────────────────────────────────────────────────────────┐
│                        Carbonac Web App                          │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │
│  │   Header    │  │   Theme     │  │     Motion System       │  │
│  │  (Shell)    │  │   Provider  │  │   (Easing + Duration)   │  │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                    2x Grid System                           ││
│  │  ┌──────┐  ┌──────────────────────────┐  ┌──────────────┐  ││
│  │  │ Side │  │       Main Content       │  │   AI Chat    │  ││
│  │  │ Nav  │  │   (Editor + Preview)     │  │    Panel     │  ││
│  │  │      │  │                          │  │              │  ││
│  │  └──────┘  └──────────────────────────┘  └──────────────┘  ││
│  └─────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────────┐│
│  │              Interactive State Layer                        ││
│  │      (Hover / Focus / Active / Disabled / Selected)         ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Motion & Animasyon

Motion (hareket), web deneyiminin en kritik unsurlarından biridir. IBM Carbon, iki farklı motion stili tanımlar: **Productive** ve **Expressive**.

### 2.1 Motion Neden Önemli?

Doğru uygulanmış motion:

- ✅ **Yönlendirme sağlar:** Kullanıcının dikkatini önemli değişikliklere çeker
- ✅ **Bağlam oluşturur:** Nesneler arasındaki ilişkiyi gösterir
- ✅ **Geri bildirim verir:** Aksiyonların sonucunu bildirir
- ✅ **Süreklilik hissi yaratır:** Geçişleri yumuşatır
- ✅ **Marka kimliği oluşturur:** IBM'in premium hissini yansıtır

Yanlış uygulanmış motion:

- ❌ Kullanıcıyı oyalar ve rahatsız eder
- ❌ Performansı olumsuz etkiler
- ❌ Erişilebilirlik sorunları yaratır
- ❌ Profesyonel görünümü zedeler

### 2.2 Productive Motion

**Productive motion**, görev odaklı etkileşimler için kullanılır. Hızlı, verimli ve dikkat dağıtmayan hareketlerdir.

**Özellikleri:**
- Kısa süreli (70ms - 240ms)
- Minimal görsel etki
- Kullanıcının iş akışını kesintiye uğratmaz
- UI elementlerinin state değişimleri

**Kullanım Alanları:**
```
┌─────────────────────────────────────────────────────────────────┐
│ PRODUCTIVE MOTION KULLANIM ALANLARI                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  • Button hover/press states                                    │
│  • Toggle switches                                              │
│  • Checkbox/Radio animations                                    │
│  • Dropdown açılma/kapanma                                      │
│  • Tooltip görünme                                              │
│  • Input focus transitions                                      │
│  • Icon state changes                                           │
│  • Small component reveals                                      │
│  • Table row hover                                              │
│  • Menu item highlights                                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**CSS Örneği - Productive Button:**
```scss
// Productive motion for button states
.cds--btn {
  // Easing: productive-standard
  transition: 
    background-color 110ms cubic-bezier(0.2, 0, 0.38, 0.9),
    border-color 110ms cubic-bezier(0.2, 0, 0.38, 0.9),
    box-shadow 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
  
  &:hover {
    background-color: var(--cds-button-primary-hover);
  }
  
  &:active {
    background-color: var(--cds-button-primary-active);
    // Productive-standard easing, faster duration
    transition-duration: 70ms;
  }
}
```

### 2.3 Expressive Motion

**Expressive motion**, önemli anlar ve kullanıcı deneyiminin duygusal boyutu için kullanılır. Daha dramatik, dikkat çekici hareketlerdir.

**Özellikleri:**
- Uzun süreli (240ms - 700ms)
- Belirgin görsel etki
- Kullanıcının dikkatini çeker
- Önemli UI değişiklikleri

**Kullanım Alanları:**
```
┌─────────────────────────────────────────────────────────────────┐
│ EXPRESSIVE MOTION KULLANIM ALANLARI                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  • Modal açılma/kapanma                                         │
│  • Sayfa geçişleri                                              │
│  • Sidebar expand/collapse                                      │
│  • Notification görünme                                         │
│  • Onboarding animasyonları                                     │
│  • Empty state illustrations                                    │
│  • Loading skeletons                                            │
│  • Success/Error celebrations                                   │
│  • Card flip/expand                                             │
│  • Panel slide-in/out                                           │
│  • First-time user experiences                                  │
│  • Hero section animations                                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**CSS Örneği - Expressive Modal:**
```scss
// Expressive motion for modal
.cds--modal {
  opacity: 0;
  transform: scale(0.95) translateY(16px);
  // Easing: expressive-entrance
  transition: 
    opacity 240ms cubic-bezier(0, 0, 0.3, 1),
    transform 240ms cubic-bezier(0, 0, 0.3, 1);
  
  &.is-visible {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

// Overlay backdrop
.cds--modal-overlay {
  opacity: 0;
  background-color: rgba(22, 22, 22, 0.5);
  // Slower duration for background dimming
  transition: opacity 400ms cubic-bezier(0, 0, 0.3, 1);
  
  &.is-visible {
    opacity: 1;
  }
}
```

### 2.4 Motion Stil Seçimi Karar Ağacı

```
                    ┌─────────────────────────┐
                    │   Animasyon gerekli mi? │
                    └───────────┬─────────────┘
                                │
                    ┌───────────▼───────────┐
                    │  Kullanıcı aksiyonu   │
                    │   tetikledi mi?       │
                    └───────────┬───────────┘
                         │             │
                        Yes           No
                         │             │
              ┌──────────▼──────────┐  │
              │ Aksiyon sonucu      │  │
              │ önemli mi?          │  │
              └──────────┬──────────┘  │
                   │          │        │
                  Yes        No        │
                   │          │        │
         ┌─────────▼───┐  ┌───▼────────▼───────┐
         │ EXPRESSIVE  │  │    PRODUCTIVE      │
         │             │  │                    │
         │ • Modal     │  │ • Hover states     │
         │ • Success   │  │ • Focus rings      │
         │ • Panel     │  │ • Dropdowns        │
         │ • Page      │  │ • Toggles          │
         └─────────────┘  └────────────────────┘
```

### 2.5 Motion Tokenleri Özet Tablosu

| Kategori | Token Prefix | Süre Aralığı | Easing Stili |
|----------|--------------|--------------|--------------|
| Productive | `$duration-fast-*` | 70ms - 150ms | productive-standard |
| Productive | `$duration-moderate-*` | 150ms - 240ms | productive-standard |
| Expressive | `$duration-slow-*` | 400ms - 700ms | expressive-standard |

### 2.6 Reduced Motion Desteği

**Önemli:** Bazı kullanıcılar hareket hassasiyetine sahiptir. `prefers-reduced-motion` media query'si ile bu kullanıcılara alternatif deneyim sunulmalıdır.

```scss
// Tüm animasyonlar için reduced motion desteği
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

// Veya seçici olarak
.animated-element {
  transition: transform 240ms cubic-bezier(0, 0, 0.3, 1);
  
  @media (prefers-reduced-motion: reduce) {
    transition: opacity 150ms ease;
    transform: none;
  }
}
```

**JavaScript ile Kontrol:**
```javascript
// Motion preference kontrolü
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// Koşullu animasyon
function animateElement(element) {
  if (prefersReducedMotion) {
    // Basit fade
    element.style.opacity = 1;
  } else {
    // Tam animasyon
    element.animate([
      { opacity: 0, transform: 'translateY(16px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], {
      duration: 240,
      easing: 'cubic-bezier(0, 0, 0.3, 1)'
    });
  }
}
```

---

*Devam edecek: Bölüm 3 - Easing Curves & Duration Tokens*

---

## 3. Easing Curves & Duration Tokens

Easing curves, animasyonların hızlanma ve yavaşlama davranışını tanımlar. IBM Carbon, matematiksel olarak hesaplanmış **6 temel easing curve** ve **6 duration token** kullanır.

### 3.1 Easing Nedir?

Easing, bir animasyonun başlangıç ve bitiş noktaları arasındaki **hız değişimini** kontrol eder:

```
Linear (Easing yok):
────────────────────────────────────────►
Sabit hız, robotik his

Eased (Doğal):
─────────╲                    ╱─────────►
         ╲                  ╱
          ╲                ╱
           ╲──────────────╱
Hızlanma ve yavaşlama, doğal his
```

### 3.2 Cubic Bezier Temelleri

CSS'te easing, `cubic-bezier(x1, y1, x2, y2)` fonksiyonu ile tanımlanır:

```
     1 ┤                              ●
       │                           ╱
       │                        ╱
       │                     ╱      Control Point 2
       │                  ╱         (x2, y2)
       │               ╱
   y   │            ●
       │         ╱     Control Point 1
       │      ╱        (x1, y1)
       │   ╱
     0 ┼──●─────────────────────────────►
       0                              1  x
       
       Başlangıç (0,0)      Bitiş (1,1)
```

### 3.3 Carbon Easing Curves - Productive

**Productive easing curves** günlük UI etkileşimleri için kullanılır.

#### 3.3.1 Productive Standard
```scss
// Görünür durumdan görünür duruma geçiş
// Kullanım: Hover, color change, size change
$productive-standard: cubic-bezier(0.2, 0, 0.38, 0.9);
```

```
Productive Standard Curve:
     1 ┤                        ●━━━━━━
       │                    ╱╱╱
       │                 ╱╱
       │              ╱╱
       │           ╱╱
       │        ╱╱
       │     ╱╱
       │  ╱╱
     0 ┼━●───────────────────────────────
       0            0.5              1

Karakteristik: Yumuşak başlangıç, hafif yavaşlama
```

**CSS Custom Property:**
```scss
:root {
  --cds-ease-productive-standard: cubic-bezier(0.2, 0, 0.38, 0.9);
}

// Kullanım
.button {
  transition: background-color 110ms var(--cds-ease-productive-standard);
}
```

#### 3.3.2 Productive Entrance
```scss
// Görünmez durumdan görünür duruma geçiş
// Kullanım: Fade in, slide in, tooltip appear
$productive-entrance: cubic-bezier(0, 0, 0.38, 0.9);
```

```
Productive Entrance Curve:
     1 ┤                        ●━━━━━━
       │                    ╱╱╱
       │                 ╱╱
       │              ╱╱
       │           ╱╱
       │        ╱╱
       │     ╱╱
       │  ╱╱
     0 ┼●────────────────────────────────
       0            0.5              1

Karakteristik: Anında başlangıç, yumuşak bitiş
```

**CSS Custom Property:**
```scss
:root {
  --cds-ease-productive-entrance: cubic-bezier(0, 0, 0.38, 0.9);
}

// Kullanım - Dropdown açılma
.dropdown-menu {
  opacity: 0;
  transform: translateY(-8px);
  transition: 
    opacity 150ms var(--cds-ease-productive-entrance),
    transform 150ms var(--cds-ease-productive-entrance);
  
  &.is-open {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### 3.3.3 Productive Exit
```scss
// Görünür durumdan görünmez duruma geçiş
// Kullanım: Fade out, slide out, tooltip hide
$productive-exit: cubic-bezier(0.2, 0, 1, 0.9);
```

```
Productive Exit Curve:
     1 ┤                            ━━━●
       │                        ╱╱╱╱
       │                   ╱╱╱╱
       │              ╱╱╱╱
       │         ╱╱╱╱
       │     ╱╱╱╱
       │  ╱╱╱
       │╱╱
     0 ┼●────────────────────────────────
       0            0.5              1

Karakteristik: Hızlı başlangıç, aniden bitiş
```

**CSS Custom Property:**
```scss
:root {
  --cds-ease-productive-exit: cubic-bezier(0.2, 0, 1, 0.9);
}

// Kullanım - Tooltip kapanma
.tooltip {
  &.is-hiding {
    opacity: 0;
    transition: opacity 110ms var(--cds-ease-productive-exit);
  }
}
```

### 3.4 Carbon Easing Curves - Expressive

**Expressive easing curves** önemli anlar ve dramatik geçişler için kullanılır.

#### 3.4.1 Expressive Standard
```scss
// Görünür durumdan görünür duruma (dramatik)
// Kullanım: Modal position change, panel resize
$expressive-standard: cubic-bezier(0.4, 0.14, 0.3, 1);
```

```
Expressive Standard Curve:
     1 ┤                      ●━━━━━━━━━
       │                  ╱╱╱
       │               ╱╱
       │            ╱╱
       │          ╱
       │        ╱
       │      ╱
       │   ╱╱
     0 ┼━━●──────────────────────────────
       0            0.5              1

Karakteristik: Belirgin gecikme, güçlü yavaşlama
```

**CSS Custom Property:**
```scss
:root {
  --cds-ease-expressive-standard: cubic-bezier(0.4, 0.14, 0.3, 1);
}

// Kullanım - Sidebar genişleme
.sidebar {
  width: 48px;
  transition: width 400ms var(--cds-ease-expressive-standard);
  
  &.is-expanded {
    width: 256px;
  }
}
```

#### 3.4.2 Expressive Entrance
```scss
// Görünmez durumdan görünür duruma (dramatik)
// Kullanım: Modal appear, notification slide-in
$expressive-entrance: cubic-bezier(0, 0, 0.3, 1);
```

```
Expressive Entrance Curve:
     1 ┤                    ●━━━━━━━━━━━
       │                 ╱╱╱
       │              ╱╱
       │           ╱╱
       │        ╱╱
       │      ╱
       │    ╱
       │  ╱
     0 ┼●────────────────────────────────
       0            0.5              1

Karakteristik: Anında başlangıç, çok yumuşak bitiş
```

**CSS Custom Property:**
```scss
:root {
  --cds-ease-expressive-entrance: cubic-bezier(0, 0, 0.3, 1);
}

// Kullanım - Modal açılma
.modal {
  opacity: 0;
  transform: scale(0.95) translateY(16px);
  transition: 
    opacity 240ms var(--cds-ease-expressive-entrance),
    transform 240ms var(--cds-ease-expressive-entrance);
  
  &.is-visible {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
```

#### 3.4.3 Expressive Exit
```scss
// Görünür durumdan görünmez duruma (dramatik)
// Kullanım: Modal close, panel collapse
$expressive-exit: cubic-bezier(0.4, 0.14, 1, 1);
```

```
Expressive Exit Curve:
     1 ┤                              ━●
       │                          ╱╱╱╱
       │                     ╱╱╱╱
       │                ╱╱╱╱
       │           ╱╱╱╱
       │       ╱╱╱
       │    ╱╱╱
       │ ╱╱
     0 ┼━●───────────────────────────────
       0            0.5              1

Karakteristik: Gecikme ile başlangıç, hızlı bitiş
```

**CSS Custom Property:**
```scss
:root {
  --cds-ease-expressive-exit: cubic-bezier(0.4, 0.14, 1, 1);
}

// Kullanım - Notification kapanma
.notification {
  &.is-closing {
    opacity: 0;
    transform: translateX(100%);
    transition: 
      opacity 200ms var(--cds-ease-expressive-exit),
      transform 200ms var(--cds-ease-expressive-exit);
  }
}
```

### 3.5 Easing Curves Referans Tablosu

| Easing Adı | Cubic Bezier | Kullanım | Stil |
|------------|--------------|----------|------|
| **productive-standard** | `(0.2, 0, 0.38, 0.9)` | Hover, color change | Productive |
| **productive-entrance** | `(0, 0, 0.38, 0.9)` | Fade in, appear | Productive |
| **productive-exit** | `(0.2, 0, 1, 0.9)` | Fade out, hide | Productive |
| **expressive-standard** | `(0.4, 0.14, 0.3, 1)` | Resize, reposition | Expressive |
| **expressive-entrance** | `(0, 0, 0.3, 1)` | Modal open, slide in | Expressive |
| **expressive-exit** | `(0.4, 0.14, 1, 1)` | Modal close, collapse | Expressive |

### 3.6 Duration Tokens

Duration (süre), animasyonun ne kadar süreceğini belirler. IBM Carbon, **6 temel duration token** tanımlar.

#### 3.6.1 Duration Token Tablosu

| Token | Süre | Kullanım Alanları |
|-------|------|-------------------|
| `$duration-fast-01` | **70ms** | Button press, icon click, micro-interactions |
| `$duration-fast-02` | **110ms** | Button hover, fade effects, toggle |
| `$duration-moderate-01` | **150ms** | Dropdown open, tooltip appear, small reveals |
| `$duration-moderate-02` | **240ms** | Toast appear, accordion expand, tab switch |
| `$duration-slow-01` | **400ms** | Modal open, sidebar expand, large reveals |
| `$duration-slow-02` | **700ms** | Background dimming, page transitions |

#### 3.6.2 CSS Custom Properties

```scss
:root {
  // Duration tokens
  --cds-duration-fast-01: 70ms;
  --cds-duration-fast-02: 110ms;
  --cds-duration-moderate-01: 150ms;
  --cds-duration-moderate-02: 240ms;
  --cds-duration-slow-01: 400ms;
  --cds-duration-slow-02: 700ms;
  
  // Easing tokens
  --cds-ease-productive-standard: cubic-bezier(0.2, 0, 0.38, 0.9);
  --cds-ease-productive-entrance: cubic-bezier(0, 0, 0.38, 0.9);
  --cds-ease-productive-exit: cubic-bezier(0.2, 0, 1, 0.9);
  --cds-ease-expressive-standard: cubic-bezier(0.4, 0.14, 0.3, 1);
  --cds-ease-expressive-entrance: cubic-bezier(0, 0, 0.3, 1);
  --cds-ease-expressive-exit: cubic-bezier(0.4, 0.14, 1, 1);
}
```

#### 3.6.3 Duration Seçimi Rehberi

```
┌─────────────────────────────────────────────────────────────────┐
│                    DURATION SEÇİM REHBERİ                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  FAST (70-110ms)          MODERATE (150-240ms)                  │
│  ─────────────────        ─────────────────────                 │
│  • Micro-interactions     • Dropdown menus                      │
│  • Button states          • Accordion panels                    │
│  • Toggles                • Tab switching                       │
│  • Checkboxes             • Toast notifications                 │
│  • Icon animations        • Tooltip with content                │
│  • Focus rings            • Small component reveals             │
│                                                                 │
│  SLOW (400-700ms)                                               │
│  ────────────────                                               │
│  • Modal dialogs                                                │
│  • Sidebar navigation                                           │
│  • Page transitions                                             │
│  • Background overlays                                          │
│  • Onboarding flows                                             │
│  • Large panel animations                                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 3.7 Dinamik Duration Hesaplama

Animasyon süresi, hareket mesafesine göre dinamik olarak hesaplanabilir:

```javascript
/**
 * IBM Motion Generator Formülü
 * Mesafeye göre optimal duration hesaplar
 * 
 * @param {number} distance - Piksel cinsinden hareket mesafesi
 * @param {string} style - 'productive' veya 'expressive'
 * @returns {number} - Milisaniye cinsinden duration
 */
function calculateDuration(distance, style = 'productive') {
  // Temel değerler
  const baseSpeed = style === 'productive' ? 1.5 : 2.5; // px/ms
  const minDuration = style === 'productive' ? 70 : 150;
  const maxDuration = style === 'productive' ? 300 : 700;
  
  // Hesaplama
  let duration = distance / baseSpeed;
  
  // Sınırlar içinde tut
  duration = Math.max(minDuration, Math.min(maxDuration, duration));
  
  // En yakın token'a yuvarla
  return snapToToken(duration, style);
}

function snapToToken(duration, style) {
  const tokens = {
    productive: [70, 110, 150, 240],
    expressive: [150, 240, 400, 700]
  };
  
  const values = tokens[style];
  return values.reduce((prev, curr) => 
    Math.abs(curr - duration) < Math.abs(prev - duration) ? curr : prev
  );
}

// Kullanım örnekleri
calculateDuration(100, 'productive');  // 110ms
calculateDuration(300, 'productive');  // 240ms
calculateDuration(500, 'expressive');  // 400ms
```

### 3.8 Pratik Örnekler

#### Örnek 1: Complete Button Component

```scss
// Button with all states and motion
.carbonac-button {
  // Base styles
  padding: 14px 16px;
  background-color: var(--cds-button-primary);
  color: var(--cds-text-on-color);
  border: none;
  cursor: pointer;
  
  // Motion: Productive for quick interactions
  transition: 
    background-color var(--cds-duration-fast-02) var(--cds-ease-productive-standard),
    box-shadow var(--cds-duration-fast-02) var(--cds-ease-productive-standard),
    transform var(--cds-duration-fast-01) var(--cds-ease-productive-standard);
  
  // Hover state
  &:hover {
    background-color: var(--cds-button-primary-hover);
  }
  
  // Active/Press state - faster response
  &:active {
    background-color: var(--cds-button-primary-active);
    transform: scale(0.98);
    transition-duration: var(--cds-duration-fast-01);
  }
  
  // Focus state
  &:focus {
    outline: 2px solid var(--cds-focus);
    outline-offset: 2px;
  }
  
  // Disabled state - no transition needed
  &:disabled {
    background-color: var(--cds-button-disabled);
    color: var(--cds-text-disabled);
    cursor: not-allowed;
    transform: none;
  }
}
```

#### Örnek 2: Animated Modal

```scss
// Modal with expressive entrance/exit
.carbonac-modal {
  // Hidden state
  opacity: 0;
  visibility: hidden;
  transform: scale(0.95) translateY(24px);
  
  // Exit transition (when closing)
  transition: 
    opacity var(--cds-duration-moderate-01) var(--cds-ease-expressive-exit),
    transform var(--cds-duration-moderate-01) var(--cds-ease-expressive-exit),
    visibility 0ms linear var(--cds-duration-moderate-01);
  
  // Visible state
  &.is-open {
    opacity: 1;
    visibility: visible;
    transform: scale(1) translateY(0);
    
    // Entrance transition (when opening)
    transition: 
      opacity var(--cds-duration-moderate-02) var(--cds-ease-expressive-entrance),
      transform var(--cds-duration-moderate-02) var(--cds-ease-expressive-entrance),
      visibility 0ms linear 0ms;
  }
}

// Modal overlay
.carbonac-modal-overlay {
  opacity: 0;
  background-color: rgba(22, 22, 22, 0);
  transition: 
    opacity var(--cds-duration-slow-01) var(--cds-ease-expressive-entrance),
    background-color var(--cds-duration-slow-01) var(--cds-ease-expressive-entrance);
  
  &.is-visible {
    opacity: 1;
    background-color: rgba(22, 22, 22, 0.5);
  }
}
```

#### Örnek 3: Accordion with Staggered Animation

```scss
// Accordion panel
.carbonac-accordion-panel {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  
  // Collapse transition
  transition: 
    max-height var(--cds-duration-moderate-02) var(--cds-ease-productive-exit),
    opacity var(--cds-duration-moderate-01) var(--cds-ease-productive-exit);
  
  &.is-expanded {
    max-height: 1000px; // Yeterince büyük değer
    opacity: 1;
    
    // Expand transition
    transition: 
      max-height var(--cds-duration-moderate-02) var(--cds-ease-productive-entrance),
      opacity var(--cds-duration-moderate-01) var(--cds-ease-productive-entrance) 50ms;
  }
}

// Accordion icon rotation
.carbonac-accordion-icon {
  transform: rotate(0deg);
  transition: transform var(--cds-duration-moderate-01) var(--cds-ease-productive-standard);
  
  .is-expanded & {
    transform: rotate(180deg);
  }
}
```

### 3.9 SCSS Mixin'leri

Tekrarlayan motion kodlarını basitleştirmek için mixin'ler:

```scss
// Motion Mixins
@mixin motion-productive($properties, $duration: 'fast-02') {
  $dur: var(--cds-duration-#{$duration});
  $ease: var(--cds-ease-productive-standard);
  
  transition-property: #{$properties};
  transition-duration: $dur;
  transition-timing-function: $ease;
}

@mixin motion-expressive($properties, $duration: 'moderate-02') {
  $dur: var(--cds-duration-#{$duration});
  $ease: var(--cds-ease-expressive-standard);
  
  transition-property: #{$properties};
  transition-duration: $dur;
  transition-timing-function: $ease;
}

@mixin motion-entrance($properties, $duration: 'moderate-02', $style: 'expressive') {
  $dur: var(--cds-duration-#{$duration});
  $ease: var(--cds-ease-#{$style}-entrance);
  
  transition-property: #{$properties};
  transition-duration: $dur;
  transition-timing-function: $ease;
}

@mixin motion-exit($properties, $duration: 'moderate-01', $style: 'expressive') {
  $dur: var(--cds-duration-#{$duration});
  $ease: var(--cds-ease-#{$style}-exit);
  
  transition-property: #{$properties};
  transition-duration: $dur;
  transition-timing-function: $ease;
}

// Kullanım örnekleri
.button {
  @include motion-productive(background-color, 'fast-02');
}

.modal {
  @include motion-entrance(opacity transform, 'moderate-02', 'expressive');
  
  &.is-closing {
    @include motion-exit(opacity transform, 'moderate-01', 'expressive');
  }
}
```

---

*Devam edecek: Bölüm 4 - Choreography & Micro-interactions*

---

## 4. Choreography & Micro-interactions

Choreography (koreografi), birden fazla elementin koordineli hareketidir. Micro-interactions ise küçük, amaçlı animasyonlardır.

### 4.1 Choreography Prensipleri

IBM Carbon'un choreography yaklaşımı 4 temel prensibe dayanır:

#### 4.1.1 Consistency (Tutarlılık)

Benzer elementler benzer şekilde hareket etmelidir:

```
TUTARLI HAREKET
════════════════════════════════════════════════════════════════

✅ DOĞRU: Tüm kartlar aynı yönde kayar
┌─────┐  ┌─────┐  ┌─────┐
│  1  │→ │  2  │→ │  3  │→
└─────┘  └─────┘  └─────┘
   ↓        ↓        ↓
┌─────┐  ┌─────┐  ┌─────┐
│  1  │  │  2  │  │  3  │
└─────┘  └─────┘  └─────┘

❌ YANLIŞ: Kartlar farklı yönlerde hareket eder
┌─────┐  ┌─────┐  ┌─────┐
│  1  │← │  2  │↓ │  3  │↗
└─────┘  └─────┘  └─────┘
```

#### 4.1.2 Continuity (Süreklilik)

Elementler arası geçişler kesintisiz olmalıdır:

```
SÜREKLİ GEÇİŞ
════════════════════════════════════════════════════════════════

✅ DOĞRU: Element A kapanırken B açılmaya başlar
           ┌────────────────────────────────┐
Element A: │████████████░░░░░░░░░░░░░░░░░░░░│
           └────────────────────────────────┘
           ┌────────────────────────────────┐
Element B: │░░░░░░░░░░░░████████████████████│
           └────────────────────────────────┘
                   ↑
              Örtüşme noktası

❌ YANLIŞ: Element A tamamen kapandıktan sonra B açılır (gecikme)
           ┌────────────────────────────────┐
Element A: │████████░░░░░░░░░░░░░░░░░░░░░░░░│
           └────────────────────────────────┘
           ┌────────────────────────────────┐
Element B: │░░░░░░░░░░░░░░░░░░░░████████████│
           └────────────────────────────────┘
                           ↑
                    Rahatsız edici boşluk
```

#### 4.1.3 Grid Movement (Izgara Hareketi)

Elementler Carbon 2x grid üzerinde hareket etmelidir:

```
GRID ÜZERİNDE HAREKET
════════════════════════════════════════════════════════════════

✅ DOĞRU: Yatay veya dikey hareket (grid'e uygun)
┌─────────────────────────────────────┐
│  ┌───┐                              │
│  │ A │ ───────────────→ ┌───┐       │
│  └───┘                  │ A │       │
│                         └───┘       │
│         │                           │
│         ▼                           │
│       ┌───┐                         │
│       │ B │                         │
│       └───┘                         │
└─────────────────────────────────────┘

❌ YANLIŞ: Diyagonal hareket (grid dışı)
┌─────────────────────────────────────┐
│  ┌───┐                              │
│  │ A │ ╲                            │
│  └───┘   ╲                          │
│            ╲                        │
│              ╲  ┌───┐               │
│                ╲│ A │               │
│                 └───┘               │
└─────────────────────────────────────┘
```

#### 4.1.4 Hierarchy (Hiyerarşi)

Önemli elementler önce veya daha belirgin hareket eder:

```
HİYERARŞİK HAREKET SIRASI
════════════════════════════════════════════════════════════════

Zaman →
0ms     50ms    100ms   150ms   200ms   250ms
│       │       │       │       │       │
▼       ▼       ▼       ▼       ▼       ▼

┌─────────────────────────────────────────┐
│ Primary Action (CTA Button)             │
│ ████████████████████████████████        │ ← İlk hareket eden
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Secondary Content (Cards)               │
│     ████████████████████████████        │ ← 50ms gecikme
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Tertiary Elements (Labels, Icons)       │
│         ████████████████████████        │ ← 100ms gecikme
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Background/Static Elements              │
│             ████████████████████        │ ← Son hareket eden
└─────────────────────────────────────────┘
```

### 4.2 Stagger Timing

Stagger, ardışık elementlerin kademeli animasyonudur.

#### 4.2.1 Stagger Kuralları

| Kural | Değer | Açıklama |
|-------|-------|----------|
| Minimum delay | **20ms** | Elementler arası minimum gecikme |
| Maximum delay | **40ms** | Elementler arası maximum gecikme |
| Total duration | **≤500ms** | Tüm stagger'ın toplam süresi |
| Maximum items | **12-15** | Tek seferde stagger edilecek max element |

#### 4.2.2 Stagger Hesaplama

```javascript
/**
 * Stagger delay hesaplama
 * @param {number} index - Element sırası (0'dan başlar)
 * @param {number} totalItems - Toplam element sayısı
 * @param {number} totalDuration - Toplam stagger süresi (ms)
 * @returns {number} - Bu element için gecikme (ms)
 */
function calculateStaggerDelay(index, totalItems, totalDuration = 500) {
  // Maximum 500ms içinde tamamlanmalı
  const maxDelay = totalDuration;
  
  // Element başına gecikme (20-40ms arası)
  const delayPerItem = Math.min(40, Math.max(20, maxDelay / totalItems));
  
  return index * delayPerItem;
}

// Kullanım örnekleri
calculateStaggerDelay(0, 5, 200);   // 0ms
calculateStaggerDelay(1, 5, 200);   // 40ms
calculateStaggerDelay(2, 5, 200);   // 80ms
calculateStaggerDelay(3, 5, 200);   // 120ms
calculateStaggerDelay(4, 5, 200);   // 160ms

// 12 element için
calculateStaggerDelay(0, 12, 400);  // 0ms
calculateStaggerDelay(6, 12, 400);  // ~200ms
calculateStaggerDelay(11, 12, 400); // ~366ms
```

#### 4.2.3 CSS Stagger Örneği

```scss
// Stagger animation for list items
.staggered-list {
  .list-item {
    opacity: 0;
    transform: translateY(16px);
    
    // Her item için ayrı delay
    @for $i from 1 through 12 {
      &:nth-child(#{$i}) {
        transition-delay: #{($i - 1) * 30}ms;
      }
    }
  }
  
  &.is-visible {
    .list-item {
      opacity: 1;
      transform: translateY(0);
      transition: 
        opacity var(--cds-duration-moderate-02) var(--cds-ease-expressive-entrance),
        transform var(--cds-duration-moderate-02) var(--cds-ease-expressive-entrance);
    }
  }
}
```

#### 4.2.4 React Stagger Component

```jsx
import React, { useRef, useEffect, useState } from 'react';

/**
 * Staggered animation wrapper
 */
function StaggeredList({ children, staggerDelay = 30, className = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className={`staggered-container ${className}`}
    >
      {React.Children.map(children, (child, index) => (
        <div
          className={`stagger-item ${isVisible ? 'is-visible' : ''}`}
          style={{
            transitionDelay: `${index * staggerDelay}ms`,
            '--stagger-index': index
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

// Kullanım
function CardGrid() {
  return (
    <StaggeredList staggerDelay={30}>
      <Card title="Card 1" />
      <Card title="Card 2" />
      <Card title="Card 3" />
      <Card title="Card 4" />
    </StaggeredList>
  );
}
```

```scss
// Stagger item styles
.stagger-item {
  opacity: 0;
  transform: translateY(24px);
  transition: 
    opacity 240ms var(--cds-ease-expressive-entrance),
    transform 240ms var(--cds-ease-expressive-entrance);
  
  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 4.3 Sequence Patterns

Sequence, elementlerin belirli bir sırayla animasyonudur.

#### 4.3.1 Entry Sequence (Giriş Sırası)

```
PAGE LOAD SEQUENCE
════════════════════════════════════════════════════════════════

Sıra   Element              Delay    Duration    Açıklama
─────────────────────────────────────────────────────────────────
1      Background           0ms      400ms       Sayfa arka planı
2      Navigation Shell     0ms      240ms       Header ve SideNav
3      Page Title           50ms     240ms       Ana başlık
4      Primary Content      100ms    240ms       Ana içerik alanı
5      Secondary Content    150ms    240ms       Yan içerikler
6      Cards (stagger)      200ms    240ms+      Kartlar kademeli
7      Floating Elements    350ms    150ms       FAB, tooltip triggers

                    ┌─────────────────────────────────────┐
0ms     ────────────│█████████ Background                 │
                    └─────────────────────────────────────┘
                    ┌─────────────────────────────────────┐
0ms     ────────────│████████ Navigation                  │
                    └─────────────────────────────────────┘
                    ┌─────────────────────────────────────┐
50ms      ──────────│████████ Title                       │
                    └─────────────────────────────────────┘
                    ┌─────────────────────────────────────┐
100ms       ────────│████████ Primary Content             │
                    └─────────────────────────────────────┘
                    ┌─────────────────────────────────────┐
150ms         ──────│████████ Secondary                   │
                    └─────────────────────────────────────┘
                    ┌─────────────────────────────────────┐
200ms           ────│████ Cards (staggered)               │
                    └─────────────────────────────────────┘
```

#### 4.3.2 Exit Sequence (Çıkış Sırası)

Çıkış, girişin tersi sırada olmalıdır:

```scss
// Exit sequence (reverse order)
.page-exit {
  // Floating elements first
  .floating-element {
    transition-delay: 0ms;
  }
  
  // Cards
  .card {
    transition-delay: 50ms;
  }
  
  // Secondary content
  .secondary-content {
    transition-delay: 100ms;
  }
  
  // Primary content
  .primary-content {
    transition-delay: 150ms;
  }
  
  // Navigation last (or stays visible)
  .navigation {
    transition-delay: 200ms;
  }
}
```

### 4.4 Micro-interactions

Micro-interactions, küçük ama önemli kullanıcı geri bildirimleridir.

#### 4.4.1 Button Micro-interactions

```scss
// Complete button micro-interaction
.carbonac-btn {
  position: relative;
  overflow: hidden;
  
  // Ripple effect container
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: radial-gradient(
      circle at var(--ripple-x, 50%) var(--ripple-y, 50%),
      rgba(255, 255, 255, 0.3) 0%,
      transparent 50%
    );
    transform: scale(0);
    opacity: 0;
  }
  
  // Base transition
  transition: 
    background-color var(--cds-duration-fast-02) var(--cds-ease-productive-standard),
    transform var(--cds-duration-fast-01) var(--cds-ease-productive-standard),
    box-shadow var(--cds-duration-fast-02) var(--cds-ease-productive-standard);
  
  // Hover - subtle lift
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  // Active - press down with ripple
  &:active:not(:disabled) {
    transform: translateY(0) scale(0.98);
    
    &::after {
      transform: scale(2);
      opacity: 1;
      transition: 
        transform 400ms var(--cds-ease-expressive-standard),
        opacity 400ms var(--cds-ease-expressive-standard);
    }
  }
  
  // Focus - ring animation
  &:focus-visible {
    outline: none;
    box-shadow: 
      0 0 0 2px var(--cds-background),
      0 0 0 4px var(--cds-focus);
    
    // Focus ring fade in
    animation: focus-ring-appear 150ms var(--cds-ease-productive-entrance);
  }
}

@keyframes focus-ring-appear {
  from {
    box-shadow: 
      0 0 0 2px var(--cds-background),
      0 0 0 2px var(--cds-focus);
  }
  to {
    box-shadow: 
      0 0 0 2px var(--cds-background),
      0 0 0 4px var(--cds-focus);
  }
}
```

**JavaScript ile Ripple Pozisyonu:**

```javascript
// Ripple effect position tracking
document.querySelectorAll('.carbonac-btn').forEach(button => {
  button.addEventListener('mousedown', (e) => {
    const rect = button.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    button.style.setProperty('--ripple-x', `${x}%`);
    button.style.setProperty('--ripple-y', `${y}%`);
  });
});
```

#### 4.4.2 Toggle/Switch Micro-interaction

```scss
// Toggle switch with micro-interaction
.carbonac-toggle {
  width: 48px;
  height: 24px;
  background: var(--cds-toggle-off);
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  
  transition: background-color var(--cds-duration-fast-02) var(--cds-ease-productive-standard);
  
  // Toggle knob
  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    
    // Smooth slide with slight overshoot feel
    transition: 
      transform var(--cds-duration-moderate-01) var(--cds-ease-productive-standard),
      box-shadow var(--cds-duration-fast-02) var(--cds-ease-productive-standard);
    
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
  
  // Hover state - subtle glow
  &:hover::before {
    box-shadow: 
      0 1px 3px rgba(0, 0, 0, 0.2),
      0 0 0 8px rgba(0, 0, 0, 0.05);
  }
  
  // Checked state
  &[aria-checked="true"] {
    background: var(--cds-toggle-on);
    
    &::before {
      transform: translateX(24px);
    }
  }
  
  // Focus state
  &:focus-visible {
    outline: 2px solid var(--cds-focus);
    outline-offset: 2px;
  }
  
  // Active/pressing state
  &:active::before {
    width: 24px; // Slightly wider when pressed
    transition-duration: var(--cds-duration-fast-01);
  }
}
```

#### 4.4.3 Checkbox Micro-interaction

```scss
// Checkbox with checkmark animation
.carbonac-checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid var(--cds-icon-primary);
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  
  transition: 
    background-color var(--cds-duration-fast-02) var(--cds-ease-productive-standard),
    border-color var(--cds-duration-fast-02) var(--cds-ease-productive-standard);
  
  // Checkmark SVG
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 6px;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    top: 4px;
    left: 3px;
    transform: rotate(-45deg) scale(0);
    transform-origin: center;
    opacity: 0;
    
    transition: 
      transform var(--cds-duration-fast-02) var(--cds-ease-productive-entrance),
      opacity var(--cds-duration-fast-01) var(--cds-ease-productive-entrance);
  }
  
  // Checked state
  &[aria-checked="true"] {
    background: var(--cds-interactive);
    border-color: var(--cds-interactive);
    
    &::after {
      transform: rotate(-45deg) scale(1);
      opacity: 1;
    }
  }
  
  // Indeterminate state
  &[aria-checked="mixed"] {
    background: var(--cds-interactive);
    border-color: var(--cds-interactive);
    
    &::after {
      width: 10px;
      height: 0;
      border-left: none;
      border-bottom: 2px solid white;
      top: 8px;
      left: 4px;
      transform: rotate(0) scale(1);
      opacity: 1;
    }
  }
  
  // Focus state
  &:focus-visible {
    outline: 2px solid var(--cds-focus);
    outline-offset: 2px;
  }
}
```

#### 4.4.4 Input Field Micro-interaction

```scss
// Text input with label animation
.carbonac-input-group {
  position: relative;
  
  .carbonac-input {
    width: 100%;
    padding: 16px 16px 8px;
    border: none;
    border-bottom: 1px solid var(--cds-border-strong-01);
    background: var(--cds-field-01);
    font-size: 14px;
    
    transition: 
      border-color var(--cds-duration-fast-02) var(--cds-ease-productive-standard),
      background-color var(--cds-duration-fast-02) var(--cds-ease-productive-standard);
    
    // Focus state
    &:focus {
      outline: none;
      border-bottom-width: 2px;
      border-color: var(--cds-focus);
    }
    
    // Error state
    &[aria-invalid="true"] {
      border-color: var(--cds-support-error);
    }
  }
  
  // Floating label
  .carbonac-label {
    position: absolute;
    left: 16px;
    top: 16px;
    font-size: 14px;
    color: var(--cds-text-secondary);
    pointer-events: none;
    transform-origin: left top;
    
    transition: 
      transform var(--cds-duration-fast-02) var(--cds-ease-productive-standard),
      font-size var(--cds-duration-fast-02) var(--cds-ease-productive-standard),
      color var(--cds-duration-fast-02) var(--cds-ease-productive-standard);
  }
  
  // Label float up when focused or has value
  .carbonac-input:focus + .carbonac-label,
  .carbonac-input:not(:placeholder-shown) + .carbonac-label {
    transform: translateY(-12px);
    font-size: 12px;
    color: var(--cds-text-primary);
  }
  
  // Error label color
  .carbonac-input[aria-invalid="true"] + .carbonac-label {
    color: var(--cds-support-error);
  }
}
```

#### 4.4.5 Loading States

```scss
// Skeleton loading animation
.carbonac-skeleton {
  background: linear-gradient(
    90deg,
    var(--cds-skeleton-background) 0%,
    var(--cds-skeleton-element) 50%,
    var(--cds-skeleton-background) 100%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 2s infinite linear;
  border-radius: 4px;
  
  // Reduced motion alternative
  @media (prefers-reduced-motion: reduce) {
    animation: skeleton-pulse 2s infinite ease-in-out;
  }
}

@keyframes skeleton-shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@keyframes skeleton-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

// Inline loading spinner
.carbonac-loading {
  width: 16px;
  height: 16px;
  border: 2px solid var(--cds-interactive);
  border-top-color: transparent;
  border-radius: 50%;
  animation: loading-spin 600ms linear infinite;
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    border-style: dotted;
  }
}

@keyframes loading-spin {
  to {
    transform: rotate(360deg);
  }
}
```

### 4.5 Notification Micro-interactions

```scss
// Toast notification entrance/exit
.carbonac-toast {
  position: fixed;
  right: 16px;
  bottom: 16px;
  padding: 16px;
  background: var(--cds-layer-01);
  border-left: 4px solid var(--cds-support-info);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  // Initial state (hidden)
  opacity: 0;
  transform: translateX(100%);
  
  // Entrance animation
  &.is-entering {
    animation: toast-enter 300ms var(--cds-ease-expressive-entrance) forwards;
  }
  
  // Exit animation
  &.is-exiting {
    animation: toast-exit 200ms var(--cds-ease-expressive-exit) forwards;
  }
  
  // Close button
  .close-btn {
    transition: 
      background-color var(--cds-duration-fast-02) var(--cds-ease-productive-standard);
    
    &:hover {
      background: var(--cds-layer-hover-01);
    }
  }
  
  // Progress bar (auto-dismiss)
  .progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background: var(--cds-interactive);
    animation: progress-shrink 5000ms linear forwards;
  }
}

@keyframes toast-enter {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes toast-exit {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
}

@keyframes progress-shrink {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}
```

### 4.6 Icon Micro-interactions

```scss
// Animated icons
.carbonac-icon {
  transition: 
    transform var(--cds-duration-fast-02) var(--cds-ease-productive-standard),
    color var(--cds-duration-fast-02) var(--cds-ease-productive-standard);
  
  // Hover rotation (for refresh, settings icons)
  &.icon--rotate-hover:hover {
    transform: rotate(90deg);
  }
  
  // Hover scale (for action icons)
  &.icon--scale-hover:hover {
    transform: scale(1.1);
  }
  
  // Arrow flip (for accordion, sort)
  &.icon--flip {
    transition: transform var(--cds-duration-moderate-01) var(--cds-ease-productive-standard);
    
    &.is-flipped {
      transform: rotate(180deg);
    }
  }
  
  // Bounce (for notification bell)
  &.icon--bounce:hover {
    animation: icon-bounce 400ms var(--cds-ease-expressive-standard);
  }
  
  // Pulse (for live/recording indicator)
  &.icon--pulse {
    animation: icon-pulse 2s ease-in-out infinite;
  }
}

@keyframes icon-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-4px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-2px);
  }
}

@keyframes icon-pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}
```

### 4.7 Choreography Best Practices Özeti

```
┌─────────────────────────────────────────────────────────────────┐
│              CHOREOGRAPHY BEST PRACTICES                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ✅ YAPIN                         ❌ YAPMAYIN                   │
│  ──────────────────────────────   ─────────────────────────     │
│  • Grid üzerinde hareket edin     • Diyagonal hareket           │
│  • Tutarlı yön kullanın           • Rastgele yönler             │
│  • 20-40ms stagger delay          • 100ms+ stagger delay        │
│  • Max 500ms toplam stagger       • Sonsuz stagger              │
│  • Önemli elementler önce         • Hiyerarşi olmadan           │
│  • Giriş/çıkış tutarlılığı        • Farklı giriş/çıkış          │
│  • Reduced motion desteği         • Sadece animation            │
│  • Amaçlı micro-interaction       • Amaçsız animasyon           │
│  • Performans optimizasyonu       • Heavy animations            │
│  • CSS transform/opacity          • Layout-triggering props     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

*Devam edecek: Bölüm 5 - Interactive States*

---

## 5. Interactive States

Interactive states, kullanıcı etkileşimlerine görsel geri bildirim sağlar. IBM Carbon, 6 temel interactive state tanımlar.

### 5.1 State Türleri

```
INTERACTIVE STATE HIERARCHY
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐     │
│   │ DEFAULT │───▶│  HOVER  │───▶│ ACTIVE  │───▶│ FOCUS   │     │
│   │         │    │         │    │(pressed)│    │         │     │
│   └─────────┘    └─────────┘    └─────────┘    └─────────┘     │
│        │                                            │           │
│        │              ┌─────────┐                   │           │
│        └─────────────▶│DISABLED │◀──────────────────┘           │
│                       │         │                               │
│                       └─────────┘                               │
│                                                                 │
│   ┌─────────┐    ┌─────────┐                                   │
│   │SELECTED │    │ LOADING │  (Ek durumlar)                    │
│   │         │    │         │                                   │
│   └─────────┘    └─────────┘                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

| State | Tetikleyici | Görsel Değişiklik | Duration |
|-------|-------------|-------------------|----------|
| **Default** | - | Normal görünüm | - |
| **Hover** | Mouse over | Arka plan değişimi | 110ms |
| **Active** | Mouse down | Pressed efekti | 70ms |
| **Focus** | Tab/keyboard | Focus ring | 110ms |
| **Disabled** | `disabled` attr | Opacity azalma | - |
| **Selected** | Click/select | Vurgu rengi | 110ms |
| **Loading** | Async action | Spinner/skeleton | - |

### 5.2 Hover State

Hover state, kullanıcının mouse ile element üzerine geldiğinde aktif olur.

#### 5.2.1 Hover Token'ları

```scss
// Hover background tokens
:root {
  // Layer hover backgrounds
  --cds-layer-hover-01: rgba(141, 141, 141, 0.12);  // White theme
  --cds-layer-hover-02: rgba(141, 141, 141, 0.16);
  --cds-layer-hover-03: rgba(141, 141, 141, 0.20);
  
  // Interactive hover
  --cds-interactive-hover: #0353e9;  // Darker blue
  
  // Button hover colors
  --cds-button-primary-hover: #0353e9;
  --cds-button-secondary-hover: #4c4c4c;
  --cds-button-tertiary-hover: #0353e9;
  --cds-button-ghost-hover: rgba(141, 141, 141, 0.12);
  --cds-button-danger-hover: #b81921;
  
  // Field hover
  --cds-field-hover-01: #e8e8e8;
  --cds-field-hover-02: #e8e8e8;
}

// G100 (Dark) theme hover tokens
[data-carbon-theme="g100"] {
  --cds-layer-hover-01: rgba(141, 141, 141, 0.16);
  --cds-layer-hover-02: rgba(141, 141, 141, 0.20);
  --cds-layer-hover-03: rgba(141, 141, 141, 0.24);
  
  --cds-button-primary-hover: #0353e9;
  --cds-button-secondary-hover: #606060;
  --cds-button-ghost-hover: rgba(141, 141, 141, 0.16);
  
  --cds-field-hover-01: #353535;
  --cds-field-hover-02: #474747;
}
```

#### 5.2.2 Hover Uygulama Örnekleri

```scss
// Button hover
.carbonac-btn {
  background-color: var(--cds-button-primary);
  transition: background-color var(--cds-duration-fast-02) var(--cds-ease-productive-standard);
  
  &:hover:not(:disabled) {
    background-color: var(--cds-button-primary-hover);
  }
}

// Card hover with elevation change
.carbonac-card {
  background: var(--cds-layer-01);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: 
    box-shadow var(--cds-duration-fast-02) var(--cds-ease-productive-standard),
    transform var(--cds-duration-fast-02) var(--cds-ease-productive-standard);
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
}

// Table row hover
.carbonac-table-row {
  background: transparent;
  transition: background-color var(--cds-duration-fast-02) var(--cds-ease-productive-standard);
  
  &:hover {
    background: var(--cds-layer-hover-01);
  }
}

// Link hover with underline animation
.carbonac-link {
  color: var(--cds-link-primary);
  text-decoration: none;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: currentColor;
    transition: width var(--cds-duration-fast-02) var(--cds-ease-productive-standard);
  }
  
  &:hover {
    color: var(--cds-link-primary-hover);
    
    &::after {
      width: 100%;
    }
  }
}
```

#### 5.2.3 Hover Görsel Kılavuzu

```
HOVER STATE VISUAL CHANGES
════════════════════════════════════════════════════════════════

BUTTON (Primary)
┌─────────────────────┐      ┌─────────────────────┐
│   Default State     │      │    Hover State      │
│  ┌───────────────┐  │      │  ┌───────────────┐  │
│  │  #0f62fe      │  │ ───▶ │  │  #0353e9      │  │
│  │  Button Text  │  │      │  │  Button Text  │  │
│  └───────────────┘  │      │  └───────────────┘  │
└─────────────────────┘      └─────────────────────┘
   Background: blue-60          Background: blue-70

CARD
┌─────────────────────┐      ┌─────────────────────┐
│   Default State     │      │    Hover State      │
│  ┌───────────────┐  │      │  ╔═══════════════╗  │
│  │               │  │      │  ║               ║  │
│  │    Content    │  │ ───▶ │  ║    Content    ║  │ ↑ translateY(-2px)
│  │               │  │      │  ║               ║  │
│  └───────────────┘  │      │  ╚═══════════════╝  │
│   shadow: 1px       │      │   shadow: 4px       │
└─────────────────────┘      └─────────────────────┘

TABLE ROW
┌─────────────────────────────────────────────────┐
│ Default     │ Cell 1  │ Cell 2  │ Cell 3       │
├─────────────┼─────────┼─────────┼──────────────┤
│ Hover       │ Cell 1  │ Cell 2  │ Cell 3       │ ← layer-hover-01
├─────────────┼─────────┼─────────┼──────────────┤
│ Default     │ Cell 1  │ Cell 2  │ Cell 3       │
└─────────────┴─────────┴─────────┴──────────────┘
```

### 5.3 Active/Pressed State

Active state, kullanıcının elementi tıkladığı an aktif olur (mousedown).

#### 5.3.1 Active Token'ları

```scss
:root {
  // Layer active backgrounds
  --cds-layer-active-01: rgba(141, 141, 141, 0.50);
  --cds-layer-active-02: rgba(141, 141, 141, 0.40);
  --cds-layer-active-03: rgba(141, 141, 141, 0.30);
  
  // Button active colors
  --cds-button-primary-active: #002d9c;  // blue-80
  --cds-button-secondary-active: #6f6f6f;
  --cds-button-tertiary-active: #002d9c;
  --cds-button-ghost-active: rgba(141, 141, 141, 0.32);
  --cds-button-danger-active: #750e13;
}
```

#### 5.3.2 Active Uygulama Örnekleri

```scss
// Button active state
.carbonac-btn {
  transition: 
    background-color var(--cds-duration-fast-02) var(--cds-ease-productive-standard),
    transform var(--cds-duration-fast-01) var(--cds-ease-productive-standard);
  
  &:active:not(:disabled) {
    background-color: var(--cds-button-primary-active);
    transform: scale(0.98);
    
    // Faster transition for immediate feedback
    transition-duration: var(--cds-duration-fast-01);
  }
}

// Tile/Card active state
.carbonac-tile {
  &:active {
    background: var(--cds-layer-active-01);
    transform: scale(0.99);
  }
}

// Icon button active with ripple
.carbonac-icon-btn {
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--cds-layer-active-01);
    border-radius: 50%;
    transform: scale(0);
    opacity: 0;
    transition: 
      transform 300ms var(--cds-ease-productive-standard),
      opacity 300ms var(--cds-ease-productive-standard);
  }
  
  &:active::before {
    transform: scale(2);
    opacity: 1;
    transition-duration: 70ms;
  }
}
```

#### 5.3.3 Active State Timing

```
ACTIVE STATE TIMING
════════════════════════════════════════════════════════════════

Mouse Event Timeline:
                    
         mousedown           mouseup
             │                  │
             ▼                  ▼
    ─────────●──────────────────●───────────────▶ time
             │                  │
             │◀──── Active ────▶│
             │      State       │
             │                  │
    ┌────────┴────────┐ ┌───────┴───────┐
    │ Transition IN   │ │ Transition OUT│
    │ 70ms (fast-01)  │ │ 110ms (fast-02)│
    └─────────────────┘ └───────────────┘
             
Giriş: HIZLI (70ms) - Anında geri bildirim
Çıkış: YAVAS (110ms) - Yumuşak geçiş
```

### 5.4 Focus State

Focus state, klavye navigasyonu için kritik öneme sahiptir. Erişilebilirlik için zorunludur.

#### 5.4.1 Focus Token'ları

```scss
:root {
  // Focus color
  --cds-focus: #0f62fe;  // blue-60
  --cds-focus-inset: #ffffff;
  --cds-focus-inverse: #ffffff;
  
  // Focus ring dimensions
  --cds-focus-ring-width: 2px;
  --cds-focus-ring-offset: 2px;
  
  // High contrast focus
  --cds-focus-highlight: rgba(15, 98, 254, 0.25);
}

// Dark theme
[data-carbon-theme="g100"] {
  --cds-focus: #ffffff;
  --cds-focus-inset: #161616;
  --cds-focus-inverse: #0f62fe;
}
```

#### 5.4.2 Focus Ring Stilleri

IBM Carbon, 2 temel focus ring stili kullanır:

```scss
// Style 1: Outline focus ring (default)
.carbonac-focusable {
  &:focus {
    outline: var(--cds-focus-ring-width) solid var(--cds-focus);
    outline-offset: var(--cds-focus-ring-offset);
  }
  
  // Remove default browser focus
  &:focus:not(:focus-visible) {
    outline: none;
  }
  
  // Keyboard focus only
  &:focus-visible {
    outline: var(--cds-focus-ring-width) solid var(--cds-focus);
    outline-offset: var(--cds-focus-ring-offset);
  }
}

// Style 2: Inset focus ring (for buttons, inputs)
.carbonac-btn {
  &:focus-visible {
    outline: none;
    box-shadow: 
      inset 0 0 0 1px var(--cds-focus),
      inset 0 0 0 2px var(--cds-focus-inset);
  }
}

// Style 3: Border focus (for inputs)
.carbonac-input {
  border-bottom: 1px solid var(--cds-border-strong-01);
  
  &:focus {
    outline: none;
    border-bottom: 2px solid var(--cds-focus);
  }
}
```

#### 5.4.3 Focus Görsel Kılavuzu

```
FOCUS RING STYLES
════════════════════════════════════════════════════════════════

OUTLINE STYLE (Default)
┌───────────────────────────────────────┐
│                                       │
│    ┌─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┐     │
│    ╎  ┌─────────────────────┐  ╎     │  ← 2px outline
│    ╎  │                     │  ╎     │  ← 2px offset
│    ╎  │     Element         │  ╎     │
│    ╎  │                     │  ╎     │
│    ╎  └─────────────────────┘  ╎     │
│    └─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┘     │
│                                       │
└───────────────────────────────────────┘

INSET STYLE (Buttons)
┌───────────────────────────────────────┐
│                                       │
│       ╔═══════════════════════╗       │
│       ║ ┌───────────────────┐ ║       │  ← 1px inner border (focus)
│       ║ │                   │ ║       │  ← 1px inner border (inset/white)
│       ║ │   Button Text     │ ║       │
│       ║ │                   │ ║       │
│       ║ └───────────────────┘ ║       │
│       ╚═══════════════════════╝       │
│                                       │
└───────────────────────────────────────┘

BORDER STYLE (Inputs)
┌───────────────────────────────────────┐
│                                       │
│       ┌─────────────────────────┐     │
│       │                         │     │
│       │   Input text            │     │
│       │                         │     │
│       └─────────────────────────┘     │
│       ══════════════════════════      │  ← 2px bottom border
│       ↑                               │
│    border-bottom: 2px solid focus     │
│                                       │
└───────────────────────────────────────┘
```

#### 5.4.4 Focus Management

```javascript
// Focus trap for modals
class FocusTrap {
  constructor(container) {
    this.container = container;
    this.focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    this.firstFocusable = this.focusableElements[0];
    this.lastFocusable = this.focusableElements[this.focusableElements.length - 1];
    
    this.handleKeydown = this.handleKeydown.bind(this);
  }
  
  activate() {
    // Store previous focus
    this.previousFocus = document.activeElement;
    
    // Focus first element
    this.firstFocusable?.focus();
    
    // Add trap listener
    this.container.addEventListener('keydown', this.handleKeydown);
  }
  
  deactivate() {
    // Remove listener
    this.container.removeEventListener('keydown', this.handleKeydown);
    
    // Restore previous focus
    this.previousFocus?.focus();
  }
  
  handleKeydown(e) {
    if (e.key !== 'Tab') return;
    
    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === this.firstFocusable) {
        e.preventDefault();
        this.lastFocusable.focus();
      }
    } else {
      // Tab
      if (document.activeElement === this.lastFocusable) {
        e.preventDefault();
        this.firstFocusable.focus();
      }
    }
  }
}

// Usage
const modal = document.querySelector('.modal');
const trap = new FocusTrap(modal);

function openModal() {
  modal.classList.add('is-open');
  trap.activate();
}

function closeModal() {
  modal.classList.remove('is-open');
  trap.deactivate();
}
```

### 5.5 Disabled State

Disabled state, elementin kullanılamaz olduğunu gösterir.

#### 5.5.1 Disabled Token'ları

```scss
:root {
  // Disabled backgrounds
  --cds-button-disabled: #c6c6c6;
  --cds-layer-disabled: #f4f4f4;
  
  // Disabled text
  --cds-text-disabled: #8d8d8d;
  --cds-text-on-color-disabled: #8d8d8d;
  
  // Disabled borders
  --cds-border-disabled: #c6c6c6;
  
  // Disabled icons
  --cds-icon-disabled: #c6c6c6;
}

// Dark theme disabled
[data-carbon-theme="g100"] {
  --cds-button-disabled: #525252;
  --cds-layer-disabled: #262626;
  --cds-text-disabled: #6f6f6f;
  --cds-border-disabled: #525252;
  --cds-icon-disabled: #525252;
}
```

#### 5.5.2 Disabled Uygulama Kuralları

```scss
// Disabled element styles
.carbonac-element {
  // Normal state
  background: var(--cds-layer-01);
  color: var(--cds-text-primary);
  cursor: pointer;
  
  &:disabled,
  &[aria-disabled="true"] {
    // Visual changes
    background: var(--cds-layer-disabled);
    color: var(--cds-text-disabled);
    cursor: not-allowed;
    
    // Remove interactive behaviors
    pointer-events: none; // Alternative: leave enabled for tooltips
    
    // No transitions needed
    transition: none;
    
    // Reset transforms
    transform: none;
    
    // Nested elements
    svg {
      fill: var(--cds-icon-disabled);
    }
    
    // Remove hover/active states
    &:hover,
    &:active {
      background: var(--cds-layer-disabled);
      transform: none;
    }
  }
}

// Button disabled
.carbonac-btn:disabled {
  background-color: var(--cds-button-disabled);
  color: var(--cds-text-on-color-disabled);
  border-color: transparent;
  cursor: not-allowed;
  
  // Allow tooltip on disabled
  pointer-events: auto;
}

// Input disabled
.carbonac-input:disabled {
  background: var(--cds-field-disabled);
  color: var(--cds-text-disabled);
  border-color: transparent;
  cursor: not-allowed;
  
  // Placeholder also disabled
  &::placeholder {
    color: var(--cds-text-disabled);
  }
}
```

#### 5.5.3 Disabled Görsel Kılavuzu

```
DISABLED STATE APPEARANCE
════════════════════════════════════════════════════════════════

                 ENABLED                      DISABLED
              ┌─────────────┐              ┌─────────────┐
    Button:   │  #0f62fe    │              │  #c6c6c6    │
              │  "Submit"   │              │  "Submit"   │ (gray text)
              └─────────────┘              └─────────────┘
              cursor: pointer              cursor: not-allowed
              
              ┌─────────────────┐          ┌─────────────────┐
    Input:    │ Type here...    │          │ Disabled input  │
              └─────────────────┘          └─────────────────┘
              border: #8d8d8d              border: transparent
              background: #f4f4f4          background: #f4f4f4

              ┌─────────────────┐          ┌─────────────────┐
    Checkbox: │ ☑ Option        │          │ ☐ Option        │ (grayed)
              └─────────────────┘          └─────────────────┘

KONTRAST GEREKSİNİMLERİ
─────────────────────────────────────────────────────────────────
⚠️ Disabled elementler WCAG kontrast gereksinimlerinden muaftır.
   Ancak, kullanıcının disabled durumu anlaması için yeterli
   görsel fark olmalıdır.
```

### 5.6 Selected State

Selected state, bir elementin seçili olduğunu gösterir (checkbox, radio, tab, etc.).

#### 5.6.1 Selected Token'ları

```scss
:root {
  // Selected backgrounds
  --cds-layer-selected-01: rgba(141, 141, 141, 0.20);
  --cds-layer-selected-02: rgba(141, 141, 141, 0.24);
  --cds-layer-selected-03: rgba(141, 141, 141, 0.28);
  
  // Selected with interactive color
  --cds-layer-selected-inverse: #0f62fe;
  
  // Selected text
  --cds-text-on-color: #ffffff;
  
  // Selected hover (combined state)
  --cds-layer-selected-hover-01: rgba(141, 141, 141, 0.32);
  --cds-layer-selected-hover-02: rgba(141, 141, 141, 0.36);
}
```

#### 5.6.2 Selected Uygulama Örnekleri

```scss
// Tab selected
.carbonac-tab {
  padding: 12px 16px;
  border-bottom: 2px solid transparent;
  color: var(--cds-text-secondary);
  transition: 
    border-color var(--cds-duration-fast-02) var(--cds-ease-productive-standard),
    color var(--cds-duration-fast-02) var(--cds-ease-productive-standard);
  
  &:hover:not([aria-selected="true"]) {
    color: var(--cds-text-primary);
    background: var(--cds-layer-hover-01);
  }
  
  &[aria-selected="true"] {
    color: var(--cds-text-primary);
    border-bottom-color: var(--cds-interactive);
    font-weight: 600;
  }
}

// List item selected
.carbonac-list-item {
  padding: 12px 16px;
  background: transparent;
  transition: background-color var(--cds-duration-fast-02) var(--cds-ease-productive-standard);
  
  &:hover {
    background: var(--cds-layer-hover-01);
  }
  
  &[aria-selected="true"] {
    background: var(--cds-layer-selected-01);
    
    // Selected + hover
    &:hover {
      background: var(--cds-layer-selected-hover-01);
    }
  }
}

// Chip/Tag selected
.carbonac-chip {
  padding: 4px 12px;
  border: 1px solid var(--cds-border-strong-01);
  border-radius: 16px;
  background: transparent;
  transition: 
    background-color var(--cds-duration-fast-02) var(--cds-ease-productive-standard),
    border-color var(--cds-duration-fast-02) var(--cds-ease-productive-standard);
  
  &[aria-pressed="true"] {
    background: var(--cds-interactive);
    border-color: var(--cds-interactive);
    color: var(--cds-text-on-color);
  }
}

// Radio button selected
.carbonac-radio {
  width: 20px;
  height: 20px;
  border: 2px solid var(--cds-icon-primary);
  border-radius: 50%;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: var(--cds-interactive);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform var(--cds-duration-fast-02) var(--cds-ease-productive-entrance);
  }
  
  &[aria-checked="true"] {
    border-color: var(--cds-interactive);
    
    &::after {
      transform: translate(-50%, -50%) scale(1);
    }
  }
}
```

### 5.7 Loading State

Loading state, async işlemler sırasında kullanıcıya geri bildirim sağlar.

#### 5.7.1 Loading Türleri

```
LOADING STATE TYPES
════════════════════════════════════════════════════════════════

1. INLINE LOADING (Button içinde)
   ┌─────────────────────────────┐
   │  ◠ Loading...               │
   └─────────────────────────────┘
   Kullanım: Form submit, save actions

2. SKELETON LOADING (İçerik placeholder)
   ┌─────────────────────────────┐
   │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
   │ ░░░░░░░░░░░░░░░░           │
   │                             │
   │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
   │ ░░░░░░░░░░░░░░░░░░░░░      │
   └─────────────────────────────┘
   Kullanım: Page load, data fetch

3. FULL PAGE LOADING (Overlay)
   ┌─────────────────────────────┐
   │                             │
   │           ◠                 │
   │        Loading...           │
   │                             │
   └─────────────────────────────┘
   Kullanım: App initialization, route change

4. PROGRESS LOADING (Determinate)
   ┌─────────────────────────────┐
   │ ████████████░░░░░░░░░  60%  │
   └─────────────────────────────┘
   Kullanım: File upload, multi-step process
```

#### 5.7.2 Loading Uygulamaları

```scss
// Button loading state
.carbonac-btn {
  position: relative;
  
  &.is-loading {
    // Disable interactions
    pointer-events: none;
    
    // Fade text
    .btn-text {
      opacity: 0;
    }
    
    // Show spinner
    &::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      border: 2px solid currentColor;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 600ms linear infinite;
    }
  }
}

// Skeleton loading
.carbonac-skeleton {
  --skeleton-bg: var(--cds-skeleton-background, #e8e8e8);
  --skeleton-shimmer: var(--cds-skeleton-element, #c6c6c6);
  
  background: linear-gradient(
    90deg,
    var(--skeleton-bg) 0%,
    var(--skeleton-shimmer) 50%,
    var(--skeleton-bg) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
  
  // Variants
  &--text {
    height: 16px;
    margin-bottom: 8px;
    
    &:last-child {
      width: 60%;
    }
  }
  
  &--heading {
    height: 24px;
    width: 50%;
    margin-bottom: 16px;
  }
  
  &--avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  
  &--image {
    width: 100%;
    height: 200px;
  }
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

// Progress bar
.carbonac-progress {
  height: 4px;
  background: var(--cds-layer-02);
  border-radius: 2px;
  overflow: hidden;
  
  &__bar {
    height: 100%;
    background: var(--cds-interactive);
    transition: width 300ms var(--cds-ease-productive-standard);
    
    // Indeterminate animation
    &--indeterminate {
      width: 30%;
      animation: progress-indeterminate 1.5s infinite;
    }
  }
}

@keyframes progress-indeterminate {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
}
```

### 5.8 Combined States

Birden fazla state aynı anda aktif olabilir.

#### 5.8.1 State Kombinasyonları

```
STATE COMBINATIONS
════════════════════════════════════════════════════════════════

                    HOVER   FOCUS   ACTIVE   DISABLED   SELECTED
─────────────────────────────────────────────────────────────────
Hover               ✓
Focus                       ✓
Hover + Focus       ✓       ✓
Active                              ✓
Hover + Active      ✓               ✓
Focus + Active              ✓       ✓
Selected                                                ✓
Selected + Hover    ✓                                   ✓
Selected + Focus            ✓                           ✓
Selected + Active                   ✓                   ✓
Disabled            ✗       ✗       ✗        ✓          ✗

✓ = Possible    ✗ = Not applicable
```

#### 5.8.2 Kombinasyon Önceliği

```scss
// State priority (highest to lowest)
// 1. Disabled (overrides all)
// 2. Active (during interaction)
// 3. Focus (keyboard navigation)
// 4. Hover (mouse over)
// 5. Selected (persistent)
// 6. Default

.carbonac-element {
  // 6. Default
  background: var(--cds-layer-01);
  
  // 5. Selected
  &[aria-selected="true"] {
    background: var(--cds-layer-selected-01);
  }
  
  // 4. Hover
  &:hover:not(:disabled) {
    background: var(--cds-layer-hover-01);
  }
  
  // 4+5. Selected + Hover
  &[aria-selected="true"]:hover:not(:disabled) {
    background: var(--cds-layer-selected-hover-01);
  }
  
  // 3. Focus
  &:focus-visible {
    outline: 2px solid var(--cds-focus);
    outline-offset: 2px;
  }
  
  // 2. Active
  &:active:not(:disabled) {
    background: var(--cds-layer-active-01);
  }
  
  // 1. Disabled (highest priority)
  &:disabled {
    background: var(--cds-layer-disabled);
    color: var(--cds-text-disabled);
    cursor: not-allowed;
    outline: none;
  }
}
```

### 5.9 Interactive States Özet Tablosu

| State | CSS Selector | Token Prefix | Transition | Erişilebilirlik |
|-------|--------------|--------------|------------|-----------------|
| **Default** | - | `--cds-layer-*` | - | - |
| **Hover** | `:hover` | `--cds-*-hover` | 110ms | Mouse only |
| **Active** | `:active` | `--cds-*-active` | 70ms | Mouse/touch |
| **Focus** | `:focus-visible` | `--cds-focus` | 110ms | Keyboard (WCAG) |
| **Disabled** | `:disabled` | `--cds-*-disabled` | none | `aria-disabled` |
| **Selected** | `[aria-selected]` | `--cds-*-selected` | 110ms | ARIA required |
| **Loading** | `.is-loading` | - | varies | `aria-busy` |

---

*Devam edecek: Bölüm 6 - Responsive Design & Breakpoints*

---

## 6. Responsive Design & Breakpoints

IBM Carbon, **2x Grid System** üzerine kurulu kapsamlı bir responsive tasarım sistemi sunar. Bu sistem, tüm ekran boyutlarında tutarlı ve optimize edilmiş deneyimler sağlar.

### 6.1 Carbon Breakpoints

Carbon, **5 standart breakpoint** tanımlar. Tüm breakpoint'ler **mobile-first** yaklaşımla tasarlanmıştır.

#### 6.1.1 Breakpoint Tablosu

| Breakpoint | Token | Min Width | Columns | Margin | Gutter |
|------------|-------|-----------|---------|--------|--------|
| **Small (sm)** | `$breakpoint-sm` | 320px | 4 | 0 | 32px |
| **Medium (md)** | `$breakpoint-md` | 672px | 8 | 16px | 32px |
| **Large (lg)** | `$breakpoint-lg` | 1056px | 16 | 16px | 32px |
| **X-Large (xlg)** | `$breakpoint-xlg` | 1312px | 16 | 16px | 32px |
| **Max** | `$breakpoint-max` | 1584px | 16 | 24px | 32px |

#### 6.1.2 Breakpoint Görselleştirmesi

```
CARBON BREAKPOINTS VISUALIZATION
════════════════════════════════════════════════════════════════

320px          672px         1056px        1312px        1584px
  │              │              │              │              │
  ▼              ▼              ▼              ▼              ▼
  ┌──────────────┬──────────────┬──────────────┬──────────────┬────────────►
  │     SM       │      MD      │      LG      │     XLG      │    MAX
  │   4 cols     │   8 cols     │   16 cols    │   16 cols    │  16 cols
  │   margin:0   │  margin:16   │  margin:16   │  margin:16   │ margin:24
  └──────────────┴──────────────┴──────────────┴──────────────┴────────────►

TYPICAL DEVICES
─────────────────────────────────────────────────────────────────────────────
SM (320-671px):   Mobile phones (portrait)
MD (672-1055px):  Tablets, large phones (landscape)
LG (1056-1311px): Small laptops, tablets (landscape)
XLG (1312-1583px): Laptops, desktop monitors
MAX (1584px+):    Large desktop monitors, ultrawide displays
```

#### 6.1.3 CSS Custom Properties

```scss
:root {
  // Breakpoint values
  --cds-breakpoint-sm: 320px;
  --cds-breakpoint-md: 672px;
  --cds-breakpoint-lg: 1056px;
  --cds-breakpoint-xlg: 1312px;
  --cds-breakpoint-max: 1584px;
  
  // Grid margins per breakpoint
  --cds-grid-margin-sm: 0;
  --cds-grid-margin-md: 1rem;    // 16px
  --cds-grid-margin-lg: 1rem;    // 16px
  --cds-grid-margin-xlg: 1rem;   // 16px
  --cds-grid-margin-max: 1.5rem; // 24px
  
  // Gutter (constant)
  --cds-grid-gutter: 2rem; // 32px (16px each side)
  
  // Column counts
  --cds-grid-columns-sm: 4;
  --cds-grid-columns-md: 8;
  --cds-grid-columns-lg: 16;
}
```

### 6.2 Media Query Mixins

```scss
// Carbon breakpoint mixins
@use '@carbon/layout' as layout;

// Usage with Carbon
@include layout.breakpoint('md') {
  // Styles for md and up
}

@include layout.breakpoint-down('lg') {
  // Styles for lg and down
}

@include layout.breakpoint-between('md', 'lg') {
  // Styles between md and lg
}

// Custom SCSS mixins (Carbon kullanmadan)
@mixin breakpoint($bp) {
  $breakpoints: (
    'sm': 320px,
    'md': 672px,
    'lg': 1056px,
    'xlg': 1312px,
    'max': 1584px
  );
  
  @media (min-width: map-get($breakpoints, $bp)) {
    @content;
  }
}

@mixin breakpoint-down($bp) {
  $breakpoints: (
    'sm': 320px,
    'md': 672px,
    'lg': 1056px,
    'xlg': 1312px,
    'max': 1584px
  );
  
  @media (max-width: map-get($breakpoints, $bp) - 1px) {
    @content;
  }
}

@mixin breakpoint-between($min, $max) {
  $breakpoints: (
    'sm': 320px,
    'md': 672px,
    'lg': 1056px,
    'xlg': 1312px,
    'max': 1584px
  );
  
  @media (min-width: map-get($breakpoints, $min)) and (max-width: map-get($breakpoints, $max) - 1px) {
    @content;
  }
}

// Kullanım örnekleri
.component {
  padding: 16px;
  
  @include breakpoint('md') {
    padding: 24px;
  }
  
  @include breakpoint('lg') {
    padding: 32px;
  }
}
```

### 6.3 2x Grid System

Carbon'un grid sistemi **8px mini unit** üzerine kuruludur. Tüm ölçüler 8'in katlarıdır.

#### 6.3.1 Grid Anatomisi

```
2x GRID ANATOMY
════════════════════════════════════════════════════════════════

┌───────────────────────────────────────────────────────────────┐
│ ◄─ Margin ─►│◄─────────── Grid Container ───────────►│◄ Margin │
│             │                                         │         │
│    ┌────────┼────────┬────────┬────────┬────────┬─────┼───┐    │
│    │        │        │        │        │        │     │   │    │
│    │ Column │ Gutter │ Column │ Gutter │ Column │ ... │   │    │
│    │        │        │        │        │        │     │   │    │
│    │◄─────►│◄──────►│◄─────►│◄──────►│◄─────►│     │   │    │
│    │  1/16  │  32px  │  1/16  │  32px  │  1/16  │     │   │    │
│    │        │        │        │        │        │     │   │    │
│    └────────┴────────┴────────┴────────┴────────┴─────┴───┘    │
│                                                                 │
└───────────────────────────────────────────────────────────────┘

GUTTER BREAKDOWN
─────────────────────────────────────────────────────────────────
         16px          16px
      ◄───────►    ◄───────►
┌──────────┐  ┌──────────┐  ┌──────────┐
│          │  │          │  │          │
│  Column  │  │  Column  │  │  Column  │
│          │  │          │  │          │
└──────────┘  └──────────┘  └──────────┘
      └────────┬────────┘
           32px gutter
```

#### 6.3.2 Grid Modları

Carbon, 3 farklı grid modu sunar:

```
GRID MODES
════════════════════════════════════════════════════════════════

1. WIDE MODE (Default)
   Gutter: 32px (16px each side)
   Content ile gutter arasında boşluk var
   
   ┌────────────────────────────────────────────────────────────┐
   │     │         │     │         │     │         │     │      │
   │  M  │ Content │  G  │ Content │  G  │ Content │  G  │  M   │
   │     │         │     │         │     │         │     │      │
   └────────────────────────────────────────────────────────────┘


2. NARROW MODE
   Gutter: 16px (left padding only)
   Daha sıkı layout, az boşluk
   
   ┌────────────────────────────────────────────────────────────┐
   │   │        │  │        │  │        │  │        │  │        │
   │ M │Content │G │Content │G │Content │G │Content │G │Content │
   │   │        │  │        │  │        │  │        │  │        │
   └────────────────────────────────────────────────────────────┘


3. CONDENSED MODE
   Gutter: 1px (sadece border)
   Data tables ve dense UI için
   
   ┌────────────────────────────────────────────────────────────┐
   │  │       ││       ││       ││       ││       ││       │    │
   │ M│Content││Content││Content││Content││Content││Content│ M  │
   │  │       ││       ││       ││       ││       ││       │    │
   └────────────────────────────────────────────────────────────┘
```

#### 6.3.3 Grid CSS Implementation

```scss
// Grid container
.carbonac-grid {
  display: grid;
  max-width: 1584px;
  margin: 0 auto;
  
  // Wide mode (default)
  --grid-gutter: 32px;
  --column-padding: calc(var(--grid-gutter) / 2);
  
  // Responsive columns
  grid-template-columns: repeat(4, 1fr);
  padding: 0 var(--cds-grid-margin-sm);
  
  @include breakpoint('md') {
    grid-template-columns: repeat(8, 1fr);
    padding: 0 var(--cds-grid-margin-md);
  }
  
  @include breakpoint('lg') {
    grid-template-columns: repeat(16, 1fr);
    padding: 0 var(--cds-grid-margin-lg);
  }
  
  // Narrow mode
  &--narrow {
    --grid-gutter: 16px;
  }
  
  // Condensed mode
  &--condensed {
    --grid-gutter: 1px;
  }
}

// Grid column
.carbonac-col {
  padding: 0 var(--column-padding);
  
  // Responsive spans
  &--sm-1 { grid-column: span 1; }
  &--sm-2 { grid-column: span 2; }
  &--sm-3 { grid-column: span 3; }
  &--sm-4 { grid-column: span 4; }
  
  @include breakpoint('md') {
    &--md-1 { grid-column: span 1; }
    &--md-2 { grid-column: span 2; }
    &--md-3 { grid-column: span 3; }
    &--md-4 { grid-column: span 4; }
    &--md-5 { grid-column: span 5; }
    &--md-6 { grid-column: span 6; }
    &--md-7 { grid-column: span 7; }
    &--md-8 { grid-column: span 8; }
  }
  
  @include breakpoint('lg') {
    &--lg-1 { grid-column: span 1; }
    &--lg-2 { grid-column: span 2; }
    &--lg-3 { grid-column: span 3; }
    &--lg-4 { grid-column: span 4; }
    &--lg-5 { grid-column: span 5; }
    &--lg-6 { grid-column: span 6; }
    &--lg-7 { grid-column: span 7; }
    &--lg-8 { grid-column: span 8; }
    &--lg-9 { grid-column: span 9; }
    &--lg-10 { grid-column: span 10; }
    &--lg-11 { grid-column: span 11; }
    &--lg-12 { grid-column: span 12; }
    &--lg-13 { grid-column: span 13; }
    &--lg-14 { grid-column: span 14; }
    &--lg-15 { grid-column: span 15; }
    &--lg-16 { grid-column: span 16; }
  }
}
```

### 6.4 React Grid Components

```jsx
import { Grid, Column } from '@carbon/react';

// Basic grid usage
function PageLayout() {
  return (
    <Grid>
      {/* Full width on sm, half on md, quarter on lg */}
      <Column sm={4} md={4} lg={4}>
        <Card>Sidebar</Card>
      </Column>
      
      {/* Full width on sm, half on md, three-quarters on lg */}
      <Column sm={4} md={4} lg={12}>
        <Card>Main Content</Card>
      </Column>
    </Grid>
  );
}

// Nested grids
function ComplexLayout() {
  return (
    <Grid>
      <Column lg={16}>
        <h1>Page Title</h1>
      </Column>
      
      <Column lg={4}>
        <nav>Navigation</nav>
      </Column>
      
      <Column lg={12}>
        {/* Nested grid */}
        <Grid>
          <Column sm={4} md={4} lg={8}>
            <article>Article Content</article>
          </Column>
          <Column sm={4} md={4} lg={4}>
            <aside>Related Content</aside>
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
}

// Grid with narrow mode
function NarrowLayout() {
  return (
    <Grid narrow>
      <Column lg={4}>
        <Tile>Tile 1</Tile>
      </Column>
      <Column lg={4}>
        <Tile>Tile 2</Tile>
      </Column>
      <Column lg={4}>
        <Tile>Tile 3</Tile>
      </Column>
      <Column lg={4}>
        <Tile>Tile 4</Tile>
      </Column>
    </Grid>
  );
}
```

### 6.5 Responsive Patterns

#### 6.5.1 Layout Değişimleri

```
RESPONSIVE LAYOUT PATTERNS
════════════════════════════════════════════════════════════════

PATTERN 1: Stack to Horizontal
─────────────────────────────────────────────────────────────────
SM (Stacked):            MD/LG (Horizontal):
┌─────────────────┐      ┌──────────┬──────────┐
│     Item 1      │      │  Item 1  │  Item 2  │
├─────────────────┤  ──▶ ├──────────┼──────────┤
│     Item 2      │      │  Item 3  │  Item 4  │
├─────────────────┤      └──────────┴──────────┘
│     Item 3      │
├─────────────────┤
│     Item 4      │
└─────────────────┘


PATTERN 2: Sidebar Collapse
─────────────────────────────────────────────────────────────────
LG (Sidebar):                    SM (Hamburger):
┌────────┬───────────────┐      ┌─────────────────┐
│        │               │      │ ≡    Header     │
│  Side  │    Content    │  ──▶ ├─────────────────┤
│  bar   │               │      │                 │
│        │               │      │    Content      │
└────────┴───────────────┘      │                 │
                                └─────────────────┘


PATTERN 3: Card Grid Reflow
─────────────────────────────────────────────────────────────────
SM (1 col):     MD (2 col):         LG (4 col):
┌─────────┐     ┌─────┬─────┐       ┌───┬───┬───┬───┐
│  Card   │     │Card │Card │       │ C │ C │ C │ C │
├─────────┤     ├─────┼─────┤   ──▶ ├───┼───┼───┼───┤
│  Card   │ ──▶ │Card │Card │       │ C │ C │ C │ C │
├─────────┤     └─────┴─────┘       └───┴───┴───┴───┘
│  Card   │
└─────────┘


PATTERN 4: Navigation Transform
─────────────────────────────────────────────────────────────────
LG (Horizontal Nav):
┌─────────────────────────────────────────────────┐
│ Logo │ Nav1 │ Nav2 │ Nav3 │ Nav4 │     │ User │
└─────────────────────────────────────────────────┘
                        │
                        ▼
SM (Bottom Tab Bar or Hamburger):
┌─────────────────────────────────────────────────┐
│ ≡  │  Logo                          │  Search  │
└─────────────────────────────────────────────────┘
```

#### 6.5.2 Responsive Layout Örneği

```scss
// Carbonac main layout
.carbonac-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.carbonac-main {
  display: flex;
  flex: 1;
  flex-direction: column;
  
  @include breakpoint('lg') {
    flex-direction: row;
  }
}

// Sidebar - hidden on mobile, visible on lg
.carbonac-sidebar {
  width: 100%;
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--cds-duration-moderate-02) var(--cds-ease-productive-standard);
  
  // Mobile: expandable menu
  &.is-open {
    max-height: 400px;
  }
  
  @include breakpoint('lg') {
    width: 256px;
    max-height: none;
    flex-shrink: 0;
    border-right: 1px solid var(--cds-border-subtle-01);
  }
}

// Content area
.carbonac-content {
  flex: 1;
  padding: 16px;
  
  @include breakpoint('md') {
    padding: 24px;
  }
  
  @include breakpoint('lg') {
    padding: 32px 48px;
  }
}

// AI Panel - bottom sheet on mobile, side panel on lg
.carbonac-ai-panel {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60vh;
  transform: translateY(100%);
  transition: transform var(--cds-duration-moderate-02) var(--cds-ease-expressive-entrance);
  background: var(--cds-layer-01);
  border-top: 1px solid var(--cds-border-subtle-01);
  border-radius: 16px 16px 0 0;
  z-index: 100;
  
  &.is-open {
    transform: translateY(0);
  }
  
  @include breakpoint('lg') {
    position: static;
    width: 320px;
    height: auto;
    transform: none;
    border-radius: 0;
    border-top: none;
    border-left: 1px solid var(--cds-border-subtle-01);
    flex-shrink: 0;
    
    // Collapsible sidebar
    transition: width var(--cds-duration-moderate-02) var(--cds-ease-expressive-standard);
    
    &.is-collapsed {
      width: 48px;
    }
  }
}
```

### 6.6 Mobile-First Approach

Mobile-first, en küçük ekran boyutundan başlayarak yukarı doğru stil ekleme yaklaşımıdır.

#### 6.6.1 Mobile-First Prensipleri

```
MOBILE-FIRST PRINCIPLES
════════════════════════════════════════════════════════════════

1. BASE STYLES = MOBILE
   Varsayılan stiller mobil için yazılır

2. PROGRESSIVE ENHANCEMENT
   Daha büyük ekranlar için özellik eklenir, çıkarılmaz

3. CONTENT PRIORITY
   Mobilde en önemli içerik önce gösterilir

4. PERFORMANCE FIRST
   Mobil bağlantılar için optimize edilir

5. TOUCH TARGETS
   Minimum 44x44px tıklanabilir alan

YANLIŞ YAKLAŞIM (Desktop-first):
─────────────────────────────────────────────────────────────────
.element {
  width: 1200px;
  padding: 48px;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
  }
}

DOĞRU YAKLAŞIM (Mobile-first):
─────────────────────────────────────────────────────────────────
.element {
  width: 100%;
  padding: 16px;
  
  @include breakpoint('md') {
    padding: 24px;
  }
  
  @include breakpoint('lg') {
    max-width: 1200px;
    padding: 48px;
  }
}
```

#### 6.6.2 Touch Targets

```scss
// Touch target sizing
.carbonac-touch-target {
  // Minimum touch size
  min-width: 44px;
  min-height: 44px;
  
  // For smaller visual elements, use padding
  &--small {
    padding: 12px; // 20px element + 24px padding = 44px
    
    .icon {
      width: 20px;
      height: 20px;
    }
  }
}

// Interactive element spacing on mobile
.carbonac-interactive-list {
  @include breakpoint-down('md') {
    .list-item {
      padding: 12px 16px;
      min-height: 48px;
      
      // Ensure tap targets don't overlap
      & + .list-item {
        margin-top: 4px;
      }
    }
  }
}

// Button group on mobile
.carbonac-btn-group {
  display: flex;
  gap: 8px;
  
  @include breakpoint-down('md') {
    // Stack buttons vertically
    flex-direction: column;
    
    .carbonac-btn {
      width: 100%;
      min-height: 48px;
    }
  }
}
```

### 6.7 Fluid Typography

Typography de responsive olmalıdır, ancak breakpoint'ler yerine fluid scaling kullanılabilir.

```scss
// Fluid typography with clamp()
.carbonac-heading {
  // heading-05: 32px on desktop
  // heading-03: 20px on mobile
  // Fluid between md and lg
  font-size: clamp(
    1.25rem,    // min: 20px
    1rem + 2vw, // preferred: scales with viewport
    2rem        // max: 32px
  );
  line-height: 1.25;
}

// Type scale responsive adjustments
.carbonac-display {
  // display-01: 42-54px
  font-size: clamp(2.625rem, 2rem + 3vw, 3.375rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.carbonac-body {
  // body-02: 16px constant (no scaling)
  font-size: 1rem;
  line-height: 1.5;
}

// Step-based responsive typography
.carbonac-text {
  // Base (mobile)
  font-size: 14px;
  line-height: 1.5;
  
  @include breakpoint('md') {
    font-size: 16px;
  }
  
  // Headings scale more dramatically
  &--heading-lg {
    font-size: 24px;
    
    @include breakpoint('md') {
      font-size: 32px;
    }
    
    @include breakpoint('lg') {
      font-size: 42px;
    }
  }
}
```

### 6.8 Responsive Component Examples

#### 6.8.1 Responsive Card Grid

```jsx
import { Grid, Column, Tile } from '@carbon/react';

function ResponsiveCardGrid({ cards }) {
  return (
    <Grid>
      {cards.map((card, index) => (
        <Column 
          key={index}
          sm={4}   // Full width on mobile
          md={4}   // 2 columns on tablet
          lg={4}   // 4 columns on desktop
        >
          <Tile className="carbonac-card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </Tile>
        </Column>
      ))}
    </Grid>
  );
}
```

```scss
.carbonac-card {
  height: 100%;
  padding: 16px;
  
  @include breakpoint('md') {
    padding: 24px;
  }
  
  // Aspect ratio on mobile
  @include breakpoint-down('md') {
    aspect-ratio: 16 / 9;
  }
}
```

#### 6.8.2 Responsive Data Table

```jsx
function ResponsiveTable({ data, columns }) {
  const isMobile = useMediaQuery('(max-width: 671px)');
  
  if (isMobile) {
    // Card view on mobile
    return (
      <div className="carbonac-table-cards">
        {data.map((row, index) => (
          <div key={index} className="table-card">
            {columns.map(col => (
              <div key={col.key} className="table-card__row">
                <span className="table-card__label">{col.header}</span>
                <span className="table-card__value">{row[col.key]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  
  // Standard table on larger screens
  return (
    <DataTable rows={data} headers={columns}>
      {/* ... */}
    </DataTable>
  );
}
```

```scss
.carbonac-table-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.table-card {
  background: var(--cds-layer-01);
  padding: 16px;
  border-radius: 4px;
  
  &__row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid var(--cds-border-subtle-01);
    
    &:last-child {
      border-bottom: none;
    }
  }
  
  &__label {
    color: var(--cds-text-secondary);
    font-size: 12px;
  }
  
  &__value {
    font-weight: 600;
  }
}
```

#### 6.8.3 Responsive Modal

```scss
.carbonac-modal {
  position: fixed;
  z-index: 1000;
  
  // Mobile: Full screen bottom sheet
  @include breakpoint-down('md') {
    inset: 0;
    top: auto;
    height: 90vh;
    max-height: 90vh;
    border-radius: 16px 16px 0 0;
    
    // Drag handle
    &::before {
      content: '';
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 4px;
      background: var(--cds-border-strong-01);
      border-radius: 2px;
    }
  }
  
  // Tablet and up: Centered dialog
  @include breakpoint('md') {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 600px;
    max-height: 80vh;
    border-radius: 4px;
  }
  
  // Large: Wider modal
  @include breakpoint('lg') {
    max-width: 800px;
  }
}
```

### 6.9 useMediaQuery Hook

```javascript
import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive behavior
 * @param {string} query - CSS media query string
 * @returns {boolean} - Whether the query matches
 */
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);
    
    const handler = (event) => setMatches(event.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);
  
  return matches;
}

// Convenience hooks for Carbon breakpoints
function useBreakpoint() {
  const isSm = useMediaQuery('(min-width: 320px)');
  const isMd = useMediaQuery('(min-width: 672px)');
  const isLg = useMediaQuery('(min-width: 1056px)');
  const isXlg = useMediaQuery('(min-width: 1312px)');
  const isMax = useMediaQuery('(min-width: 1584px)');
  
  // Return current breakpoint name
  if (isMax) return 'max';
  if (isXlg) return 'xlg';
  if (isLg) return 'lg';
  if (isMd) return 'md';
  return 'sm';
}

// Usage
function ResponsiveComponent() {
  const breakpoint = useBreakpoint();
  const isMobile = !useMediaQuery('(min-width: 672px)');
  
  return (
    <div>
      <p>Current breakpoint: {breakpoint}</p>
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </div>
  );
}
```

### 6.10 Responsive Best Practices Özeti

```
┌─────────────────────────────────────────────────────────────────┐
│              RESPONSIVE BEST PRACTICES                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ✅ YAPIN                         ❌ YAPMAYIN                   │
│  ──────────────────────────────   ─────────────────────────     │
│  • Mobile-first yazın             • Desktop-first yazıp         │
│  • Carbon breakpoint'leri           @media max-width kullanma   │
│    kullanın (320,672,1056,        • Rastgele breakpoint'ler     │
│    1312,1584)                     • Fixed width container       │
│  • Touch targets min 44px         • Küçük tıklama alanları      │
│  • Fluid layout kullanın          • px yerine vw aşırı kullanım │
│  • Content önceliği belirleyin    • Her şeyi göstermeye çalışma │
│  • Grid column spans ile          • Absolute positioning        │
│    responsive layout              • !important ile override     │
│  • Conditional rendering          • Display:none ile gizleme    │
│    ile component değiştirme         (performans sorunu)         │
│  • clamp() ile fluid typography   • JS ile resize dinleme       │
│  • CSS Grid/Flexbox kullanın      • Float-based layouts         │
│                                                                 │
│  PERFORMANS                                                     │
│  ──────────────────────────────────────────────────────────     │
│  • Mobil için küçük asset'ler                                   │
│  • Lazy loading images                                          │
│  • Critical CSS inline                                          │
│  • srcset ile responsive images                                 │
│  • matchMedia API ile JS optimize                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 7. React Components & Patterns

Carbonac, **@carbon/react** kütüphanesini temel alarak modern React uygulamaları oluşturur. Bu bölüm, Carbon component'lerinin doğru kullanımını ve ileri düzey pattern'leri kapsar.

### 7.1 Theme Provider Setup

Carbon'un tüm component'leri theme token'larına bağlıdır. Uygulama kökünde theme provider kurulmalıdır.

#### 7.1.1 Temel Kurulum

```jsx
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from '@carbon/react';
import App from './App';

// Carbon styles
import '@carbon/react/index.scss';
// veya specific imports
import '@carbon/styles/css/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme theme="g100">
      <App />
    </Theme>
  </React.StrictMode>
);
```

#### 7.1.2 Dynamic Theme Switching

```jsx
// src/contexts/ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { Theme } from '@carbon/react';

const ThemeContext = createContext();

const THEMES = {
  light: 'white',
  dark: 'g100',
  gray: 'g10',
  darkGray: 'g90'
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('carbonac-theme');
    if (saved) return saved;
    
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'g100';
    }
    return 'white';
  });
  
  useEffect(() => {
    localStorage.setItem('carbonac-theme', theme);
    
    // Update document for non-Carbon elements
    document.documentElement.setAttribute('data-carbon-theme', theme);
  }, [theme]);
  
  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => {
      if (!localStorage.getItem('carbonac-theme')) {
        setTheme(e.matches ? 'g100' : 'white');
      }
    };
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'white' ? 'g100' : 'white');
  };
  
  const value = {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'g100' || theme === 'g90'
  };
  
  return (
    <ThemeContext.Provider value={value}>
      <Theme theme={theme}>
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
```

#### 7.1.3 Nested Themes

```jsx
import { Theme } from '@carbon/react';

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Main content uses parent theme */}
      <main className="dashboard-content">
        <h1>Dashboard</h1>
        
        {/* AI Panel uses different theme */}
        <Theme theme="g100">
          <aside className="ai-panel">
            <h2>AI Assistant</h2>
            {/* All Carbon components here use g100 theme */}
          </aside>
        </Theme>
      </main>
      
      {/* Inline theme zones */}
      <Theme theme="g10">
        <section className="stats-zone">
          <StatCard />
        </section>
      </Theme>
    </div>
  );
}
```

### 7.2 Layout Components

#### 7.2.1 Grid System

```jsx
import { Grid, Column, FlexGrid, Row } from '@carbon/react';

// CSS Grid based (recommended)
function ModernLayout() {
  return (
    <Grid className="page-grid">
      {/* Header: full width */}
      <Column lg={16} md={8} sm={4}>
        <Header />
      </Column>
      
      {/* Sidebar: 4 cols on lg, hidden on smaller */}
      <Column lg={4} md={0} sm={0}>
        <Sidebar />
      </Column>
      
      {/* Main: remaining space */}
      <Column lg={12} md={8} sm={4}>
        <main>
          {/* Nested grid for content */}
          <Grid narrow>
            <Column lg={8} md={6} sm={4}>
              <ContentArea />
            </Column>
            <Column lg={4} md={2} sm={4}>
              <RelatedContent />
            </Column>
          </Grid>
        </main>
      </Column>
    </Grid>
  );
}

// Flexbox based (legacy support)
function FlexLayout() {
  return (
    <FlexGrid>
      <Row>
        <Column lg={4}>
          <Card>Column 1</Card>
        </Column>
        <Column lg={4}>
          <Card>Column 2</Card>
        </Column>
        <Column lg={4}>
          <Card>Column 3</Card>
        </Column>
        <Column lg={4}>
          <Card>Column 4</Card>
        </Column>
      </Row>
    </FlexGrid>
  );
}
```

#### 7.2.2 Aspect Ratio Container

```jsx
import { AspectRatio } from '@carbon/react';

function MediaCard({ image, video }) {
  return (
    <div className="media-card">
      {/* 16:9 aspect ratio */}
      <AspectRatio ratio="16x9">
        {video ? (
          <video src={video} controls />
        ) : (
          <img src={image} alt="" />
        )}
      </AspectRatio>
      
      {/* 1:1 square */}
      <AspectRatio ratio="1x1">
        <div className="thumbnail" />
      </AspectRatio>
      
      {/* 4:3 classic */}
      <AspectRatio ratio="4x3">
        <iframe src="..." title="embed" />
      </AspectRatio>
    </div>
  );
}
```

#### 7.2.3 Stack Layout

```jsx
import { Stack, VStack, HStack } from '@carbon/react';

function StackLayouts() {
  return (
    <>
      {/* Vertical stack with gap */}
      <Stack gap={6}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>
      
      {/* Horizontal stack */}
      <Stack orientation="horizontal" gap={4}>
        <Button>Action 1</Button>
        <Button>Action 2</Button>
      </Stack>
    </>
  );
}

// Custom Stack component (Carbon'da yoksa)
function CustomStack({ 
  children, 
  gap = 4, 
  direction = 'column',
  align = 'stretch',
  justify = 'flex-start'
}) {
  const gapValue = `var(--cds-spacing-0${gap})`;
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: direction,
      gap: gapValue,
      alignItems: align,
      justifyContent: justify
    }}>
      {children}
    </div>
  );
}
```

### 7.3 Navigation Components

#### 7.3.1 Header & Shell

```jsx
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenu,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderPanel,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  SkipToContent
} from '@carbon/react';
import { 
  Search, 
  Notification, 
  UserAvatar,
  Switcher as SwitcherIcon 
} from '@carbon/icons-react';

function AppShell({ children }) {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="Carbonac">
            <SkipToContent />
            
            <HeaderName href="/" prefix="IBM">
              Carbonac
            </HeaderName>
            
            {/* Desktop navigation */}
            <HeaderNavigation aria-label="Main">
              <HeaderMenuItem href="/convert">Convert</HeaderMenuItem>
              <HeaderMenuItem href="/templates">Templates</HeaderMenuItem>
              <HeaderMenu aria-label="Resources" menuLinkName="Resources">
                <HeaderMenuItem href="/docs">Documentation</HeaderMenuItem>
                <HeaderMenuItem href="/examples">Examples</HeaderMenuItem>
                <HeaderMenuItem href="/api">API Reference</HeaderMenuItem>
              </HeaderMenu>
            </HeaderNavigation>
            
            {/* Global actions */}
            <HeaderGlobalBar>
              <HeaderGlobalAction 
                aria-label="Search"
                tooltipAlignment="end"
              >
                <Search size={20} />
              </HeaderGlobalAction>
              
              <HeaderGlobalAction
                aria-label="Notifications"
                tooltipAlignment="end"
              >
                <Notification size={20} />
              </HeaderGlobalAction>
              
              <HeaderGlobalAction
                aria-label="User"
                tooltipAlignment="end"
              >
                <UserAvatar size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
            
            {/* User panel */}
            <HeaderPanel aria-label="User panel" expanded={false}>
              <UserPanel />
            </HeaderPanel>
          </Header>
          
          {/* Side navigation */}
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            onOverlayClick={onClickSideNavExpand}
            href="#main-content"
          >
            <SideNavItems>
              <SideNavLink href="/dashboard">
                Dashboard
              </SideNavLink>
              <SideNavMenu title="Conversion">
                <SideNavMenuItem href="/convert/typst">
                  Typst Engine
                </SideNavMenuItem>
                <SideNavMenuItem href="/convert/quarto">
                  Quarto Engine
                </SideNavMenuItem>
              </SideNavMenu>
              <SideNavLink href="/settings">
                Settings
              </SideNavLink>
            </SideNavItems>
          </SideNav>
          
          <main id="main-content">
            {children}
          </main>
        </>
      )}
    />
  );
}
```

#### 7.3.2 Breadcrumb

```jsx
import { Breadcrumb, BreadcrumbItem } from '@carbon/react';

function PageBreadcrumb({ items }) {
  return (
    <Breadcrumb noTrailingSlash>
      {items.map((item, index) => (
        <BreadcrumbItem
          key={item.href}
          href={item.href}
          isCurrentPage={index === items.length - 1}
        >
          {item.label}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}

// Usage
<PageBreadcrumb items={[
  { href: '/', label: 'Home' },
  { href: '/templates', label: 'Templates' },
  { href: '/templates/carbon-advanced', label: 'Carbon Advanced' }
]} />
```

#### 7.3.3 Tabs

```jsx
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react';

function TabbedContent() {
  return (
    <Tabs>
      <TabList aria-label="Conversion options">
        <Tab>Typst</Tab>
        <Tab>Quarto</Tab>
        <Tab>Settings</Tab>
        <Tab disabled>Premium</Tab>
      </TabList>
      
      <TabPanels>
        <TabPanel>
          <TypstConverter />
        </TabPanel>
        <TabPanel>
          <QuartoConverter />
        </TabPanel>
        <TabPanel>
          <ConversionSettings />
        </TabPanel>
        <TabPanel>
          <PremiumFeatures />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

// Contained tabs (with background)
function ContainedTabs() {
  return (
    <Tabs>
      <TabList contained aria-label="Options">
        <Tab>Option 1</Tab>
        <Tab>Option 2</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
```

### 7.4 Form Components

#### 7.4.1 Form Pattern

```jsx
import {
  Form,
  FormGroup,
  FormLabel,
  TextInput,
  TextArea,
  Select,
  SelectItem,
  NumberInput,
  Checkbox,
  RadioButtonGroup,
  RadioButton,
  Toggle,
  FileUploader,
  Button,
  InlineNotification
} from '@carbon/react';
import { useState } from 'react';

function ConversionForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    engine: 'typst',
    template: 'carbon-advanced',
    options: {
      toc: true,
      pageNumbers: true
    }
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (field) => (e) => {
    const value = e.target?.value ?? e;
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };
  
  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup legendText="Document Information">
        <TextInput
          id="title"
          labelText="Document Title"
          placeholder="Enter document title"
          value={formData.title}
          onChange={handleChange('title')}
          invalid={!!errors.title}
          invalidText={errors.title}
          required
        />
        
        <TextInput
          id="author"
          labelText="Author"
          placeholder="Enter author name"
          value={formData.author}
          onChange={handleChange('author')}
          helperText="Optional: defaults to system user"
        />
      </FormGroup>
      
      <FormGroup legendText="Conversion Options">
        <Select
          id="engine"
          labelText="Rendering Engine"
          value={formData.engine}
          onChange={handleChange('engine')}
        >
          <SelectItem value="typst" text="Typst (Fast)" />
          <SelectItem value="quarto" text="Quarto (Feature-rich)" />
          <SelectItem value="both" text="Both Engines" />
        </Select>
        
        <Select
          id="template"
          labelText="Template"
          value={formData.template}
          onChange={handleChange('template')}
        >
          <SelectItem value="carbon-advanced" text="Carbon Advanced" />
          <SelectItem value="carbon-template" text="Carbon Basic" />
          <SelectItem value="carbon-theme-g100" text="Carbon Dark" />
        </Select>
      </FormGroup>
      
      <FormGroup legendText="Features">
        <Checkbox
          id="toc"
          labelText="Include Table of Contents"
          checked={formData.options.toc}
          onChange={(_, { checked }) => 
            setFormData(prev => ({
              ...prev,
              options: { ...prev.options, toc: checked }
            }))
          }
        />
        
        <Checkbox
          id="pageNumbers"
          labelText="Show Page Numbers"
          checked={formData.options.pageNumbers}
          onChange={(_, { checked }) =>
            setFormData(prev => ({
              ...prev,
              options: { ...prev.options, pageNumbers: checked }
            }))
          }
        />
      </FormGroup>
      
      <div className="form-actions">
        <Button kind="secondary" type="reset">
          Reset
        </Button>
        <Button 
          kind="primary" 
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Converting...' : 'Convert to PDF'}
        </Button>
      </div>
    </Form>
  );
}
```

#### 7.4.2 File Upload

```jsx
import { FileUploader, FileUploaderDropContainer } from '@carbon/react';

function MarkdownUploader({ onFileSelect }) {
  const [files, setFiles] = useState([]);
  
  const handleAdd = (event, { addedFiles }) => {
    const newFiles = addedFiles.map(file => ({
      ...file,
      status: 'uploading',
      iconDescription: 'Uploading'
    }));
    setFiles(prev => [...prev, ...newFiles]);
    
    // Process files
    addedFiles.forEach(async (file) => {
      try {
        const content = await file.text();
        onFileSelect({ file, content });
        
        setFiles(prev => prev.map(f => 
          f.name === file.name
            ? { ...f, status: 'complete', iconDescription: 'Complete' }
            : f
        ));
      } catch (error) {
        setFiles(prev => prev.map(f =>
          f.name === file.name
            ? { ...f, status: 'edit', iconDescription: 'Error', invalid: true }
            : f
        ));
      }
    });
  };
  
  const handleDelete = (uuid) => {
    setFiles(prev => prev.filter(f => f.uuid !== uuid));
  };
  
  return (
    <div className="file-uploader">
      <FileUploaderDropContainer
        accept={['.md', '.markdown', '.txt']}
        labelText="Drag and drop files here or click to upload"
        multiple
        onAddFiles={handleAdd}
      />
      
      <FileUploader
        accept={['.md', '.markdown', '.txt']}
        buttonLabel="Add files"
        filenameStatus="edit"
        iconDescription="Clear file"
        labelDescription="Max file size is 10MB. Supported: .md, .markdown, .txt"
        labelTitle="Upload Markdown"
        size="lg"
        onChange={(e) => handleAdd(e, { addedFiles: Array.from(e.target.files) })}
        onDelete={handleDelete}
      />
      
      {files.length > 0 && (
        <ul className="file-list">
          {files.map(file => (
            <li key={file.uuid} className={`file-item file-item--${file.status}`}>
              {file.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

#### 7.4.3 Search with Typeahead

```jsx
import { Search, ComboBox } from '@carbon/react';
import { useState, useMemo } from 'react';

// Simple search
function SimpleSearch({ onSearch }) {
  return (
    <Search
      id="global-search"
      labelText="Search"
      placeholder="Search templates, docs..."
      onChange={(e) => onSearch(e.target.value)}
      onClear={() => onSearch('')}
      size="lg"
    />
  );
}

// ComboBox with filtering
function TemplateSearch({ templates, onSelect }) {
  const [inputValue, setInputValue] = useState('');
  
  const filteredItems = useMemo(() => {
    if (!inputValue) return templates;
    const lower = inputValue.toLowerCase();
    return templates.filter(t => 
      t.name.toLowerCase().includes(lower) ||
      t.description.toLowerCase().includes(lower)
    );
  }, [templates, inputValue]);
  
  return (
    <ComboBox
      id="template-search"
      titleText="Select Template"
      placeholder="Search templates..."
      items={filteredItems}
      itemToString={(item) => item?.name ?? ''}
      onChange={({ selectedItem }) => onSelect(selectedItem)}
      onInputChange={setInputValue}
      helperText="Type to filter templates"
    />
  );
}
```

### 7.5 Feedback Components

#### 7.5.1 Notifications

```jsx
import {
  InlineNotification,
  ToastNotification,
  ActionableNotification
} from '@carbon/react';
import { createContext, useContext, useState, useCallback } from 'react';

// Notification context for global toasts
const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  
  const addNotification = useCallback((notification) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { ...notification, id }]);
    
    // Auto-dismiss after timeout
    if (notification.timeout !== 0) {
      setTimeout(() => {
        removeNotification(id);
      }, notification.timeout || 5000);
    }
    
    return id;
  }, []);
  
  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);
  
  // Convenience methods
  const notify = {
    success: (title, subtitle) => 
      addNotification({ kind: 'success', title, subtitle }),
    error: (title, subtitle) => 
      addNotification({ kind: 'error', title, subtitle, timeout: 0 }),
    warning: (title, subtitle) => 
      addNotification({ kind: 'warning', title, subtitle }),
    info: (title, subtitle) => 
      addNotification({ kind: 'info', title, subtitle })
  };
  
  return (
    <NotificationContext.Provider value={{ notify, addNotification }}>
      {children}
      
      {/* Toast container */}
      <div className="notification-container" aria-live="polite">
        {notifications.map(notification => (
          <ToastNotification
            key={notification.id}
            kind={notification.kind}
            title={notification.title}
            subtitle={notification.subtitle}
            caption={notification.caption}
            onClose={() => removeNotification(notification.id)}
            onCloseButtonClick={() => removeNotification(notification.id)}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
}

export const useNotification = () => useContext(NotificationContext);

// Inline notification usage
function ConversionStatus({ status, error }) {
  if (status === 'success') {
    return (
      <InlineNotification
        kind="success"
        title="Conversion Complete"
        subtitle="Your PDF has been generated successfully."
        lowContrast
      />
    );
  }
  
  if (status === 'error') {
    return (
      <ActionableNotification
        kind="error"
        title="Conversion Failed"
        subtitle={error.message}
        actionButtonLabel="Retry"
        onActionButtonClick={() => window.location.reload()}
        lowContrast
      />
    );
  }
  
  return null;
}
```

#### 7.5.2 Loading States

```jsx
import {
  Loading,
  InlineLoading,
  SkeletonText,
  SkeletonPlaceholder,
  DataTableSkeleton,
  ProgressBar
} from '@carbon/react';

// Full page loading
function PageLoader() {
  return (
    <div className="page-loader">
      <Loading description="Loading..." withOverlay />
    </div>
  );
}

// Inline loading for buttons
function SubmitButton({ isLoading, onClick }) {
  if (isLoading) {
    return (
      <InlineLoading
        status="active"
        description="Processing..."
      />
    );
  }
  
  return (
    <Button onClick={onClick}>Submit</Button>
  );
}

// Skeleton loading
function ContentSkeleton() {
  return (
    <div className="content-skeleton">
      <SkeletonText heading width="40%" />
      <SkeletonText paragraph lineCount={4} />
      <SkeletonPlaceholder style={{ height: '200px' }} />
    </div>
  );
}

// Progress bar for conversions
function ConversionProgress({ progress, status }) {
  return (
    <ProgressBar
      label="Converting document..."
      helperText={status}
      value={progress}
      max={100}
      size="big"
    />
  );
}

// Data table skeleton
function TableLoader() {
  return (
    <DataTableSkeleton
      columnCount={5}
      rowCount={10}
      showHeader
      showToolbar
    />
  );
}
```

#### 7.5.3 Modal Dialogs

```jsx
import {
  Modal,
  ComposedModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from '@carbon/react';
import { useState } from 'react';

// Simple modal
function ConfirmDeleteModal({ isOpen, onClose, onConfirm, itemName }) {
  return (
    <Modal
      open={isOpen}
      onRequestClose={onClose}
      onRequestSubmit={onConfirm}
      modalHeading="Delete Document"
      modalLabel="Confirm Action"
      primaryButtonText="Delete"
      secondaryButtonText="Cancel"
      danger
    >
      <p>
        Are you sure you want to delete <strong>{itemName}</strong>?
        This action cannot be undone.
      </p>
    </Modal>
  );
}

// Composed modal for complex content
function TemplatePreviewModal({ isOpen, onClose, template }) {
  return (
    <ComposedModal open={isOpen} onClose={onClose} size="lg">
      <ModalHeader
        label={template.category}
        title={template.name}
        closeModal={onClose}
      />
      <ModalBody hasScrollingContent>
        <div className="template-preview">
          <img src={template.preview} alt={template.name} />
          <p>{template.description}</p>
          
          <h4>Features</h4>
          <ul>
            {template.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button kind="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button kind="primary" onClick={() => onSelect(template)}>
          Use Template
        </Button>
      </ModalFooter>
    </ComposedModal>
  );
}

// Modal with form
function CreateDocumentModal({ isOpen, onClose, onCreate }) {
  const [formData, setFormData] = useState({ title: '', template: '' });
  
  const handleSubmit = () => {
    onCreate(formData);
    onClose();
  };
  
  return (
    <ComposedModal open={isOpen} onClose={onClose}>
      <ModalHeader title="Create New Document" />
      <ModalBody>
        <TextInput
          id="doc-title"
          labelText="Document Title"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            title: e.target.value
          }))}
        />
        <Select
          id="doc-template"
          labelText="Template"
          value={formData.template}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            template: e.target.value
          }))}
        >
          <SelectItem value="" text="Choose a template" />
          <SelectItem value="carbon-advanced" text="Carbon Advanced" />
          <SelectItem value="carbon-basic" text="Carbon Basic" />
        </Select>
      </ModalBody>
      <ModalFooter
        primaryButtonText="Create"
        secondaryButtonText="Cancel"
        onRequestSubmit={handleSubmit}
        onRequestClose={onClose}
        primaryButtonDisabled={!formData.title}
      />
    </ComposedModal>
  );
}
```

### 7.6 Data Display Components

#### 7.6.1 Data Table

```jsx
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableContainer,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
  TableToolbarAction,
  TableBatchActions,
  TableBatchAction,
  TableSelectAll,
  TableSelectRow,
  Pagination
} from '@carbon/react';
import { TrashCan, Download, Add } from '@carbon/icons-react';

function DocumentsTable({ documents, onDelete, onDownload }) {
  const headers = [
    { key: 'name', header: 'Name' },
    { key: 'template', header: 'Template' },
    { key: 'created', header: 'Created' },
    { key: 'size', header: 'Size' },
    { key: 'status', header: 'Status' }
  ];
  
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  
  const paginatedDocs = documents.slice(
    (page - 1) * pageSize,
    page * pageSize
  );
  
  return (
    <>
      <DataTable rows={paginatedDocs} headers={headers}>
        {({
          rows,
          headers,
          getHeaderProps,
          getRowProps,
          getSelectionProps,
          getToolbarProps,
          getBatchActionProps,
          selectedRows,
          getTableProps,
          getTableContainerProps
        }) => (
          <TableContainer
            title="Documents"
            description="Your converted PDF documents"
            {...getTableContainerProps()}
          >
            <TableToolbar {...getToolbarProps()}>
              <TableBatchActions {...getBatchActionProps()}>
                <TableBatchAction
                  tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                  renderIcon={TrashCan}
                  onClick={() => onDelete(selectedRows)}
                >
                  Delete
                </TableBatchAction>
                <TableBatchAction
                  tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                  renderIcon={Download}
                  onClick={() => onDownload(selectedRows)}
                >
                  Download
                </TableBatchAction>
              </TableBatchActions>
              
              <TableToolbarContent>
                <TableToolbarSearch
                  onChange={(e) => console.log(e.target.value)}
                  placeholder="Search documents..."
                />
                <TableToolbarMenu>
                  <TableToolbarAction onClick={() => {}}>
                    Export CSV
                  </TableToolbarAction>
                  <TableToolbarAction onClick={() => {}}>
                    Settings
                  </TableToolbarAction>
                </TableToolbarMenu>
                <Button renderIcon={Add} iconDescription="Add">
                  New Document
                </Button>
              </TableToolbarContent>
            </TableToolbar>
            
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  <TableSelectAll {...getSelectionProps()} />
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow {...getRowProps({ row })}>
                    <TableSelectRow {...getSelectionProps({ row })} />
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
      
      <Pagination
        totalItems={documents.length}
        page={page}
        pageSize={pageSize}
        pageSizes={[10, 20, 50, 100]}
        onChange={({ page, pageSize }) => {
          setPage(page);
          setPageSize(pageSize);
        }}
      />
    </>
  );
}
```

#### 7.6.2 Tiles & Cards

```jsx
import {
  Tile,
  ClickableTile,
  SelectableTile,
  ExpandableTile,
  TileAboveTheFoldContent,
  TileBelowTheFoldContent
} from '@carbon/react';

function TemplateGallery({ templates }) {
  const [selected, setSelected] = useState(null);
  
  return (
    <Grid>
      {templates.map(template => (
        <Column key={template.id} sm={4} md={4} lg={4}>
          {/* Selectable tile for selection */}
          <SelectableTile
            id={template.id}
            name="template"
            value={template.id}
            selected={selected === template.id}
            onChange={() => setSelected(template.id)}
          >
            <div className="template-tile">
              <img src={template.thumbnail} alt={template.name} />
              <h4>{template.name}</h4>
              <p>{template.description}</p>
            </div>
          </SelectableTile>
        </Column>
      ))}
    </Grid>
  );
}

// Expandable tile for details
function FeatureCard({ feature }) {
  return (
    <ExpandableTile
      tileCollapsedIconText="Expand"
      tileExpandedIconText="Collapse"
    >
      <TileAboveTheFoldContent>
        <h4>{feature.title}</h4>
        <p>{feature.summary}</p>
      </TileAboveTheFoldContent>
      <TileBelowTheFoldContent>
        <p>{feature.details}</p>
        <ul>
          {feature.benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </TileBelowTheFoldContent>
    </ExpandableTile>
  );
}
```

### 7.7 Custom Hooks for Carbon

```jsx
// hooks/useCarbon.js

import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Hook for managing modal state
 */
export function useModal(initialOpen = false) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);
  
  return { isOpen, open, close, toggle, setIsOpen };
}

/**
 * Hook for managing side panel state
 */
export function useSidePanel() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  
  const openPanel = useCallback((panelId) => {
    setActivePanel(panelId);
    setIsExpanded(true);
  }, []);
  
  const closePanel = useCallback(() => {
    setIsExpanded(false);
    // Delay clearing panel for exit animation
    setTimeout(() => setActivePanel(null), 300);
  }, []);
  
  return { isExpanded, activePanel, openPanel, closePanel };
}

/**
 * Hook for form validation
 */
export function useFormValidation(initialValues, validationRules) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  
  const validate = useCallback(() => {
    const newErrors = {};
    
    Object.keys(validationRules).forEach(field => {
      const rules = validationRules[field];
      const value = values[field];
      
      if (rules.required && !value) {
        newErrors[field] = rules.requiredMessage || 'This field is required';
      } else if (rules.pattern && !rules.pattern.test(value)) {
        newErrors[field] = rules.patternMessage || 'Invalid format';
      } else if (rules.minLength && value.length < rules.minLength) {
        newErrors[field] = `Minimum ${rules.minLength} characters`;
      } else if (rules.custom) {
        const error = rules.custom(value, values);
        if (error) newErrors[field] = error;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [values, validationRules]);
  
  const handleChange = useCallback((field) => (e) => {
    const value = e.target?.value ?? e;
    setValues(prev => ({ ...prev, [field]: value }));
  }, []);
  
  const handleBlur = useCallback((field) => () => {
    setTouched(prev => ({ ...prev, [field]: true }));
  }, []);
  
  const getFieldProps = useCallback((field) => ({
    id: field,
    value: values[field],
    onChange: handleChange(field),
    onBlur: handleBlur(field),
    invalid: touched[field] && !!errors[field],
    invalidText: errors[field]
  }), [values, errors, touched, handleChange, handleBlur]);
  
  return {
    values,
    errors,
    touched,
    validate,
    handleChange,
    handleBlur,
    getFieldProps,
    setValues,
    reset: () => {
      setValues(initialValues);
      setErrors({});
      setTouched({});
    }
  };
}

/**
 * Hook for infinite scroll / pagination
 */
export function usePagination(items, pageSize = 10) {
  const [page, setPage] = useState(1);
  
  const totalPages = Math.ceil(items.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedItems = items.slice(startIndex, endIndex);
  
  const goToPage = useCallback((newPage) => {
    setPage(Math.max(1, Math.min(newPage, totalPages)));
  }, [totalPages]);
  
  const nextPage = useCallback(() => goToPage(page + 1), [page, goToPage]);
  const prevPage = useCallback(() => goToPage(page - 1), [page, goToPage]);
  
  return {
    page,
    pageSize,
    totalPages,
    totalItems: items.length,
    paginatedItems,
    goToPage,
    nextPage,
    prevPage,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1
  };
}

/**
 * Hook for keyboard navigation in lists
 */
export function useKeyboardNavigation(items, onSelect) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex(prev => Math.min(prev + 1, items.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex(prev => Math.max(prev - 1, 0));
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          onSelect?.(items[activeIndex], activeIndex);
          break;
        case 'Home':
          e.preventDefault();
          setActiveIndex(0);
          break;
        case 'End':
          e.preventDefault();
          setActiveIndex(items.length - 1);
          break;
      }
    };
    
    const container = containerRef.current;
    container?.addEventListener('keydown', handleKeyDown);
    return () => container?.removeEventListener('keydown', handleKeyDown);
  }, [items, activeIndex, onSelect]);
  
  return { activeIndex, setActiveIndex, containerRef };
}
```

### 7.8 Component Best Practices Özeti

```
┌─────────────────────────────────────────────────────────────────┐
│            REACT + CARBON BEST PRACTICES                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  STRUCTURE                                                      │
│  ──────────────────────────────────────────────────────────     │
│  • ThemeProvider uygulama kökünde                               │
│  • Carbon SCSS ilk import                                       │
│  • Nested Theme zones for contrast                              │
│  • Grid > Flexbox for layouts                                   │
│                                                                 │
│  FORMS                                                          │
│  ──────────────────────────────────────────────────────────     │
│  • FormGroup for logical sections                               │
│  • Controlled components                                        │
│  • Real-time validation                                         │
│  • invalidText for error messages                               │
│  • helperText for guidance                                      │
│                                                                 │
│  FEEDBACK                                                       │
│  ──────────────────────────────────────────────────────────     │
│  • InlineNotification for form errors                           │
│  • ToastNotification for global feedback                        │
│  • InlineLoading for buttons                                    │
│  • Skeleton for content loading                                 │
│  • ProgressBar for long operations                              │
│                                                                 │
│  ACCESSIBILITY                                                  │
│  ──────────────────────────────────────────────────────────     │
│  • aria-label on all interactive elements                       │
│  • labelText on form inputs                                     │
│  • Keyboard navigation support                                  │
│  • Focus management in modals                                   │
│  • Skip links in navigation                                     │
│                                                                 │
│  PERFORMANCE                                                    │
│  ──────────────────────────────────────────────────────────     │
│  • Lazy load heavy components                                   │
│  • Memoize callbacks (useCallback)                              │
│  • Memoize computed values (useMemo)                            │
│  • Pagination for large lists                                   │
│  • Virtualize very long lists                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 8. Web Accessibility (WCAG)

IBM Carbon Design System, **WCAG 2.1 AA** standartlarına tam uyumlu olarak tasarlanmıştır. Carbonac, bu erişilebilirlik standartlarını web uygulamasında eksiksiz uygular.

### 8.1 Erişilebilirlik Prensipleri (POUR)

```
WCAG 2.1 FOUR PRINCIPLES
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   P  ───▶  PERCEIVABLE (Algılanabilir)                         │
│            İçerik tüm duyularla algılanabilmeli                │
│            • Alt text for images                                │
│            • Captions for video                                 │
│            • Sufficient color contrast                          │
│            • Resizable text                                     │
│                                                                 │
│   O  ───▶  OPERABLE (İşletilebilir)                            │
│            Tüm işlevler klavye ile kullanılabilmeli            │
│            • Keyboard navigation                                │
│            • No keyboard traps                                  │
│            • Sufficient time                                    │
│            • Seizure-safe content                               │
│                                                                 │
│   U  ───▶  UNDERSTANDABLE (Anlaşılabilir)                      │
│            İçerik ve işlevler anlaşılır olmalı                 │
│            • Clear language                                     │
│            • Predictable navigation                             │
│            • Error identification                               │
│            • Labels and instructions                            │
│                                                                 │
│   R  ───▶  ROBUST (Sağlam)                                     │
│            Farklı teknolojilerle uyumlu olmalı                 │
│            • Valid HTML                                         │
│            • ARIA when needed                                   │
│            • Compatible with assistive tech                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 8.2 Renk Kontrast Gereksinimleri

Carbon, WCAG AA kontrast gereksinimlerini karşılar:
- **Normal text**: Minimum 4.5:1 kontrast oranı
- **Large text (18pt+ veya 14pt bold)**: Minimum 3:1 kontrast oranı
- **UI components & graphics**: Minimum 3:1 kontrast oranı

#### 8.2.1 Carbon Renk Kontrast Değerleri

```
COLOR CONTRAST RATIOS
════════════════════════════════════════════════════════════════

WHITE THEME (Background: #ffffff)
─────────────────────────────────────────────────────────────────
Text Primary   │ #161616 │ 17.4:1 │ ✅ AAA
Text Secondary │ #525252 │  7.0:1 │ ✅ AA
Text Helper    │ #6f6f6f │  5.0:1 │ ✅ AA (large text only)
Link Primary   │ #0f62fe │  4.6:1 │ ✅ AA
Error          │ #da1e28 │  5.9:1 │ ✅ AA
Success        │ #198038 │  4.5:1 │ ✅ AA
Warning        │ #f1c21b │  1.5:1 │ ⚠️ Use with dark text

G100 THEME (Background: #161616)
─────────────────────────────────────────────────────────────────
Text Primary   │ #f4f4f4 │ 15.1:1 │ ✅ AAA
Text Secondary │ #c6c6c6 │ 10.1:1 │ ✅ AAA
Text Helper    │ #8d8d8d │  5.5:1 │ ✅ AA
Link Primary   │ #78a9ff │  7.1:1 │ ✅ AA
Error          │ #ff8389 │  6.1:1 │ ✅ AA
Success        │ #42be65 │  6.7:1 │ ✅ AA
```

#### 8.2.2 Kontrast Kontrolü

```jsx
/**
 * Calculate relative luminance
 * @param {number} r - Red (0-255)
 * @param {number} g - Green (0-255)
 * @param {number} b - Blue (0-255)
 * @returns {number} Relative luminance (0-1)
 */
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 * @param {string} color1 - Hex color
 * @param {string} color2 - Hex color
 * @returns {number} Contrast ratio
 */
function getContrastRatio(color1, color2) {
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : null;
  };
  
  const [r1, g1, b1] = hexToRgb(color1);
  const [r2, g2, b2] = hexToRgb(color2);
  
  const l1 = getLuminance(r1, g1, b1);
  const l2 = getLuminance(r2, g2, b2);
  
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check if contrast meets WCAG requirements
 */
function meetsWCAG(foreground, background, level = 'AA', isLargeText = false) {
  const ratio = getContrastRatio(foreground, background);
  
  if (level === 'AAA') {
    return isLargeText ? ratio >= 4.5 : ratio >= 7;
  }
  // AA
  return isLargeText ? ratio >= 3 : ratio >= 4.5;
}

// Usage
console.log(getContrastRatio('#161616', '#ffffff')); // 17.4
console.log(meetsWCAG('#0f62fe', '#ffffff', 'AA')); // true
```

### 8.3 Klavye Navigasyonu

Tüm interaktif öğeler klavye ile erişilebilir olmalıdır.

#### 8.3.1 Focus Management

```jsx
import { useRef, useEffect } from 'react';

/**
 * Hook for managing focus within a component
 */
function useFocusManagement() {
  const containerRef = useRef(null);
  
  // Get all focusable elements
  const getFocusableElements = () => {
    if (!containerRef.current) return [];
    
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ].join(', ');
    
    return Array.from(
      containerRef.current.querySelectorAll(focusableSelectors)
    );
  };
  
  // Focus first element
  const focusFirst = () => {
    const elements = getFocusableElements();
    elements[0]?.focus();
  };
  
  // Focus last element
  const focusLast = () => {
    const elements = getFocusableElements();
    elements[elements.length - 1]?.focus();
  };
  
  // Trap focus within container
  const trapFocus = (e) => {
    const elements = getFocusableElements();
    const firstElement = elements[0];
    const lastElement = elements[elements.length - 1];
    
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }
  };
  
  return {
    containerRef,
    focusFirst,
    focusLast,
    trapFocus,
    getFocusableElements
  };
}

// Modal with focus trap
function AccessibleModal({ isOpen, onClose, children, title }) {
  const { containerRef, focusFirst, trapFocus } = useFocusManagement();
  const previousFocus = useRef(null);
  
  useEffect(() => {
    if (isOpen) {
      // Save current focus
      previousFocus.current = document.activeElement;
      // Focus first element in modal
      setTimeout(focusFirst, 0);
    } else {
      // Restore focus when closing
      previousFocus.current?.focus();
    }
  }, [isOpen]);
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={containerRef}
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={e => e.stopPropagation()}
        onKeyDown={trapFocus}
      >
        <h2 id="modal-title">{title}</h2>
        {children}
        <button onClick={onClose} aria-label="Close modal">
          ×
        </button>
      </div>
    </div>
  );
}
```

#### 8.3.2 Skip Links

```jsx
// Skip to main content link
function SkipLink() {
  return (
    <a 
      href="#main-content" 
      className="skip-link"
    >
      Skip to main content
    </a>
  );
}
```

```scss
// Skip link styles
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  z-index: 10000;
  padding: 8px 16px;
  background: var(--cds-background-brand);
  color: var(--cds-text-on-color);
  text-decoration: none;
  
  // Show on focus
  &:focus {
    top: 0;
    outline: 2px solid var(--cds-focus);
    outline-offset: 2px;
  }
}
```

#### 8.3.3 Keyboard Shortcuts

```jsx
import { useEffect, useCallback } from 'react';

/**
 * Hook for keyboard shortcuts
 */
function useKeyboardShortcuts(shortcuts) {
  const handleKeyDown = useCallback((e) => {
    // Don't trigger in input fields
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
      return;
    }
    
    const key = [
      e.ctrlKey && 'ctrl',
      e.altKey && 'alt',
      e.shiftKey && 'shift',
      e.key.toLowerCase()
    ].filter(Boolean).join('+');
    
    const shortcut = shortcuts[key];
    if (shortcut) {
      e.preventDefault();
      shortcut();
    }
  }, [shortcuts]);
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}

// Usage
function App() {
  const navigate = useNavigate();
  
  useKeyboardShortcuts({
    '/': () => document.querySelector('#search')?.focus(),
    'g+h': () => navigate('/'),
    'g+d': () => navigate('/dashboard'),
    '?': () => setShowShortcutsModal(true),
    'escape': () => closeAllModals()
  });
  
  return <div>...</div>;
}
```

### 8.4 ARIA Attributes

ARIA (Accessible Rich Internet Applications), karmaşık UI component'lerini erişilebilir kılar.

#### 8.4.1 ARIA Rolleri

```
ARIA ROLES REFERENCE
════════════════════════════════════════════════════════════════

LANDMARK ROLES (Sayfa yapısı)
─────────────────────────────────────────────────────────────────
role="banner"        │ Site header (sadece 1 tane)
role="navigation"    │ Navigation sections
role="main"          │ Main content (sadece 1 tane)
role="complementary" │ Supporting content (aside)
role="contentinfo"   │ Site footer (sadece 1 tane)
role="search"        │ Search functionality
role="region"        │ Generic landmark (aria-label gerekli)

WIDGET ROLES (Interaktif öğeler)
─────────────────────────────────────────────────────────────────
role="button"        │ Clickable button
role="link"          │ Navigation link
role="checkbox"      │ Toggle option
role="radio"         │ Single selection from group
role="combobox"      │ Input with popup
role="listbox"       │ List of options
role="menu"          │ Menu of actions
role="menuitem"      │ Item in menu
role="tab"           │ Tab in tablist
role="tabpanel"      │ Content for tab
role="dialog"        │ Dialog window
role="alertdialog"   │ Alert requiring response
role="tooltip"       │ Contextual popup
role="progressbar"   │ Progress indicator
role="slider"        │ Value selector

STRUCTURE ROLES (İçerik yapısı)
─────────────────────────────────────────────────────────────────
role="list"          │ List container
role="listitem"      │ Item in list
role="table"         │ Data table
role="row"           │ Table row
role="cell"          │ Table cell
role="heading"       │ Section heading
role="img"           │ Image (with aria-label)
role="article"       │ Self-contained content
role="group"         │ Related elements
```

#### 8.4.2 ARIA States & Properties

```jsx
// Accordion component with ARIA
function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isExpanded = expandedIndex === index;
        const headerId = `accordion-header-${index}`;
        const panelId = `accordion-panel-${index}`;
        
        return (
          <div key={index} className="accordion-item">
            <h3>
              <button
                id={headerId}
                className="accordion-trigger"
                aria-expanded={isExpanded}
                aria-controls={panelId}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <span>{item.title}</span>
                <ChevronDown 
                  aria-hidden="true"
                  className={isExpanded ? 'rotated' : ''}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isExpanded}
              className="accordion-panel"
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Tabs with ARIA
function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div className="tabs">
      <div 
        role="tablist" 
        aria-label="Content tabs"
        className="tab-list"
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            id={`tab-${index}`}
            aria-selected={activeTab === index}
            aria-controls={`panel-${index}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') {
                setActiveTab((activeTab + 1) % tabs.length);
              } else if (e.key === 'ArrowLeft') {
                setActiveTab((activeTab - 1 + tabs.length) % tabs.length);
              }
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {tabs.map((tab, index) => (
        <div
          key={index}
          role="tabpanel"
          id={`panel-${index}`}
          aria-labelledby={`tab-${index}`}
          hidden={activeTab !== index}
          tabIndex={0}
          className="tab-panel"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}

// Alert with live region
function Alert({ type, message }) {
  return (
    <div
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      className={`alert alert--${type}`}
    >
      {message}
    </div>
  );
}

// Status updates (less urgent)
function StatusMessage({ message }) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="status-message"
    >
      {message}
    </div>
  );
}
```

#### 8.4.3 Form Accessibility

```jsx
function AccessibleForm() {
  const [errors, setErrors] = useState({});
  
  return (
    <form aria-describedby="form-instructions">
      <p id="form-instructions" className="visually-hidden">
        All fields marked with asterisk are required
      </p>
      
      {/* Text input with error */}
      <div className="form-field">
        <label htmlFor="email">
          Email Address <span aria-hidden="true">*</span>
          <span className="visually-hidden">(required)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : 'email-hint'}
        />
        <span id="email-hint" className="hint">
          We'll never share your email
        </span>
        {errors.email && (
          <span id="email-error" className="error" role="alert">
            {errors.email}
          </span>
        )}
      </div>
      
      {/* Password with requirements */}
      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          aria-required="true"
          aria-describedby="password-requirements"
          minLength={8}
        />
        <ul id="password-requirements" className="requirements">
          <li>At least 8 characters</li>
          <li>One uppercase letter</li>
          <li>One number</li>
        </ul>
      </div>
      
      {/* Checkbox group */}
      <fieldset>
        <legend>Notification Preferences</legend>
        
        <div className="checkbox-group" role="group">
          <label>
            <input type="checkbox" name="email-notify" />
            Email notifications
          </label>
          <label>
            <input type="checkbox" name="sms-notify" />
            SMS notifications
          </label>
        </div>
      </fieldset>
      
      {/* Radio group */}
      <fieldset>
        <legend>Select Template</legend>
        
        <div 
          role="radiogroup" 
          aria-required="true"
        >
          <label>
            <input type="radio" name="template" value="basic" />
            Basic Template
          </label>
          <label>
            <input type="radio" name="template" value="advanced" />
            Advanced Template
          </label>
        </div>
      </fieldset>
      
      <button type="submit">
        Submit
      </button>
    </form>
  );
}
```

### 8.5 Reduced Motion

Bazı kullanıcılar hareket hassasiyetine sahiptir. `prefers-reduced-motion` media query'si ile animasyonları azaltın.

#### 8.5.1 CSS Reduced Motion

```scss
// Reduced motion mixin
@mixin reduced-motion {
  @media (prefers-reduced-motion: reduce) {
    @content;
  }
}

// Apply to all transitions/animations
.carbonac-animated {
  transition: transform 300ms ease, opacity 200ms ease;
  
  @include reduced-motion {
    // Remove motion-based transitions
    transition: opacity 200ms ease;
    // Or disable completely
    transition: none;
    animation: none;
  }
}

// Global reduced motion styles
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

// Allow essential animations
.essential-animation {
  // Loading spinners, progress bars
  @include reduced-motion {
    // Keep but simplify
    animation-duration: 1.5s;
    animation-timing-function: linear;
  }
}
```

#### 8.5.2 React Reduced Motion Hook

```jsx
import { useState, useEffect } from 'react';

/**
 * Hook to detect user's motion preference
 */
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  return prefersReducedMotion;
}

// Usage in component
function AnimatedComponent() {
  const prefersReducedMotion = usePrefersReducedMotion();
  
  const variants = prefersReducedMotion
    ? {
        // Instant transitions
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }
    : {
        // Full animations
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.3, ease: 'easeOut' }
        }
      };
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      Content
    </motion.div>
  );
}

// Conditional animation wrapper
function SafeAnimation({ children, animation }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  
  if (prefersReducedMotion) {
    return <>{children}</>;
  }
  
  return (
    <motion.div {...animation}>
      {children}
    </motion.div>
  );
}
```

### 8.6 Screen Reader Support

#### 8.6.1 Visually Hidden Content

```scss
// Visually hidden but accessible to screen readers
.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

// Allow focus for skip links
.visually-hidden:focus {
  position: static !important;
  width: auto !important;
  height: auto !important;
  padding: inherit !important;
  margin: inherit !important;
  overflow: visible !important;
  clip: auto !important;
  white-space: inherit !important;
}
```

#### 8.6.2 Icon Buttons

```jsx
// Icon button with accessible label
function IconButton({ icon: Icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="icon-button"
    >
      <Icon aria-hidden="true" />
    </button>
  );
}

// Icon with visible text
function ButtonWithIcon({ icon: Icon, children, onClick }) {
  return (
    <button onClick={onClick} className="button-with-icon">
      <Icon aria-hidden="true" />
      <span>{children}</span>
    </button>
  );
}

// Decorative vs informative icons
function StatusIndicator({ status }) {
  if (status === 'success') {
    return (
      <span className="status success">
        {/* Decorative - info is in text */}
        <CheckmarkFilled aria-hidden="true" />
        <span>Completed</span>
      </span>
    );
  }
  
  // Icon-only indicator needs text alternative
  return (
    <span 
      className="status error"
      role="img"
      aria-label="Error: Conversion failed"
    >
      <ErrorFilled aria-hidden="true" />
      <span className="visually-hidden">Error: Conversion failed</span>
    </span>
  );
}
```

#### 8.6.3 Dynamic Content Updates

```jsx
import { useRef, useEffect } from 'react';

/**
 * Announce message to screen readers
 */
function useAnnounce() {
  const announceRef = useRef(null);
  
  useEffect(() => {
    // Create announcer element
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'visually-hidden';
    document.body.appendChild(announcer);
    announceRef.current = announcer;
    
    return () => {
      document.body.removeChild(announcer);
    };
  }, []);
  
  const announce = (message, priority = 'polite') => {
    if (!announceRef.current) return;
    
    announceRef.current.setAttribute('aria-live', priority);
    
    // Clear and set to trigger announcement
    announceRef.current.textContent = '';
    requestAnimationFrame(() => {
      announceRef.current.textContent = message;
    });
  };
  
  return announce;
}

// Usage
function FileUploader() {
  const announce = useAnnounce();
  
  const handleUpload = async (file) => {
    announce('Uploading file...');
    
    try {
      await uploadFile(file);
      announce('File uploaded successfully', 'assertive');
    } catch (error) {
      announce(`Upload failed: ${error.message}`, 'assertive');
    }
  };
  
  return <input type="file" onChange={e => handleUpload(e.target.files[0])} />;
}
```

### 8.7 Accessibility Testing

#### 8.7.1 Automated Testing Tools

```javascript
// Jest + axe-core for automated a11y testing
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Accessibility Tests', () => {
  it('Button should have no accessibility violations', async () => {
    const { container } = render(
      <Button onClick={() => {}}>Click me</Button>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  
  it('Form should have proper labels', async () => {
    const { container } = render(<LoginForm />);
    
    const results = await axe(container, {
      rules: {
        // Enable specific rules
        'label': { enabled: true },
        'aria-required-attr': { enabled: true }
      }
    });
    
    expect(results).toHaveNoViolations();
  });
});
```

#### 8.7.2 Manual Testing Checklist

```
ACCESSIBILITY TESTING CHECKLIST
════════════════════════════════════════════════════════════════

KEYBOARD NAVIGATION
─────────────────────────────────────────────────────────────────
□ Tab navigates to all interactive elements
□ Shift+Tab reverses navigation
□ Enter/Space activates buttons and links
□ Arrow keys work in menus, tabs, sliders
□ Escape closes modals and dropdowns
□ Focus is visible at all times
□ Focus order matches visual order
□ No keyboard traps

SCREEN READER
─────────────────────────────────────────────────────────────────
□ Page has meaningful title
□ Headings are properly nested (h1 → h2 → h3)
□ Images have alt text
□ Links have descriptive text (not "click here")
□ Form inputs have labels
□ Error messages are announced
□ Dynamic content updates are announced
□ ARIA roles are used correctly

VISUAL
─────────────────────────────────────────────────────────────────
□ Text can be resized to 200% without loss
□ Color is not the only indicator
□ Contrast ratio meets requirements
□ Focus indicator is clearly visible
□ Content is readable in high contrast mode

MOTION
─────────────────────────────────────────────────────────────────
□ Animations respect prefers-reduced-motion
□ No auto-playing video with sound
□ User can pause/stop animations
□ No content flashes more than 3 times/second

TOOLS TO USE
─────────────────────────────────────────────────────────────────
• WAVE browser extension
• axe DevTools
• Lighthouse accessibility audit
• NVDA / VoiceOver screen reader
• Colour Contrast Analyser
• Keyboard-only navigation test
```

### 8.8 Accessibility Best Practices Özeti

```
┌─────────────────────────────────────────────────────────────────┐
│              ACCESSIBILITY BEST PRACTICES                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SEMANTIC HTML                                                  │
│  ──────────────────────────────────────────────────────────     │
│  • <button> for actions, <a> for navigation                    │
│  • <nav>, <main>, <aside>, <header>, <footer>                  │
│  • Proper heading hierarchy                                     │
│  • <label> for form inputs                                      │
│  • <fieldset>/<legend> for form groups                         │
│                                                                 │
│  ARIA USAGE                                                     │
│  ──────────────────────────────────────────────────────────     │
│  • First rule: Don't use ARIA if HTML works                    │
│  • Always test with screen reader                               │
│  • aria-label for icon buttons                                  │
│  • aria-live for dynamic content                                │
│  • aria-expanded for collapsible elements                       │
│  • aria-describedby for hints/errors                            │
│                                                                 │
│  FOCUS MANAGEMENT                                               │
│  ──────────────────────────────────────────────────────────     │
│  • Visible focus indicator (min 2px)                            │
│  • Focus trap in modals                                         │
│  • Return focus after modal close                               │
│  • Skip links for main content                                  │
│  • tabindex="0" for custom focusable elements                  │
│  • tabindex="-1" to remove from tab order                      │
│                                                                 │
│  MOTION & ANIMATION                                             │
│  ──────────────────────────────────────────────────────────     │
│  • Respect prefers-reduced-motion                               │
│  • Provide pause/stop controls                                  │
│  • Avoid rapid flashing (3Hz limit)                             │
│  • Essential animations remain functional                       │
│                                                                 │
│  TESTING                                                        │
│  ──────────────────────────────────────────────────────────     │
│  • Automated: axe, Lighthouse, WAVE                             │
│  • Manual: Keyboard navigation                                  │
│  • Screen reader: NVDA, VoiceOver                              │
│  • Real users with disabilities                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 9. Theming & Dark Mode

IBM Carbon, 4 farklı tema modu sunar. Carbonac, bu tema sistemini tam olarak uygular ve kullanıcı tercihlerine göre dinamik tema değişimi sağlar.

### 9.1 Carbon Theme Modes

```
CARBON THEME MODES
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│  WHITE THEME                                                    │
│  ───────────────────────────────────────────────────────────    │
│  Background: #ffffff                                            │
│  Text: #161616                                                  │
│  Usage: Default light theme, maximum readability                │
│  Best for: Document editing, reading, general use               │
│                                                                 │
│  ┌─────────────────────────────────────┐                       │
│  │  ████████████████████████████████   │  ← White bg           │
│  │  ██ Dark text on white ██████████   │                       │
│  │  ████████████████████████████████   │                       │
│  └─────────────────────────────────────┘                       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  G10 THEME (Gray 10)                                            │
│  ───────────────────────────────────────────────────────────    │
│  Background: #f4f4f4                                            │
│  Text: #161616                                                  │
│  Usage: Subtle distinction, less stark than white               │
│  Best for: Cards/tiles on white, secondary areas                │
│                                                                 │
│  ┌─────────────────────────────────────┐                       │
│  │  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   │  ← Light gray bg      │
│  │  ▒▒ Dark text on gray 10 ▒▒▒▒▒▒▒▒   │                       │
│  │  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   │                       │
│  └─────────────────────────────────────┘                       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  G90 THEME (Gray 90)                                            │
│  ───────────────────────────────────────────────────────────    │
│  Background: #262626                                            │
│  Text: #f4f4f4                                                  │
│  Usage: Dark theme with subtle contrast                         │
│  Best for: Panels within G100, less intense dark                │
│                                                                 │
│  ┌─────────────────────────────────────┐                       │
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │  ← Dark gray bg       │
│  │  ▓▓ Light text on gray 90 ▓▓▓▓▓▓▓   │                       │
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │                       │
│  └─────────────────────────────────────┘                       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  G100 THEME (Gray 100)                                          │
│  ───────────────────────────────────────────────────────────    │
│  Background: #161616                                            │
│  Text: #f4f4f4                                                  │
│  Usage: Full dark mode, maximum contrast                        │
│  Best for: Night mode, reduced eye strain, OLED displays        │
│                                                                 │
│  ┌─────────────────────────────────────┐                       │
│  │  ████████████████████████████████   │  ← Near-black bg      │
│  │  ██ Light text on gray 100 ██████   │                       │
│  │  ████████████████████████████████   │                       │
│  └─────────────────────────────────────┘                       │
└─────────────────────────────────────────────────────────────────┘
```

### 9.2 CSS Custom Properties

Carbon, tüm tema değerlerini CSS custom properties olarak expose eder.

#### 9.2.1 Core Theme Tokens

```scss
// Theme-aware CSS custom properties
:root,
[data-carbon-theme="white"] {
  // Backgrounds
  --cds-background: #ffffff;
  --cds-background-hover: rgba(141, 141, 141, 0.12);
  --cds-background-active: rgba(141, 141, 141, 0.5);
  --cds-background-selected: rgba(141, 141, 141, 0.2);
  --cds-background-selected-hover: rgba(141, 141, 141, 0.32);
  --cds-background-inverse: #393939;
  --cds-background-inverse-hover: #474747;
  --cds-background-brand: #0f62fe;
  
  // Layers (for component backgrounds)
  --cds-layer-01: #f4f4f4;
  --cds-layer-02: #ffffff;
  --cds-layer-03: #f4f4f4;
  --cds-layer-hover-01: #e8e8e8;
  --cds-layer-hover-02: #e8e8e8;
  --cds-layer-hover-03: #e8e8e8;
  --cds-layer-active-01: #c6c6c6;
  --cds-layer-active-02: #c6c6c6;
  --cds-layer-active-03: #c6c6c6;
  --cds-layer-selected-01: #e0e0e0;
  --cds-layer-selected-02: #e0e0e0;
  --cds-layer-selected-03: #e0e0e0;
  
  // Text colors
  --cds-text-primary: #161616;
  --cds-text-secondary: #525252;
  --cds-text-placeholder: #a8a8a8;
  --cds-text-helper: #6f6f6f;
  --cds-text-error: #da1e28;
  --cds-text-inverse: #ffffff;
  --cds-text-on-color: #ffffff;
  --cds-text-on-color-disabled: #8d8d8d;
  --cds-text-disabled: rgba(22, 22, 22, 0.25);
  
  // Link colors
  --cds-link-primary: #0f62fe;
  --cds-link-primary-hover: #0043ce;
  --cds-link-secondary: #0043ce;
  --cds-link-inverse: #78a9ff;
  --cds-link-visited: #8a3ffc;
  
  // Icon colors
  --cds-icon-primary: #161616;
  --cds-icon-secondary: #525252;
  --cds-icon-inverse: #ffffff;
  --cds-icon-on-color: #ffffff;
  --cds-icon-on-color-disabled: #8d8d8d;
  --cds-icon-disabled: rgba(22, 22, 22, 0.25);
  
  // Border colors
  --cds-border-subtle-00: #e0e0e0;
  --cds-border-subtle-01: #e0e0e0;
  --cds-border-subtle-02: #c6c6c6;
  --cds-border-subtle-03: #e0e0e0;
  --cds-border-strong-01: #8d8d8d;
  --cds-border-strong-02: #8d8d8d;
  --cds-border-strong-03: #8d8d8d;
  --cds-border-inverse: #161616;
  --cds-border-interactive: #0f62fe;
  --cds-border-disabled: rgba(22, 22, 22, 0.25);
  
  // Support colors
  --cds-support-error: #da1e28;
  --cds-support-error-inverse: #fa4d56;
  --cds-support-success: #198038;
  --cds-support-success-inverse: #42be65;
  --cds-support-warning: #f1c21b;
  --cds-support-warning-inverse: #f1c21b;
  --cds-support-info: #0043ce;
  --cds-support-info-inverse: #4589ff;
  
  // Focus
  --cds-focus: #0f62fe;
  --cds-focus-inset: #ffffff;
  --cds-focus-inverse: #ffffff;
  
  // Interactive colors
  --cds-interactive: #0f62fe;
  --cds-highlight: #d0e2ff;
  --cds-toggle-off: #8d8d8d;
  
  // Skeleton/loading
  --cds-skeleton-background: #e8e8e8;
  --cds-skeleton-element: #c6c6c6;
  
  // Overlay
  --cds-overlay: rgba(22, 22, 22, 0.5);
}

// G100 Dark Theme
[data-carbon-theme="g100"] {
  --cds-background: #161616;
  --cds-background-hover: rgba(141, 141, 141, 0.16);
  --cds-background-active: rgba(141, 141, 141, 0.4);
  --cds-background-selected: rgba(141, 141, 141, 0.24);
  --cds-background-selected-hover: rgba(141, 141, 141, 0.32);
  --cds-background-inverse: #f4f4f4;
  --cds-background-inverse-hover: #e8e8e8;
  --cds-background-brand: #0f62fe;
  
  --cds-layer-01: #262626;
  --cds-layer-02: #393939;
  --cds-layer-03: #525252;
  --cds-layer-hover-01: #353535;
  --cds-layer-hover-02: #474747;
  --cds-layer-hover-03: #636363;
  --cds-layer-active-01: #525252;
  --cds-layer-active-02: #6f6f6f;
  --cds-layer-active-03: #8d8d8d;
  --cds-layer-selected-01: #393939;
  --cds-layer-selected-02: #525252;
  --cds-layer-selected-03: #6f6f6f;
  
  --cds-text-primary: #f4f4f4;
  --cds-text-secondary: #c6c6c6;
  --cds-text-placeholder: #6f6f6f;
  --cds-text-helper: #8d8d8d;
  --cds-text-error: #ff8389;
  --cds-text-inverse: #161616;
  --cds-text-on-color: #ffffff;
  --cds-text-on-color-disabled: rgba(255, 255, 255, 0.25);
  --cds-text-disabled: rgba(244, 244, 244, 0.25);
  
  --cds-link-primary: #78a9ff;
  --cds-link-primary-hover: #a6c8ff;
  --cds-link-secondary: #a6c8ff;
  --cds-link-inverse: #0f62fe;
  --cds-link-visited: #be95ff;
  
  --cds-icon-primary: #f4f4f4;
  --cds-icon-secondary: #c6c6c6;
  --cds-icon-inverse: #161616;
  --cds-icon-on-color: #ffffff;
  --cds-icon-on-color-disabled: rgba(255, 255, 255, 0.25);
  --cds-icon-disabled: rgba(244, 244, 244, 0.25);
  
  --cds-border-subtle-00: #393939;
  --cds-border-subtle-01: #393939;
  --cds-border-subtle-02: #525252;
  --cds-border-subtle-03: #393939;
  --cds-border-strong-01: #6f6f6f;
  --cds-border-strong-02: #8d8d8d;
  --cds-border-strong-03: #a8a8a8;
  --cds-border-inverse: #f4f4f4;
  --cds-border-interactive: #4589ff;
  --cds-border-disabled: rgba(244, 244, 244, 0.25);
  
  --cds-support-error: #ff8389;
  --cds-support-error-inverse: #da1e28;
  --cds-support-success: #42be65;
  --cds-support-success-inverse: #198038;
  --cds-support-warning: #f1c21b;
  --cds-support-warning-inverse: #f1c21b;
  --cds-support-info: #4589ff;
  --cds-support-info-inverse: #0043ce;
  
  --cds-focus: #ffffff;
  --cds-focus-inset: #161616;
  --cds-focus-inverse: #0f62fe;
  
  --cds-interactive: #4589ff;
  --cds-highlight: #002d9c;
  --cds-toggle-off: #6f6f6f;
  
  --cds-skeleton-background: #353535;
  --cds-skeleton-element: #525252;
  
  --cds-overlay: rgba(0, 0, 0, 0.65);
}
```

### 9.3 Theme Context Implementation

```jsx
// src/contexts/ThemeContext.jsx
import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Theme } from '@carbon/react';

const ThemeContext = createContext(null);

const THEME_STORAGE_KEY = 'carbonac-theme';
const THEMES = ['white', 'g10', 'g90', 'g100'];

export function ThemeProvider({ children, defaultTheme = 'white' }) {
  // Initialize from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return defaultTheme;
    
    // Check localStorage
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && THEMES.includes(stored)) return stored;
    
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'g100';
    }
    
    return defaultTheme;
  });
  
  // Persist theme changes
  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    document.documentElement.setAttribute('data-carbon-theme', theme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      const colors = {
        'white': '#ffffff',
        'g10': '#f4f4f4',
        'g90': '#262626',
        'g100': '#161616'
      };
      metaThemeColor.setAttribute('content', colors[theme]);
    }
  }, [theme]);
  
  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only auto-switch if user hasn't manually set a preference
      const hasManualPreference = localStorage.getItem(THEME_STORAGE_KEY);
      if (!hasManualPreference) {
        setTheme(e.matches ? 'g100' : 'white');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  const value = useMemo(() => ({
    theme,
    setTheme,
    themes: THEMES,
    isDark: theme === 'g90' || theme === 'g100',
    isLight: theme === 'white' || theme === 'g10',
    toggleDarkMode: () => {
      setTheme(prev => {
        if (prev === 'white' || prev === 'g10') return 'g100';
        return 'white';
      });
    },
    // Clear preference to follow system
    followSystem: () => {
      localStorage.removeItem(THEME_STORAGE_KEY);
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'g100' : 'white');
    }
  }), [theme]);
  
  return (
    <ThemeContext.Provider value={value}>
      <Theme theme={theme}>
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
```

### 9.4 Theme Switcher Component

```jsx
// src/components/ThemeSwitcher.jsx
import { useTheme } from '../contexts/ThemeContext';
import { 
  ContentSwitcher, 
  Switch,
  Toggle,
  Dropdown
} from '@carbon/react';
import { 
  Light, 
  Asleep, 
  Screen,
  Sun,
  Moon
} from '@carbon/icons-react';

// Simple toggle for light/dark
export function DarkModeToggle() {
  const { isDark, toggleDarkMode } = useTheme();
  
  return (
    <Toggle
      id="dark-mode-toggle"
      labelA="Light"
      labelB="Dark"
      toggled={isDark}
      onToggle={toggleDarkMode}
      aria-label="Toggle dark mode"
    />
  );
}

// Icon button toggle
export function ThemeToggleButton() {
  const { isDark, toggleDarkMode } = useTheme();
  
  return (
    <button
      onClick={toggleDarkMode}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="theme-toggle-btn"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

// Content switcher for all themes
export function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  
  const themeIndex = themes.indexOf(theme);
  
  return (
    <ContentSwitcher
      onChange={({ index }) => setTheme(themes[index])}
      selectedIndex={themeIndex}
      aria-label="Theme selector"
    >
      <Switch name="white" text="White">
        <Light />
      </Switch>
      <Switch name="g10" text="Gray 10">
        <Light />
      </Switch>
      <Switch name="g90" text="Gray 90">
        <Asleep />
      </Switch>
      <Switch name="g100" text="Gray 100">
        <Asleep />
      </Switch>
    </ContentSwitcher>
  );
}

// Dropdown for compact spaces
export function ThemeDropdown() {
  const { theme, setTheme } = useTheme();
  
  const items = [
    { id: 'white', label: 'Light (White)', icon: Sun },
    { id: 'g10', label: 'Light (Gray 10)', icon: Sun },
    { id: 'g90', label: 'Dark (Gray 90)', icon: Moon },
    { id: 'g100', label: 'Dark (Gray 100)', icon: Moon },
    { id: 'system', label: 'Follow System', icon: Screen }
  ];
  
  const handleChange = ({ selectedItem }) => {
    if (selectedItem.id === 'system') {
      // Follow system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'g100' : 'white');
      localStorage.removeItem('carbonac-theme');
    } else {
      setTheme(selectedItem.id);
    }
  };
  
  return (
    <Dropdown
      id="theme-dropdown"
      titleText="Theme"
      label="Select theme"
      items={items}
      itemToString={(item) => item?.label ?? ''}
      selectedItem={items.find(i => i.id === theme)}
      onChange={handleChange}
    />
  );
}
```

### 9.5 Theme-Aware Components

```jsx
// Components that adapt to theme

// Logo that changes based on theme
export function ThemedLogo({ className }) {
  const { isDark } = useTheme();
  
  return (
    <img
      src={isDark ? '/logos/Carbonac-Light-Wide.png' : '/logos/Carbonac-Dark-Wide.png'}
      alt="Carbonac"
      className={className}
    />
  );
}

// Chart colors that adapt to theme
export function useChartColors() {
  const { isDark } = useTheme();
  
  return useMemo(() => ({
    primary: isDark ? '#78a9ff' : '#0f62fe',
    secondary: isDark ? '#be95ff' : '#8a3ffc',
    tertiary: isDark ? '#42be65' : '#198038',
    quaternary: isDark ? '#ff8389' : '#da1e28',
    grid: isDark ? '#393939' : '#e0e0e0',
    text: isDark ? '#c6c6c6' : '#525252',
    background: isDark ? '#161616' : '#ffffff'
  }), [isDark]);
}

// Syntax highlighting theme
export function useCodeTheme() {
  const { isDark } = useTheme();
  
  // Return appropriate theme for code editors
  return isDark ? 'vs-dark' : 'vs-light';
}

// Image with theme variants
export function ThemedImage({ light, dark, alt, ...props }) {
  const { isDark } = useTheme();
  
  return (
    <picture>
      <source 
        srcSet={dark} 
        media="(prefers-color-scheme: dark)"
      />
      <img 
        src={isDark ? dark : light} 
        alt={alt} 
        {...props}
      />
    </picture>
  );
}
```

### 9.6 CSS Theme Utilities

```scss
// Theme-aware utility classes

// Background utilities
.bg-layer-01 { background-color: var(--cds-layer-01); }
.bg-layer-02 { background-color: var(--cds-layer-02); }
.bg-layer-03 { background-color: var(--cds-layer-03); }
.bg-background { background-color: var(--cds-background); }
.bg-interactive { background-color: var(--cds-interactive); }

// Text utilities
.text-primary { color: var(--cds-text-primary); }
.text-secondary { color: var(--cds-text-secondary); }
.text-helper { color: var(--cds-text-helper); }
.text-error { color: var(--cds-text-error); }
.text-on-color { color: var(--cds-text-on-color); }
.text-inverse { color: var(--cds-text-inverse); }

// Border utilities
.border-subtle { border-color: var(--cds-border-subtle-01); }
.border-strong { border-color: var(--cds-border-strong-01); }
.border-interactive { border-color: var(--cds-border-interactive); }

// Theme-specific overrides
[data-carbon-theme="g100"],
[data-carbon-theme="g90"] {
  // Dark mode specific styles
  .carbonac-editor {
    --editor-bg: var(--cds-layer-01);
    --editor-gutter: var(--cds-layer-02);
  }
  
  // Invert certain images
  .invert-on-dark {
    filter: invert(1) hue-rotate(180deg);
  }
  
  // Reduce image brightness
  .dim-on-dark {
    filter: brightness(0.9);
  }
}

[data-carbon-theme="white"],
[data-carbon-theme="g10"] {
  // Light mode specific styles
  .carbonac-editor {
    --editor-bg: #ffffff;
    --editor-gutter: var(--cds-layer-01);
  }
}

// Theme transition (optional - for smooth switching)
.theme-transition {
  transition: 
    background-color 200ms ease,
    border-color 200ms ease,
    color 200ms ease;
}

// Apply to all elements (use sparingly - performance impact)
@mixin enable-theme-transition {
  *,
  *::before,
  *::after {
    transition: 
      background-color 200ms ease,
      border-color 200ms ease,
      color 200ms ease;
  }
}
```

### 9.7 Nested Theme Zones

Aynı sayfada farklı tema bölgeleri oluşturabilirsiniz.

```jsx
import { Theme } from '@carbon/react';

function Dashboard() {
  const { theme } = useTheme();
  
  return (
    <div className="dashboard">
      {/* Main content uses global theme */}
      <main className="dashboard-main">
        <h1>Dashboard</h1>
        <ContentArea />
      </main>
      
      {/* AI panel always uses dark theme */}
      <Theme theme="g100">
        <aside className="ai-panel">
          <h2>AI Assistant</h2>
          <ChatInterface />
        </aside>
      </Theme>
      
      {/* Preview panel uses opposite theme */}
      <Theme theme={theme === 'g100' ? 'white' : 'g100'}>
        <div className="preview-panel">
          <h2>Preview</h2>
          <DocumentPreview />
        </div>
      </Theme>
      
      {/* Inline theme zone */}
      <Theme theme="g10">
        <section className="stats-section">
          <StatCards />
        </section>
      </Theme>
    </div>
  );
}
```

```scss
// Nested theme zone styling
.ai-panel {
  // Ensure isolation from parent theme
  color: var(--cds-text-primary);
  background: var(--cds-background);
  
  // All children inherit from this theme context
  .chat-message {
    background: var(--cds-layer-01);
    border: 1px solid var(--cds-border-subtle-01);
  }
}
```

### 9.8 Contrast Zone System

Carbon, birden fazla katman ile çalışırken doğru kontrastı sağlamak için "layer" sistemi kullanır.

```
LAYER SYSTEM
════════════════════════════════════════════════════════════════

WHITE THEME LAYERS
─────────────────────────────────────────────────────────────────

Background (#ffffff)
    │
    ├── Layer 01 (#f4f4f4) ─── Cards, Tiles, First level
    │       │
    │       └── Layer 02 (#ffffff) ─── Nested cards, Dropdowns
    │               │
    │               └── Layer 03 (#f4f4f4) ─── Third level nesting
    │
    └── Example stacking:
    
        ┌─────────────────────────────────────┐  Background
        │  ┌──────────────────────────────┐   │
        │  │  Card (Layer 01)             │   │
        │  │  ┌────────────────────────┐  │   │
        │  │  │ Dropdown (Layer 02)    │  │   │
        │  │  │ ┌──────────────────┐   │  │   │
        │  │  │ │ Nested (Layer 03)│   │  │   │
        │  │  │ └──────────────────┘   │  │   │
        │  │  └────────────────────────┘  │   │
        │  └──────────────────────────────┘   │
        └─────────────────────────────────────┘


G100 THEME LAYERS
─────────────────────────────────────────────────────────────────

Background (#161616)
    │
    ├── Layer 01 (#262626) ─── Cards, Tiles, First level
    │       │
    │       └── Layer 02 (#393939) ─── Nested cards, Dropdowns
    │               │
    │               └── Layer 03 (#525252) ─── Third level nesting
```

```jsx
// Using layers correctly
function LayeredUI() {
  return (
    <div className="page-background">
      {/* First level - use layer-01 */}
      <div 
        className="card"
        style={{ background: 'var(--cds-layer-01)' }}
      >
        <h3>Card Title</h3>
        
        {/* Second level - use layer-02 */}
        <div 
          className="dropdown-content"
          style={{ background: 'var(--cds-layer-02)' }}
        >
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
```

### 9.9 High Contrast Mode

Windows High Contrast Mode için özel stiller.

```scss
// High contrast mode support
@media (forced-colors: active) {
  // Ensure borders are visible
  .carbonac-card,
  .carbonac-tile,
  .carbonac-button {
    border: 1px solid CanvasText;
  }
  
  // Ensure focus is visible
  :focus {
    outline: 2px solid Highlight !important;
    outline-offset: 2px;
  }
  
  // Ensure disabled states are clear
  [disabled],
  [aria-disabled="true"] {
    opacity: 0.5;
    border-style: dashed;
  }
  
  // Preserve important colors
  .status-error {
    forced-color-adjust: none;
    background: Mark;
  }
  
  // Links remain distinguishable
  a {
    text-decoration: underline;
  }
}
```

### 9.10 Theme Best Practices Özeti

```
┌─────────────────────────────────────────────────────────────────┐
│              THEMING BEST PRACTICES                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  TOKEN USAGE                                                    │
│  ──────────────────────────────────────────────────────────     │
│  ✅ Use CSS custom properties: var(--cds-text-primary)          │
│  ❌ Don't hardcode colors: color: #161616                       │
│  ✅ Use semantic tokens: --cds-text-error                       │
│  ❌ Don't use palette directly: --cds-red-60                    │
│                                                                 │
│  LAYERS                                                         │
│  ──────────────────────────────────────────────────────────     │
│  • Background → Layer 01 → Layer 02 → Layer 03                  │
│  • Each layer provides sufficient contrast                      │
│  • Don't skip layers (bg → layer-02 = bad)                     │
│  • Hover states: layer-hover-01/02/03                          │
│                                                                 │
│  PERSISTENCE                                                    │
│  ──────────────────────────────────────────────────────────     │
│  • Store preference in localStorage                             │
│  • Respect prefers-color-scheme                                 │
│  • Provide "follow system" option                               │
│  • Set data-carbon-theme on <html>                             │
│                                                                 │
│  TRANSITIONS                                                    │
│  ──────────────────────────────────────────────────────────     │
│  • 200ms ease for color transitions                            │
│  • Apply to specific properties, not all                        │
│  • Respect prefers-reduced-motion                               │
│                                                                 │
│  ACCESSIBILITY                                                  │
│  ──────────────────────────────────────────────────────────     │
│  • Support forced-colors (High Contrast)                        │
│  • Maintain 4.5:1 contrast in all themes                       │
│  • Test with actual theme switching                             │
│  • Ensure focus visible in both modes                           │
│                                                                 │
│  IMAGES & ASSETS                                                │
│  ──────────────────────────────────────────────────────────     │
│  • Provide light/dark logo variants                             │
│  • Use ThemedImage component                                    │
│  • Consider filter: invert() for simple icons                   │
│  • Reduce brightness for photos in dark mode                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 10. Performance Optimization

Web performansı, kullanıcı deneyiminin kritik bir parçasıdır. Bu bölüm, Carbonac'ın Carbon Design System ile optimize edilmiş performans stratejilerini kapsar.

### 10.1 Core Web Vitals

Google'ın Core Web Vitals metrikleri, kullanıcı deneyiminin temel ölçütleridir.

```
CORE WEB VITALS TARGETS
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   LCP (Largest Contentful Paint)                               │
│   ─────────────────────────────────────────────────────────    │
│   Measures: Loading performance                                 │
│   Target: ≤ 2.5 seconds                                        │
│                                                                 │
│   Good        Needs Improvement      Poor                       │
│   ≤2.5s       2.5s - 4.0s           >4.0s                      │
│   [████████]  [████████░░░░░░░░]    [░░░░░░░░░░░░░░░░]         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   FID (First Input Delay) → INP (Interaction to Next Paint)   │
│   ─────────────────────────────────────────────────────────    │
│   Measures: Interactivity                                       │
│   Target: ≤ 200 milliseconds (INP)                             │
│                                                                 │
│   Good        Needs Improvement      Poor                       │
│   ≤200ms      200ms - 500ms         >500ms                     │
│   [████████]  [████████░░░░░░░░]    [░░░░░░░░░░░░░░░░]         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   CLS (Cumulative Layout Shift)                                │
│   ─────────────────────────────────────────────────────────    │
│   Measures: Visual stability                                    │
│   Target: ≤ 0.1                                                │
│                                                                 │
│   Good        Needs Improvement      Poor                       │
│   ≤0.1        0.1 - 0.25            >0.25                      │
│   [████████]  [████████░░░░░░░░]    [░░░░░░░░░░░░░░░░]         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 10.2 Bundle Optimization

#### 10.2.1 Tree Shaking Carbon Components

```javascript
// ❌ YANLIŞ: Tüm kütüphaneyi import etme
import { Button, Modal, DataTable } from '@carbon/react';
// Bu şekilde tüm component'ler bundle'a dahil olur

// ✅ DOĞRU: Sadece kullanılan component'leri import et
import Button from '@carbon/react/lib/components/Button';
import Modal from '@carbon/react/lib/components/Modal';
import DataTable from '@carbon/react/lib/components/DataTable';

// ✅ DOĞRU: Barrel imports (modern bundler'lar için)
// Vite ve webpack 5 tree-shaking yapabilir
import { Button, Modal, DataTable } from '@carbon/react';
```

#### 10.2.2 Vite Configuration

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  build: {
    // Chunk size uyarı limiti
    chunkSizeWarningLimit: 500,
    
    // Rollup options
    rollupOptions: {
      output: {
        // Manuel chunk ayırma
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom'],
          'vendor-carbon': ['@carbon/react', '@carbon/icons-react'],
          
          // Feature-based chunks
          'feature-editor': [
            './src/components/Editor',
            './src/components/Preview'
          ],
          'feature-ai': [
            './src/components/AIPanel',
            './src/components/ChatInterface'
          ]
        }
      }
    },
    
    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  
  // CSS optimization
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        // Carbon SCSS optimizasyonu
        additionalData: `
          @use '@carbon/react/scss/config' with (
            $prefix: 'cds',
            $use-flexbox-grid: true
          );
        `
      }
    }
  },
  
  // Dependency optimization
  optimizeDeps: {
    include: ['@carbon/react', '@carbon/icons-react']
  }
});
```

#### 10.2.3 Bundle Analysis

```javascript
// vite.config.js - bundle analizi
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true
    })
  ]
});
```

```bash
# Bundle analizi
npm run build -- --analyze

# veya
npx vite-bundle-visualizer
```

### 10.3 Code Splitting & Lazy Loading

#### 10.3.1 Route-Based Code Splitting

```jsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loading } from '@carbon/react';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Convert = lazy(() => import('./pages/Convert'));
const Templates = lazy(() => import('./pages/Templates'));
const Settings = lazy(() => import('./pages/Settings'));

// Heavy features
const AIPanel = lazy(() => import('./components/AIPanel'));
const Editor = lazy(() => import('./components/Editor'));

// Loading fallback
function PageLoader() {
  return (
    <div className="page-loader">
      <Loading withOverlay={false} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/convert" element={<Convert />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

#### 10.3.2 Component-Level Lazy Loading

```jsx
import { lazy, Suspense, useState } from 'react';
import { SkeletonPlaceholder, Button } from '@carbon/react';

// Lazy load heavy components
const DataVizChart = lazy(() => import('./components/DataVizChart'));
const MarkdownEditor = lazy(() => import('./components/MarkdownEditor'));
const PDFPreview = lazy(() => import('./components/PDFPreview'));

// Component skeleton
function ChartSkeleton() {
  return (
    <div className="chart-skeleton">
      <SkeletonPlaceholder style={{ height: '300px' }} />
    </div>
  );
}

function Dashboard() {
  const [showChart, setShowChart] = useState(false);
  
  return (
    <div>
      <Button onClick={() => setShowChart(true)}>
        Show Analytics
      </Button>
      
      {showChart && (
        <Suspense fallback={<ChartSkeleton />}>
          <DataVizChart data={analyticsData} />
        </Suspense>
      )}
    </div>
  );
}

// Preload on hover
function PreloadOnHover() {
  const handleMouseEnter = () => {
    // Preload component before user clicks
    import('./components/HeavyComponent');
  };
  
  return (
    <Button onMouseEnter={handleMouseEnter}>
      Open Heavy Feature
    </Button>
  );
}
```

#### 10.3.3 Dynamic Imports

```jsx
// Dynamic import based on condition
async function loadConverter(engine) {
  if (engine === 'typst') {
    const { convertTypst } = await import('./converters/typst');
    return convertTypst;
  } else {
    const { convertQuarto } = await import('./converters/quarto');
    return convertQuarto;
  }
}

// Usage
async function handleConvert(markdown, engine) {
  const convert = await loadConverter(engine);
  return convert(markdown);
}

// Dynamic icon loading
async function loadIcon(iconName) {
  const icons = await import('@carbon/icons-react');
  return icons[iconName];
}
```

### 10.4 Image Optimization

#### 10.4.1 Responsive Images

```jsx
function OptimizedImage({ src, alt, sizes }) {
  // Generate srcset for different sizes
  const srcset = [320, 640, 960, 1280, 1920]
    .map(w => `${src}?w=${w} ${w}w`)
    .join(', ');
  
  return (
    <img
      src={`${src}?w=960`}
      srcSet={srcset}
      sizes={sizes || '(max-width: 672px) 100vw, 50vw'}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
  );
}

// Picture element for format fallbacks
function ModernImage({ src, alt }) {
  const basePath = src.replace(/\.[^.]+$/, '');
  
  return (
    <picture>
      {/* AVIF - best compression */}
      <source srcSet={`${basePath}.avif`} type="image/avif" />
      {/* WebP - wide support */}
      <source srcSet={`${basePath}.webp`} type="image/webp" />
      {/* Fallback */}
      <img src={src} alt={alt} loading="lazy" />
    </picture>
  );
}
```

#### 10.4.2 Lazy Loading Images

```jsx
import { useEffect, useRef, useState } from 'react';

function LazyImage({ src, alt, placeholder }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' } // Load 100px before viewport
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div ref={imgRef} className="lazy-image-container">
      {/* Placeholder blur */}
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className="lazy-image-placeholder"
          aria-hidden="true"
        />
      )}
      
      {/* Actual image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`lazy-image ${isLoaded ? 'loaded' : ''}`}
        />
      )}
    </div>
  );
}
```

```scss
.lazy-image-container {
  position: relative;
  overflow: hidden;
}

.lazy-image-placeholder {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(10px);
  transform: scale(1.1);
}

.lazy-image {
  opacity: 0;
  transition: opacity 300ms ease;
  
  &.loaded {
    opacity: 1;
  }
}
```

### 10.5 CSS Performance

#### 10.5.1 Critical CSS

```html
<!-- Inline critical CSS in head -->
<head>
  <style>
    /* Critical CSS - Above the fold styles */
    :root {
      --cds-background: #ffffff;
      --cds-text-primary: #161616;
    }
    
    body {
      margin: 0;
      font-family: 'IBM Plex Sans', sans-serif;
      background: var(--cds-background);
      color: var(--cds-text-primary);
    }
    
    .header {
      height: 48px;
      background: var(--cds-layer-01);
    }
    
    .main-content {
      min-height: calc(100vh - 48px);
    }
    
    /* Loading skeleton */
    .skeleton {
      background: linear-gradient(
        90deg,
        #e8e8e8 25%,
        #f4f4f4 50%,
        #e8e8e8 75%
      );
      background-size: 200% 100%;
      animation: skeleton-loading 1.5s infinite;
    }
    
    @keyframes skeleton-loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  </style>
  
  <!-- Async load full CSS -->
  <link 
    rel="preload" 
    href="/assets/styles.css" 
    as="style" 
    onload="this.onload=null;this.rel='stylesheet'"
  />
  <noscript>
    <link rel="stylesheet" href="/assets/styles.css" />
  </noscript>
</head>
```

#### 10.5.2 CSS Containment

```scss
// Improve rendering performance with containment

// Full containment for independent sections
.carbonac-card {
  contain: layout style paint;
}

// Content containment for scrollable areas
.carbonac-scroll-container {
  contain: strict;
  overflow: auto;
}

// Size containment for fixed-size elements
.carbonac-icon {
  contain: size layout;
  width: 24px;
  height: 24px;
}

// Isolate stacking contexts
.carbonac-modal {
  isolation: isolate;
  contain: layout style;
}

// Content visibility for off-screen content
.carbonac-below-fold {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px; // Estimated height
}
```

#### 10.5.3 Animation Performance

```scss
// GPU-accelerated animations
.carbonac-animated {
  // Use transform and opacity (compositor only)
  transform: translateX(0);
  opacity: 1;
  
  // Hint to browser
  will-change: transform, opacity;
  
  // Promote to own layer
  transform: translateZ(0);
  // or
  backface-visibility: hidden;
}

// Remove will-change after animation
.carbonac-animated.animation-complete {
  will-change: auto;
}

// Avoid layout thrashing
.carbonac-smooth-resize {
  // Don't animate width/height
  // Instead, use transform: scale()
  transform-origin: top left;
  transition: transform 200ms ease;
  
  &.collapsed {
    transform: scaleY(0);
  }
}

// Reduce paint areas
.carbonac-optimized-scroll {
  // Prevent repaints during scroll
  overflow: auto;
  
  // Fixed background
  background-attachment: local;
  
  // Passive scroll event
  touch-action: pan-y;
}
```

### 10.6 JavaScript Performance

#### 10.6.1 Memoization

```jsx
import { memo, useMemo, useCallback } from 'react';

// Memoize expensive components
const ExpensiveList = memo(function ExpensiveList({ items, onSelect }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} onClick={() => onSelect(item)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
});

// Memoize expensive calculations
function DataProcessor({ rawData, filters }) {
  const processedData = useMemo(() => {
    // Expensive data processing
    return rawData
      .filter(item => filters.every(f => f(item)))
      .sort((a, b) => b.score - a.score)
      .slice(0, 100);
  }, [rawData, filters]);
  
  return <DataTable data={processedData} />;
}

// Memoize callbacks
function ParentComponent() {
  const [items, setItems] = useState([]);
  
  // Without useCallback, this creates new function on every render
  const handleSelect = useCallback((item) => {
    setItems(prev => [...prev, item]);
  }, []);
  
  return <ExpensiveList items={items} onSelect={handleSelect} />;
}
```

#### 10.6.2 Virtual Lists

```jsx
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';

function VirtualList({ items }) {
  const parentRef = useRef(null);
  
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 48, // Estimated row height
    overscan: 5 // Render 5 items outside viewport
  });
  
  return (
    <div
      ref={parentRef}
      className="virtual-list-container"
      style={{ height: '400px', overflow: 'auto' }}
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative'
        }}
      >
        {virtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`
            }}
          >
            <ListItem item={items[virtualRow.index]} />
          </div>
        ))}
      </div>
    </div>
  );
}
```

#### 10.6.3 Debounce & Throttle

```javascript
// Debounce - wait until user stops
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Throttle - limit execution rate
function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Usage in React
function SearchInput({ onSearch }) {
  const debouncedSearch = useMemo(
    () => debounce(onSearch, 300),
    [onSearch]
  );
  
  return (
    <Search
      onChange={(e) => debouncedSearch(e.target.value)}
      placeholder="Search..."
    />
  );
}

// Scroll handler
function useThrottledScroll(callback, limit = 100) {
  useEffect(() => {
    const throttledHandler = throttle(callback, limit);
    
    window.addEventListener('scroll', throttledHandler, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandler);
  }, [callback, limit]);
}
```

#### 10.6.4 Web Workers

```javascript
// worker.js
self.onmessage = function(e) {
  const { type, data } = e.data;
  
  switch (type) {
    case 'PROCESS_MARKDOWN':
      const result = processMarkdown(data);
      self.postMessage({ type: 'MARKDOWN_PROCESSED', result });
      break;
      
    case 'GENERATE_PDF':
      const pdf = generatePDF(data);
      self.postMessage({ type: 'PDF_GENERATED', result: pdf });
      break;
  }
};

function processMarkdown(markdown) {
  // Heavy processing off main thread
  // Parse, transform, etc.
  return processedContent;
}
```

```jsx
// useWorker hook
function useWorker() {
  const workerRef = useRef(null);
  const [isProcessing, setIsProcessing] = useState(false);
  
  useEffect(() => {
    workerRef.current = new Worker(
      new URL('./worker.js', import.meta.url),
      { type: 'module' }
    );
    
    return () => workerRef.current?.terminate();
  }, []);
  
  const processMarkdown = useCallback((markdown) => {
    return new Promise((resolve) => {
      setIsProcessing(true);
      
      workerRef.current.onmessage = (e) => {
        if (e.data.type === 'MARKDOWN_PROCESSED') {
          setIsProcessing(false);
          resolve(e.data.result);
        }
      };
      
      workerRef.current.postMessage({
        type: 'PROCESS_MARKDOWN',
        data: markdown
      });
    });
  }, []);
  
  return { processMarkdown, isProcessing };
}
```

### 10.7 Network Optimization

#### 10.7.1 Resource Hints

```html
<head>
  <!-- DNS Prefetch - external domains -->
  <link rel="dns-prefetch" href="//fonts.googleapis.com" />
  <link rel="dns-prefetch" href="//api.carbonac.com" />
  
  <!-- Preconnect - critical external resources -->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  
  <!-- Preload - critical resources -->
  <link 
    rel="preload" 
    href="/fonts/IBMPlexSans-Regular.woff2" 
    as="font" 
    type="font/woff2" 
    crossorigin 
  />
  <link 
    rel="preload" 
    href="/assets/critical.css" 
    as="style" 
  />
  <link 
    rel="preload" 
    href="/assets/main.js" 
    as="script" 
  />
  
  <!-- Prefetch - likely next navigation -->
  <link rel="prefetch" href="/templates" />
  <link rel="prefetch" href="/assets/editor-chunk.js" />
  
  <!-- Modulepreload for ES modules -->
  <link rel="modulepreload" href="/assets/vendor.js" />
</head>
```

#### 10.7.2 Service Worker Caching

```javascript
// sw.js - Service Worker
const CACHE_NAME = 'carbonac-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/assets/main.js',
  '/assets/styles.css',
  '/fonts/IBMPlexSans-Regular.woff2',
  '/logos/Carbonac-Dark-Wide.png',
  '/logos/Carbonac-Light-Wide.png'
];

// Install - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

// Fetch - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // API requests - network first
  if (request.url.includes('/api/')) {
    event.respondWith(networkFirst(request));
    return;
  }
  
  // Static assets - cache first
  event.respondWith(cacheFirst(request));
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  
  const response = await fetch(request);
  const cache = await caches.open(CACHE_NAME);
  cache.put(request, response.clone());
  return response;
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    return caches.match(request);
  }
}
```

#### 10.7.3 API Request Optimization

```javascript
// Request deduplication
const pendingRequests = new Map();

async function fetchWithDedup(url, options = {}) {
  const key = `${options.method || 'GET'}-${url}`;
  
  // Return existing promise if same request is pending
  if (pendingRequests.has(key)) {
    return pendingRequests.get(key);
  }
  
  const promise = fetch(url, options)
    .then(res => res.json())
    .finally(() => pendingRequests.delete(key));
  
  pendingRequests.set(key, promise);
  return promise;
}

// Request batching
class RequestBatcher {
  constructor(batchFn, delay = 50) {
    this.batchFn = batchFn;
    this.delay = delay;
    this.queue = [];
    this.timeout = null;
  }
  
  add(item) {
    return new Promise((resolve, reject) => {
      this.queue.push({ item, resolve, reject });
      
      if (!this.timeout) {
        this.timeout = setTimeout(() => this.flush(), this.delay);
      }
    });
  }
  
  async flush() {
    const batch = this.queue;
    this.queue = [];
    this.timeout = null;
    
    try {
      const results = await this.batchFn(batch.map(b => b.item));
      batch.forEach((b, i) => b.resolve(results[i]));
    } catch (error) {
      batch.forEach(b => b.reject(error));
    }
  }
}

// Usage
const templateBatcher = new RequestBatcher(
  async (ids) => {
    const response = await fetch('/api/templates/batch', {
      method: 'POST',
      body: JSON.stringify({ ids })
    });
    return response.json();
  }
);

// Individual requests get batched automatically
const template1 = await templateBatcher.add('template-1');
const template2 = await templateBatcher.add('template-2');
```

### 10.8 Performance Monitoring

```jsx
// Performance metrics collection
function usePerformanceMetrics() {
  useEffect(() => {
    // Core Web Vitals
    if ('web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getLCP, getFCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getLCP(console.log);
        getFCP(console.log);
        getTTFB(console.log);
      });
    }
    
    // Performance Observer
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log(`${entry.name}: ${entry.duration}ms`);
        
        // Send to analytics
        sendMetric({
          name: entry.name,
          value: entry.duration,
          type: entry.entryType
        });
      }
    });
    
    observer.observe({ 
      entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'] 
    });
    
    return () => observer.disconnect();
  }, []);
}

// Custom performance marks
function measureConversion() {
  performance.mark('conversion-start');
  
  // ... conversion logic
  
  performance.mark('conversion-end');
  performance.measure('conversion', 'conversion-start', 'conversion-end');
  
  const measure = performance.getEntriesByName('conversion')[0];
  console.log(`Conversion took ${measure.duration}ms`);
}
```

### 10.9 Performance Checklist

```
┌─────────────────────────────────────────────────────────────────┐
│              PERFORMANCE OPTIMIZATION CHECKLIST                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  BUNDLE SIZE                                                    │
│  ──────────────────────────────────────────────────────────     │
│  □ Tree shaking enabled                                         │
│  □ Code splitting by route                                      │
│  □ Dynamic imports for heavy features                           │
│  □ Analyze bundle with visualizer                               │
│  □ Remove unused dependencies                                   │
│  □ Use production builds                                        │
│                                                                 │
│  IMAGES                                                         │
│  ──────────────────────────────────────────────────────────     │
│  □ Use modern formats (WebP, AVIF)                              │
│  □ Responsive images with srcset                                │
│  □ Lazy loading below fold                                      │
│  □ Placeholder/blur-up technique                                │
│  □ Optimize with compression                                    │
│                                                                 │
│  CSS                                                            │
│  ──────────────────────────────────────────────────────────     │
│  □ Critical CSS inlined                                         │
│  □ Async load non-critical CSS                                  │
│  □ Use CSS containment                                          │
│  □ GPU-accelerated animations                                   │
│  □ Avoid layout thrashing                                       │
│                                                                 │
│  JAVASCRIPT                                                     │
│  ──────────────────────────────────────────────────────────     │
│  □ Memoize expensive operations                                 │
│  □ Virtual lists for long lists                                 │
│  □ Debounce/throttle event handlers                             │
│  □ Web Workers for heavy processing                             │
│  □ Avoid blocking main thread                                   │
│                                                                 │
│  NETWORK                                                        │
│  ──────────────────────────────────────────────────────────     │
│  □ Resource hints (preload, prefetch)                           │
│  □ Service Worker caching                                       │
│  □ HTTP/2 or HTTP/3                                            │
│  □ Compression (Brotli, gzip)                                   │
│  □ CDN for static assets                                        │
│                                                                 │
│  MONITORING                                                     │
│  ──────────────────────────────────────────────────────────     │
│  □ Track Core Web Vitals                                        │
│  □ Real User Monitoring (RUM)                                   │
│  □ Performance budgets set                                      │
│  □ Lighthouse CI in pipeline                                    │
│                                                                 │
│  TARGETS                                                        │
│  ──────────────────────────────────────────────────────────     │
│  • LCP: < 2.5s                                                  │
│  • INP: < 200ms                                                 │
│  • CLS: < 0.1                                                   │
│  • Time to Interactive: < 3.8s                                  │
│  • Total bundle: < 250KB (gzipped)                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 11. Resources & References

Bu bölüm, Carbonac geliştirmesi ve IBM Carbon Design System kullanımı için kapsamlı kaynak ve referansları içerir.

### 11.1 Official Carbon Resources

#### 11.1.1 Documentation & Websites

| Resource | URL | Description |
|----------|-----|-------------|
| **Carbon Design System** | https://carbondesignsystem.com | Ana dokümantasyon sitesi |
| **Carbon Components React** | https://react.carbondesignsystem.com | React component storybook |
| **Carbon Charts** | https://charts.carbondesignsystem.com | Data visualization library |
| **Carbon Pictograms** | https://www.carbondesignsystem.com/guidelines/pictograms/library | Pictogram library |
| **Carbon Icons** | https://www.carbondesignsystem.com/guidelines/icons/library | Icon library (2000+) |
| **Carbon for IBM.com** | https://www.ibm.com/standards/carbon | IBM.com specific patterns |

#### 11.1.2 GitHub Repositories

```
CARBON GITHUB REPOSITORIES
════════════════════════════════════════════════════════════════

Core Libraries
─────────────────────────────────────────────────────────────────
carbon-design-system/carbon
├── @carbon/react          - React components
├── @carbon/styles         - SCSS styles
├── @carbon/colors         - Color tokens
├── @carbon/layout         - Grid & spacing
├── @carbon/type           - Typography
├── @carbon/motion         - Animation tokens
├── @carbon/themes         - Theme definitions
└── @carbon/icons-react    - React icon components

Additional Packages
─────────────────────────────────────────────────────────────────
carbon-design-system/carbon-charts     - Data visualization
carbon-design-system/carbon-pictograms - Pictogram library
carbon-design-system/carbon-web-components - Web components
carbon-design-system/gatsby-theme-carbon - Gatsby theme
```

### 11.2 NPM Packages

#### 11.2.1 Core Packages

```json
{
  "dependencies": {
    "@carbon/react": "^1.49.0",
    "@carbon/styles": "^1.49.0",
    "@carbon/icons-react": "^11.34.0"
  }
}
```

#### 11.2.2 Token Packages

```json
{
  "dependencies": {
    "@carbon/colors": "^11.21.0",
    "@carbon/layout": "^11.21.0",
    "@carbon/type": "^11.25.0",
    "@carbon/motion": "^11.17.0",
    "@carbon/themes": "^11.31.0",
    "@carbon/grid": "^11.21.0"
  }
}
```

#### 11.2.3 Extended Packages

```json
{
  "dependencies": {
    "@carbon/charts-react": "^1.12.0",
    "@carbon/pictograms-react": "^11.53.0",
    "@ibm/plex": "^6.3.0"
  }
}
```

### 11.3 Design Tools

#### 11.3.1 Design Kits

| Tool | Resource | Description |
|------|----------|-------------|
| **Figma** | Carbon Design Kit | Official Figma library |
| **Sketch** | Carbon Sketch Kit | Sketch symbols library |
| **Adobe XD** | Carbon XD Kit | Adobe XD components |
| **Axure** | Carbon Axure Kit | Prototyping library |

#### 11.3.2 Figma Resources

```
FIGMA CARBON RESOURCES
════════════════════════════════════════════════════════════════

Official Libraries (Community)
─────────────────────────────────────────────────────────────────
• Carbon Design System - UI Kit (White theme)
• Carbon Design System - UI Kit (Gray 10)
• Carbon Design System - UI Kit (Gray 90)
• Carbon Design System - UI Kit (Gray 100)
• Carbon Icons
• Carbon Pictograms
• Carbon Data Visualization

Templates
─────────────────────────────────────────────────────────────────
• Carbon Dashboard Template
• Carbon Form Patterns
• Carbon Empty States
• Carbon Loading States
```

### 11.4 Font Resources

#### 11.4.1 IBM Plex Font Family

```
IBM PLEX FONT FAMILY
════════════════════════════════════════════════════════════════

Download Sources
─────────────────────────────────────────────────────────────────
• Google Fonts: https://fonts.google.com/specimen/IBM+Plex+Sans
• GitHub: https://github.com/IBM/plex
• NPM: @ibm/plex

Font Variants
─────────────────────────────────────────────────────────────────
IBM Plex Sans       - Primary UI font
IBM Plex Sans Condensed - Dense layouts
IBM Plex Serif      - Editorial content
IBM Plex Mono       - Code, technical content
IBM Plex Sans Arabic - Arabic script
IBM Plex Sans Devanagari - Hindi, Sanskrit
IBM Plex Sans Hebrew - Hebrew script
IBM Plex Sans JP    - Japanese
IBM Plex Sans KR    - Korean
IBM Plex Sans TC    - Traditional Chinese
IBM Plex Sans Thai  - Thai script

Weights Available
─────────────────────────────────────────────────────────────────
100 - Thin
200 - ExtraLight
300 - Light
400 - Regular
450 - Text (Sans only)
500 - Medium
600 - SemiBold
700 - Bold
```

#### 11.4.2 Font Loading

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```scss
// NPM package
@use '@ibm/plex/scss/ibm-plex' with (
  $font-prefix: 'fonts'
);

// Or individual fonts
@import '@ibm/plex/css/ibm-plex-sans.css';
@import '@ibm/plex/css/ibm-plex-mono.css';
```

### 11.5 Learning Resources

#### 11.5.1 Tutorials & Guides

| Type | Resource | Link |
|------|----------|------|
| **Getting Started** | Carbon React Tutorial | carbondesignsystem.com/developing/react-tutorial |
| **Migration** | v10 to v11 Guide | carbondesignsystem.com/migrating/guide |
| **Accessibility** | A11y Guidelines | carbondesignsystem.com/guidelines/accessibility |
| **Motion** | Motion Guidelines | carbondesignsystem.com/guidelines/motion |
| **Patterns** | UI Patterns | carbondesignsystem.com/patterns |

#### 11.5.2 Video Resources

```
VIDEO TUTORIALS
════════════════════════════════════════════════════════════════

IBM Design YouTube Channel
─────────────────────────────────────────────────────────────────
• Carbon Design System Introduction
• Building with Carbon Components
• Theming in Carbon
• Accessibility Best Practices
• Carbon for Developers

Conference Talks
─────────────────────────────────────────────────────────────────
• "Scaling Design Systems" - IBM Design
• "Carbon Motion Philosophy"
• "Building Inclusive Interfaces"
```

### 11.6 Community & Support

#### 11.6.1 Communication Channels

| Channel | Purpose | Link |
|---------|---------|------|
| **GitHub Discussions** | Q&A, Feature requests | github.com/carbon-design-system/carbon/discussions |
| **GitHub Issues** | Bug reports | github.com/carbon-design-system/carbon/issues |
| **Slack** | Real-time chat | ibm-studios.slack.com |
| **Twitter** | Updates, announcements | @_carbondesign |

#### 11.6.2 Contributing

```
CONTRIBUTION GUIDE
════════════════════════════════════════════════════════════════

Getting Started
─────────────────────────────────────────────────────────────────
1. Fork the repository
2. Clone your fork
3. Install dependencies: yarn install
4. Create a branch: git checkout -b feature/your-feature
5. Make changes
6. Run tests: yarn test
7. Submit PR

Contribution Areas
─────────────────────────────────────────────────────────────────
• Bug fixes
• Documentation improvements
• New components (RFC required)
• Accessibility improvements
• Performance optimizations
• Translation/i18n
```

### 11.7 Related Technologies

#### 11.7.1 Development Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.x | UI framework |
| **Vite** | 5.x | Build tool |
| **Sass** | 1.69+ | CSS preprocessor |
| **TypeScript** | 5.x | Type safety |
| **Node.js** | 18+ LTS | Runtime |

#### 11.7.2 Testing Tools

| Tool | Purpose |
|------|---------|
| **Jest** | Unit testing |
| **React Testing Library** | Component testing |
| **Cypress** | E2E testing |
| **axe-core** | Accessibility testing |
| **Lighthouse** | Performance audits |

#### 11.7.3 Complementary Libraries

```json
{
  "dependencies": {
    "react-router-dom": "^6.x",
    "react-hook-form": "^7.x",
    "zustand": "^4.x",
    "@tanstack/react-query": "^5.x",
    "@tanstack/react-virtual": "^3.x",
    "framer-motion": "^10.x"
  }
}
```

### 11.8 Carbonac-Specific Documentation

#### 11.8.1 Project Documentation

| Document | Path | Description |
|----------|------|-------------|
| **README** | [README.md](../README.md) | Project overview |
| **Usage Guide** | [USAGE.md](../USAGE.md) | How to use Carbonac |
| **Carbon Elements** | [CARBON_ELEMENTS.md](./CARBON_ELEMENTS.md) | PDF-focused Carbon reference |
| **Implementation Plan** | [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) | Development roadmap |
| **Web Design Guide** | This document | Web-focused design standards |

#### 11.8.2 Source Code Structure

```
CARBONAC SOURCE STRUCTURE
════════════════════════════════════════════════════════════════

/frontend
├── src/
│   ├── components/      # React components
│   ├── contexts/        # React contexts (Theme, etc.)
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Route pages
│   ├── styles/          # SCSS styles
│   ├── utils/           # Utility functions
│   └── App.jsx          # Root component
├── public/
│   └── logos/           # Brand assets
└── package.json

/src
├── cli.js               # CLI entry point
├── convert-typst.js     # Typst conversion
├── convert-quarto.js    # Quarto conversion
└── utils/               # Shared utilities

/templates
├── typst/               # Typst templates
└── quarto/              # Quarto templates

/styles
└── carbon/              # Carbon token exports
```

### 11.9 Quick Reference Cards

#### 11.9.1 Spacing Quick Reference

```
SPACING TOKENS
════════════════════════════════════════════════════════════════
$spacing-01: 0.125rem (2px)   │  $spacing-08: 2.5rem (40px)
$spacing-02: 0.25rem (4px)    │  $spacing-09: 3rem (48px)
$spacing-03: 0.5rem (8px)     │  $spacing-10: 4rem (64px)
$spacing-04: 0.75rem (12px)   │  $spacing-11: 5rem (80px)
$spacing-05: 1rem (16px)      │  $spacing-12: 6rem (96px)
$spacing-06: 1.5rem (24px)    │  $spacing-13: 10rem (160px)
$spacing-07: 2rem (32px)      │
```

#### 11.9.2 Breakpoint Quick Reference

```
BREAKPOINTS
════════════════════════════════════════════════════════════════
sm:  320px  (4 columns)   │  Mobile
md:  672px  (8 columns)   │  Tablet
lg:  1056px (16 columns)  │  Desktop
xlg: 1312px (16 columns)  │  Large desktop
max: 1584px (16 columns)  │  Max width
```

#### 11.9.3 Color Quick Reference

```
CORE COLORS (Blue family)
════════════════════════════════════════════════════════════════
$blue-10: #edf5ff   │  $blue-60: #0f62fe (Primary)
$blue-20: #d0e2ff   │  $blue-70: #0043ce
$blue-30: #a6c8ff   │  $blue-80: #002d9c
$blue-40: #78a9ff   │  $blue-90: #001d6c
$blue-50: #4589ff   │  $blue-100: #001141
```

#### 11.9.4 Typography Quick Reference

```
TYPE SCALE
════════════════════════════════════════════════════════════════
code-01:     12px / 16px    │  heading-03: 20px / 28px
code-02:     14px / 20px    │  heading-04: 28px / 36px
label-01:    12px / 16px    │  heading-05: 32px / 40px
label-02:    14px / 18px    │  heading-06: 42px / 50px
body-01:     14px / 20px    │  heading-07: 54px / 64px
body-02:     16px / 24px    │
```

### 11.10 Version History

```
CARBONAC WEB DESIGN GUIDE VERSION HISTORY
════════════════════════════════════════════════════════════════

v1.0.0 (2026-01-02)
─────────────────────────────────────────────────────────────────
• Initial release
• Complete IBM Carbon Design System documentation for web
• 11 comprehensive sections covering:
  - Introduction & Philosophy
  - Motion & Animation
  - Easing Curves & Duration Tokens
  - Choreography & Micro-interactions
  - Interactive States
  - Responsive Design & Breakpoints
  - React Components & Patterns
  - Web Accessibility (WCAG)
  - Theming & Dark Mode
  - Performance Optimization
  - Resources & References

Future Updates
─────────────────────────────────────────────────────────────────
• Component-specific deep dives
• Advanced animation patterns
• AI-specific UI patterns
• Internationalization (i18n) guide
• Testing best practices
```

---

## Conclusion

Bu kılavuz, **Carbonac** web uygulaması için IBM Carbon Design System'in kapsamlı bir referansını sunar. Kılavuz, animasyonlardan erişilebilirliğe, responsive tasarımdan performans optimizasyonuna kadar web geliştirmenin tüm kritik alanlarını kapsar.

### Temel Prensipler Özeti

1. **Motion**: Productive (işlevsel) ve Expressive (duygusal) motion paradigmaları
2. **Easing**: Standart, entrance, exit, expressive easing curves
3. **States**: Hover, active, focus, disabled, selected, loading state'leri
4. **Responsive**: Mobile-first, 5 breakpoint, 2x grid system
5. **Components**: Carbon React component'leri ve pattern'leri
6. **Accessibility**: WCAG 2.1 AA uyumu, klavye navigasyonu, ARIA
7. **Theming**: 4 tema modu, CSS custom properties, nested themes
8. **Performance**: Core Web Vitals, lazy loading, caching

### Sonraki Adımlar

- [ ] Kılavuzu düzenli olarak Carbon güncellemeleriyle senkronize edin
- [ ] Component-specific belgeler ekleyin
- [ ] Interaktif örnekler oluşturun
- [ ] Storybook entegrasyonu yapın

---

**Carbonac** © 2026 | IBM Carbon Design System üzerine inşa edilmiştir.

*Bu belge, Carbonac ekibi tarafından web geliştirme standartlarını belgelemek için oluşturulmuştur.*