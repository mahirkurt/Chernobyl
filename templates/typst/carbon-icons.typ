// ============================================
// IBM Carbon Design System - Icon Library
// Geometric path-based icons (no emoji)
// ============================================

// ============================================
// CARBON COLORS (for icons)
// ============================================

#let blue-60 = rgb("#0f62fe")
#let gray-100 = rgb("#161616")
#let gray-70 = rgb("#525252")
#let green-60 = rgb("#198038")
#let red-60 = rgb("#da1e28")
#let yellow-30 = rgb("#f1c21b")

// ============================================
// ICON BASE FUNCTION
// ============================================

#let icon-base(size: 16pt, color: gray-100, body) = {
  box(
    width: size,
    height: size,
    clip: false
  )[
    #set line(stroke: 1.5pt + color)
    #set path(stroke: 1.5pt + color, fill: none)
    #set circle(stroke: 1.5pt + color, fill: none)
    #set polygon(stroke: 1.5pt + color, fill: none)
    #body
  ]
}

// ============================================
// STATUS ICONS
// ============================================

// Checkmark
#let icon-checkmark(size: 16pt, color: green-60) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.2, dy: size * 0.5)[
      #line(
        start: (0pt, 0pt),
        end: (size * 0.25, size * 0.3),
        stroke: 2pt + color
      )
    ]
    #place(dx: size * 0.4, dy: size * 0.75)[
      #line(
        start: (0pt, 0pt),
        end: (size * 0.4, -size * 0.6),
        stroke: 2pt + color
      )
    ]
  ]
}

// Close (X)
#let icon-close(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.2, dy: size * 0.2)[
      #line(
        start: (0pt, 0pt),
        end: (size * 0.6, size * 0.6),
        stroke: 2pt + color
      )
    ]
    #place(dx: size * 0.2, dy: size * 0.8)[
      #line(
        start: (0pt, 0pt),
        end: (size * 0.6, -size * 0.6),
        stroke: 2pt + color
      )
    ]
  ]
}

// Success (circle with checkmark)
#let icon-success(size: 16pt, color: green-60) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.5, dy: size * 0.5)[
      #circle(radius: size * 0.4, stroke: 1.5pt + color)
    ]
    #place(dx: size * 0.3, dy: size * 0.5)[
      #line(start: (0pt, 0pt), end: (size * 0.15, size * 0.15), stroke: 1.5pt + color)
    ]
    #place(dx: size * 0.42, dy: size * 0.62)[
      #line(start: (0pt, 0pt), end: (size * 0.25, -size * 0.35), stroke: 1.5pt + color)
    ]
  ]
}

// Error (circle with X)
#let icon-error(size: 16pt, color: red-60) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.5, dy: size * 0.5)[
      #circle(radius: size * 0.4, stroke: 1.5pt + color)
    ]
    #place(dx: size * 0.35, dy: size * 0.35)[
      #line(start: (0pt, 0pt), end: (size * 0.3, size * 0.3), stroke: 1.5pt + color)
    ]
    #place(dx: size * 0.35, dy: size * 0.65)[
      #line(start: (0pt, 0pt), end: (size * 0.3, -size * 0.3), stroke: 1.5pt + color)
    ]
  ]
}

// Warning (triangle with !)
#let icon-warning(size: 16pt, color: yellow-30) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.5, dy: size * 0.15)[
      #polygon(
        (0pt, 0pt),
        (size * 0.35, size * 0.7),
        (-size * 0.35, size * 0.7),
        stroke: 1.5pt + color,
        fill: none
      )
    ]
    #place(dx: size * 0.5, dy: size * 0.4)[
      #line(start: (0pt, 0pt), end: (0pt, size * 0.2), stroke: 2pt + color)
    ]
    #place(dx: size * 0.5, dy: size * 0.72)[
      #circle(radius: 1.5pt, fill: color)
    ]
  ]
}

// Info (circle with i)
#let icon-info(size: 16pt, color: blue-60) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.5, dy: size * 0.5)[
      #circle(radius: size * 0.4, stroke: 1.5pt + color)
    ]
    #place(dx: size * 0.5, dy: size * 0.3)[
      #circle(radius: 1.5pt, fill: color)
    ]
    #place(dx: size * 0.5, dy: size * 0.45)[
      #line(start: (0pt, 0pt), end: (0pt, size * 0.3), stroke: 2pt + color)
    ]
  ]
}

// ============================================
// ARROW ICONS
// ============================================

// Arrow Up
#let icon-arrow-up(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.5, dy: size * 0.2)[
      #line(start: (0pt, 0pt), end: (0pt, size * 0.6), stroke: 2pt + color)
    ]
    #place(dx: size * 0.5, dy: size * 0.2)[
      #line(start: (0pt, 0pt), end: (-size * 0.15, size * 0.15), stroke: 2pt + color)
    ]
    #place(dx: size * 0.5, dy: size * 0.2)[
      #line(start: (0pt, 0pt), end: (size * 0.15, size * 0.15), stroke: 2pt + color)
    ]
  ]
}

// Arrow Down
#let icon-arrow-down(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.5, dy: size * 0.2)[
      #line(start: (0pt, 0pt), end: (0pt, size * 0.6), stroke: 2pt + color)
    ]
    #place(dx: size * 0.5, dy: size * 0.8)[
      #line(start: (0pt, 0pt), end: (-size * 0.15, -size * 0.15), stroke: 2pt + color)
    ]
    #place(dx: size * 0.5, dy: size * 0.8)[
      #line(start: (0pt, 0pt), end: (size * 0.15, -size * 0.15), stroke: 2pt + color)
    ]
  ]
}

// Arrow Right
#let icon-arrow-right(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.2, dy: size * 0.5)[
      #line(start: (0pt, 0pt), end: (size * 0.6, 0pt), stroke: 2pt + color)
    ]
    #place(dx: size * 0.8, dy: size * 0.5)[
      #line(start: (0pt, 0pt), end: (-size * 0.15, -size * 0.15), stroke: 2pt + color)
    ]
    #place(dx: size * 0.8, dy: size * 0.5)[
      #line(start: (0pt, 0pt), end: (-size * 0.15, size * 0.15), stroke: 2pt + color)
    ]
  ]
}

// Arrow Left
#let icon-arrow-left(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.2, dy: size * 0.5)[
      #line(start: (0pt, 0pt), end: (size * 0.6, 0pt), stroke: 2pt + color)
    ]
    #place(dx: size * 0.2, dy: size * 0.5)[
      #line(start: (0pt, 0pt), end: (size * 0.15, -size * 0.15), stroke: 2pt + color)
    ]
    #place(dx: size * 0.2, dy: size * 0.5)[
      #line(start: (0pt, 0pt), end: (size * 0.15, size * 0.15), stroke: 2pt + color)
    ]
  ]
}

// ============================================
// CHEVRON ICONS (lighter arrows)
// ============================================

// Chevron Right
#let icon-chevron-right(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.35, dy: size * 0.3)[
      #line(start: (0pt, 0pt), end: (size * 0.25, size * 0.2), stroke: 1.5pt + color)
    ]
    #place(dx: size * 0.6, dy: size * 0.5)[
      #line(start: (0pt, 0pt), end: (-size * 0.25, size * 0.2), stroke: 1.5pt + color)
    ]
  ]
}

// Chevron Down
#let icon-chevron-down(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.3, dy: size * 0.35)[
      #line(start: (0pt, 0pt), end: (size * 0.2, size * 0.25), stroke: 1.5pt + color)
    ]
    #place(dx: size * 0.5, dy: size * 0.6)[
      #line(start: (0pt, 0pt), end: (size * 0.2, -size * 0.25), stroke: 1.5pt + color)
    ]
  ]
}

// Chevron Up
#let icon-chevron-up(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.3, dy: size * 0.6)[
      #line(start: (0pt, 0pt), end: (size * 0.2, -size * 0.25), stroke: 1.5pt + color)
    ]
    #place(dx: size * 0.5, dy: size * 0.35)[
      #line(start: (0pt, 0pt), end: (size * 0.2, size * 0.25), stroke: 1.5pt + color)
    ]
  ]
}

// ============================================
// ACTION ICONS
// ============================================

// Add (plus)
#let icon-add(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.5, dy: size * 0.25)[
      #line(start: (0pt, 0pt), end: (0pt, size * 0.5), stroke: 2pt + color)
    ]
    #place(dx: size * 0.25, dy: size * 0.5)[
      #line(start: (0pt, 0pt), end: (size * 0.5, 0pt), stroke: 2pt + color)
    ]
  ]
}

// Subtract (minus)
#let icon-subtract(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.25, dy: size * 0.5)[
      #line(start: (0pt, 0pt), end: (size * 0.5, 0pt), stroke: 2pt + color)
    ]
  ]
}

// Menu (hamburger)
#let icon-menu(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.2, dy: size * 0.3)[
      #line(start: (0pt, 0pt), end: (size * 0.6, 0pt), stroke: 2pt + color)
    ]
    #place(dx: size * 0.2, dy: size * 0.5)[
      #line(start: (0pt, 0pt), end: (size * 0.6, 0pt), stroke: 2pt + color)
    ]
    #place(dx: size * 0.2, dy: size * 0.7)[
      #line(start: (0pt, 0pt), end: (size * 0.6, 0pt), stroke: 2pt + color)
    ]
  ]
}

// Settings (gear)
#let icon-settings(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.5, dy: size * 0.5)[
      #circle(radius: size * 0.35, stroke: 1.5pt + color)
    ]
    #place(dx: size * 0.5, dy: size * 0.5)[
      #circle(radius: size * 0.15, stroke: 1.5pt + color)
    ]
    // Gear teeth (simplified)
    #for angle in (0, 90, 180, 270) {
      place(dx: size * 0.5, dy: size * 0.5)[
        #rotate(angle * 1deg)[
          #line(start: (0pt, -size * 0.25), end: (0pt, -size * 0.4), stroke: 1.5pt + color)
        ]
      ]
    }
  ]
}

// Search
#let icon-search(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.4, dy: size * 0.4)[
      #circle(radius: size * 0.25, stroke: 1.5pt + color)
    ]
    #place(dx: size * 0.57, dy: size * 0.57)[
      #line(start: (0pt, 0pt), end: (size * 0.25, size * 0.25), stroke: 2pt + color)
    ]
  ]
}

// ============================================
// DOCUMENT ICONS
// ============================================

// Document
#let icon-document(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.25, dy: size * 0.2)[
      #polygon(
        (0pt, 0pt),
        (size * 0.35, 0pt),
        (size * 0.5, size * 0.15),
        (size * 0.5, size * 0.6),
        (0pt, size * 0.6),
        stroke: 1.5pt + color,
        fill: none
      )
    ]
    #place(dx: size * 0.35, dy: size * 0.4)[
      #line(start: (0pt, 0pt), end: (size * 0.3, 0pt), stroke: 1pt + color)
    ]
    #place(dx: size * 0.35, dy: size * 0.5)[
      #line(start: (0pt, 0pt), end: (size * 0.3, 0pt), stroke: 1pt + color)
    ]
  ]
}

// Folder
#let icon-folder(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.2, dy: size * 0.35)[
      #polygon(
        (0pt, 0pt),
        (size * 0.2, -size * 0.1),
        (size * 0.6, -size * 0.1),
        (size * 0.6, size * 0.4),
        (0pt, size * 0.4),
        stroke: 1.5pt + color,
        fill: none
      )
    ]
  ]
}

// Download
#let icon-download(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.5, dy: size * 0.2)[
      #line(start: (0pt, 0pt), end: (0pt, size * 0.45), stroke: 2pt + color)
    ]
    #place(dx: size * 0.5, dy: size * 0.65)[
      #line(start: (0pt, 0pt), end: (-size * 0.15, -size * 0.15), stroke: 2pt + color)
    ]
    #place(dx: size * 0.5, dy: size * 0.65)[
      #line(start: (0pt, 0pt), end: (size * 0.15, -size * 0.15), stroke: 2pt + color)
    ]
    #place(dx: size * 0.25, dy: size * 0.75)[
      #line(start: (0pt, 0pt), end: (size * 0.5, 0pt), stroke: 2pt + color)
    ]
  ]
}

// Upload
#let icon-upload(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.5, dy: size * 0.35)[
      #line(start: (0pt, 0pt), end: (0pt, size * 0.45), stroke: 2pt + color)
    ]
    #place(dx: size * 0.5, dy: size * 0.35)[
      #line(start: (0pt, 0pt), end: (-size * 0.15, size * 0.15), stroke: 2pt + color)
    ]
    #place(dx: size * 0.5, dy: size * 0.35)[
      #line(start: (0pt, 0pt), end: (size * 0.15, size * 0.15), stroke: 2pt + color)
    ]
    #place(dx: size * 0.25, dy: size * 0.25)[
      #line(start: (0pt, 0pt), end: (size * 0.5, 0pt), stroke: 2pt + color)
    ]
  ]
}

// ============================================
// USER & COMMUNICATION ICONS
// ============================================

// User
#let icon-user(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.5, dy: size * 0.3)[
      #circle(radius: size * 0.15, stroke: 1.5pt + color)
    ]
    #place(dx: size * 0.5, dy: size * 0.7)[
      #circle(radius: size * 0.25, stroke: 1.5pt + color)
    ]
  ]
}

// Link
#let icon-link(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.3, dy: size * 0.4)[
      #circle(radius: size * 0.15, stroke: 1.5pt + color)
    ]
    #place(dx: size * 0.7, dy: size * 0.4)[
      #circle(radius: size * 0.15, stroke: 1.5pt + color)
    ]
    #place(dx: size * 0.4, dy: size * 0.4)[
      #line(start: (0pt, 0pt), end: (size * 0.2, 0pt), stroke: 2pt + color)
    ]
  ]
}

// View (eye)
#let icon-view(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.5, dy: size * 0.5)[
      #circle(radius: size * 0.15, stroke: 1.5pt + color)
    ]
    #place(dx: size * 0.2, dy: size * 0.5)[
      #path(
        ((0pt, 0pt),),
        stroke: 1.5pt + color
      )
    ]
  ]
}

// ============================================
// CHART ICONS
// ============================================

// Chart Bar
#let icon-chart-bar(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.25, dy: size * 0.5)[
      #line(start: (0pt, 0pt), end: (0pt, size * 0.25), stroke: 3pt + color)
    ]
    #place(dx: size * 0.45, dy: size * 0.4)[
      #line(start: (0pt, 0pt), end: (0pt, size * 0.35), stroke: 3pt + color)
    ]
    #place(dx: size * 0.65, dy: size * 0.35)[
      #line(start: (0pt, 0pt), end: (0pt, size * 0.4), stroke: 3pt + color)
    ]
  ]
}

// Chart Line
#let icon-chart-line(size: 16pt, color: gray-100) = {
  icon-base(size: size, color: color)[
    #place(dx: size * 0.2, dy: size * 0.7)[
      #line(start: (0pt, 0pt), end: (size * 0.2, -size * 0.2), stroke: 1.5pt + color)
    ]
    #place(dx: size * 0.4, dy: size * 0.5)[
      #line(start: (0pt, 0pt), end: (size * 0.2, size * 0.1), stroke: 1.5pt + color)
    ]
    #place(dx: size * 0.6, dy: size * 0.6)[
      #line(start: (0pt, 0pt), end: (size * 0.2, -size * 0.3), stroke: 1.5pt + color)
    ]
    #for x in (0.2, 0.4, 0.6, 0.8) {
      place(dx: size * x, dy: size * (if x == 0.2 { 0.7 } else if x == 0.4 { 0.5 } else if x == 0.6 { 0.6 } else { 0.3 }))[
        #circle(radius: 2pt, fill: color)
      ]
    }
  ]
}

// ============================================
// UTILITY FUNCTION
// ============================================

// Icon selector function
#let icon(
  name,
  size: 16pt,
  color: gray-100
) = {
  if name == "checkmark" { icon-checkmark(size: size, color: color) }
  else if name == "close" { icon-close(size: size, color: color) }
  else if name == "success" { icon-success(size: size, color: color) }
  else if name == "error" { icon-error(size: size, color: color) }
  else if name == "warning" { icon-warning(size: size, color: color) }
  else if name == "info" { icon-info(size: size, color: color) }
  else if name == "arrow-up" { icon-arrow-up(size: size, color: color) }
  else if name == "arrow-down" { icon-arrow-down(size: size, color: color) }
  else if name == "arrow-left" { icon-arrow-left(size: size, color: color) }
  else if name == "arrow-right" { icon-arrow-right(size: size, color: color) }
  else if name == "chevron-up" { icon-chevron-up(size: size, color: color) }
  else if name == "chevron-down" { icon-chevron-down(size: size, color: color) }
  else if name == "chevron-right" { icon-chevron-right(size: size, color: color) }
  else if name == "add" { icon-add(size: size, color: color) }
  else if name == "subtract" { icon-subtract(size: size, color: color) }
  else if name == "menu" { icon-menu(size: size, color: color) }
  else if name == "settings" { icon-settings(size: size, color: color) }
  else if name == "search" { icon-search(size: size, color: color) }
  else if name == "document" { icon-document(size: size, color: color) }
  else if name == "folder" { icon-folder(size: size, color: color) }
  else if name == "download" { icon-download(size: size, color: color) }
  else if name == "upload" { icon-upload(size: size, color: color) }
  else if name == "user" { icon-user(size: size, color: color) }
  else if name == "link" { icon-link(size: size, color: color) }
  else if name == "view" { icon-view(size: size, color: color) }
  else if name == "chart-bar" { icon-chart-bar(size: size, color: color) }
  else if name == "chart-line" { icon-chart-line(size: size, color: color) }
  else { box(width: size, height: size)[?] }
}
