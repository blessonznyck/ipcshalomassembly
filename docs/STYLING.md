# Styling Documentation

Complete guide to CSS, styling patterns, and design system for IPC Shalom Assembly website.

---

## Table of Contents

1. [Design System](#design-system)
2. [Global Styles](#global-styles)
3. [Bootstrap Integration](#bootstrap-integration)
4. [CSS Custom Properties](#css-custom-properties)
5. [Component Styles](#component-styles)
6. [Responsive Design](#responsive-design)
7. [Utility Classes](#utility-classes)
8. [Animation & Transitions](#animation--transitions)

---

## Design System

### Color Palette

```css
:root {
  --primary-color: #2b7a8e;      /* Teal blue - main brand color */
  --secondary-color: #48a7ba;    /* Light teal - accent color */
  --dark-gray: #333333;          /* Dark text and footer background */
  --light-gray: #f8f9fa;         /* Light backgrounds */
  --text-color: #666666;         /* Secondary text color */
  --white: #ffffff;              /* White backgrounds */
}
```

### Color Usage

| Color | Usage | Examples |
|-------|-------|----------|
| Primary (#2b7a8e) | Headers, buttons, links, brand elements | Hero sections, CTA buttons |
| Secondary (#48a7ba) | Hover states, accents | Link hover, icon accents |
| Dark Gray (#333333) | Body text, footer background | Paragraphs, footer |
| Light Gray (#f8f9fa) | Section backgrounds | Alternating sections |
| Text Color (#666666) | Secondary text | Descriptions, captions |

### Typography

**Font Family:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 
             'Droid Sans', 'Helvetica Neue', sans-serif;
```

**Font Sizes:**
```css
/* Display Headings */
.display-1: 5rem (80px)
.display-2: 4.5rem (72px)
.display-3: 4rem (64px)
.display-4: 3.5rem (56px)

/* Headings */
h1, .h1: 2.5rem (40px)
h2, .h2: 2rem (32px)
h3, .h3: 1.75rem (28px)
h4, .h4: 1.5rem (24px)
h5, .h5: 1.25rem (20px)
h6, .h6: 1rem (16px)

/* Body */
body: 1rem (16px)
.lead: 1.25rem (20px)
.small: 0.875rem (14px)
```

**Font Weights:**
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Spacing Scale

Bootstrap's spacing utilities (0-5):
```
0: 0
1: 0.25rem (4px)
2: 0.5rem (8px)
3: 1rem (16px)
4: 1.5rem (24px)
5: 3rem (48px)
```

### Border Radius

```css
--bs-border-radius: 0.375rem (6px)
--bs-border-radius-sm: 0.25rem (4px)
--bs-border-radius-lg: 0.5rem (8px)
--bs-border-radius-xl: 1rem (16px)
--bs-border-radius-2xl: 2rem (32px)
--bs-border-radius-pill: 50rem (fully rounded)
```

### Shadows

```css
.shadow-sm: 0 .125rem .25rem rgba(0,0,0,.075)
.shadow: 0 .5rem 1rem rgba(0,0,0,.15)
.shadow-lg: 0 1rem 3rem rgba(0,0,0,.175)
```

---

## Global Styles

**File:** `src/app/globals.css`

### Base Styles

```css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  color: var(--dark-gray);
  background: var(--white);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Link Styles

```css
a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--secondary-color);
}
```

### Section Styles

```css
.section {
  padding: 80px 20px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section {
    padding: 60px 20px;
  }
}
```

### Hero Section

```css
.hero-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 120px 20px;
  text-align: center;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 80px 20px;
    min-height: 50vh;
  }
}
```

### Section Title

```css
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--dark-gray);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
}
```

---

## Bootstrap Integration

### Import Order

**In `layout.js`:**
```javascript
import 'bootstrap/dist/css/bootstrap.min.css'  // Bootstrap first
import './globals.css'                         // Custom CSS second
```

This order allows custom CSS to override Bootstrap defaults.

### Bootstrap Components Used

- **Layout**: Container, Row, Col
- **Navigation**: Navbar, Nav, NavDropdown
- **Content**: Card, Button
- **Utilities**: Spacing, colors, typography

### Bootstrap Grid System

```javascript
<Container>
  <Row>
    <Col xs={12} sm={6} md={4} lg={3}>
      {/* Content */}
    </Col>
  </Row>
</Container>
```

**Breakpoints:**
- xs: <576px (default, no prefix needed)
- sm: ≥576px
- md: ≥768px
- lg: ≥992px
- xl: ≥1200px
- xxl: ≥1400px

---

## CSS Custom Properties

### Custom Classes

#### Text Colors

```css
.text-primary-custom {
  color: var(--primary-color) !important;
}

.text-secondary-custom {
  color: var(--secondary-color) !important;
}
```

#### Background Colors

```css
.bg-primary-custom {
  background-color: var(--primary-color) !important;
  color: white;
}

.bg-secondary-custom {
  background-color: var(--secondary-color) !important;
  color: white;
}

.bg-light-custom {
  background-color: var(--light-gray) !important;
}
```

#### Button Styles

```css
.btn-primary-custom {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary-custom:hover {
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(43, 122, 142, 0.3);
}

.btn-primary-custom:active {
  transform: translateY(0);
}
```

---

## Component Styles

### Card Styles

```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  border-radius: 12px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
}

.card-body {
  padding: 2rem;
}
```

### Navigation Styles

```css
.navbar {
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.nav-link {
  font-weight: 500;
  padding: 0.5rem 1rem !important;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--secondary-color) !important;
}
```

### Footer Styles

```css
footer {
  background-color: var(--dark-gray);
  color: white;
  padding: 40px 20px 20px;
  margin-top: 80px;
}

footer h5 {
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: white;
}

footer a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

footer a:hover {
  color: white;
  padding-left: 5px;
}

footer .list-unstyled li {
  margin-bottom: 0.5rem;
  transition: padding 0.3s ease;
}
```

### Info Banner Styles

```css
.info-banner {
  background-color: var(--light-gray);
  border-left: 4px solid var(--primary-color);
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.info-banner h5 {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 10px;
}
```

---

## Responsive Design

### Mobile-First Approach

Start with mobile styles, then add media queries for larger screens:

```css
/* Mobile styles (default) */
.element {
  font-size: 1rem;
  padding: 20px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .element {
    font-size: 1.2rem;
    padding: 30px;
  }
}

/* Desktop and up */
@media (min-width: 992px) {
  .element {
    font-size: 1.5rem;
    padding: 40px;
  }
}
```

### Common Responsive Patterns

#### Responsive Typography

```css
.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.2;
}
```

#### Responsive Spacing

```css
.section {
  padding: clamp(40px, 8vw, 80px) 20px;
}
```

#### Responsive Grid

```javascript
<Row>
  <Col xs={12} md={6} lg={4}>
    {/* 1 col mobile, 2 cols tablet, 3 cols desktop */}
  </Col>
</Row>
```

### Breakpoint-Specific Styles

```css
/* Extra small devices (phones, less than 576px) */
@media (max-width: 575.98px) {
  .hero-section { padding: 60px 15px; }
}

/* Small devices (tablets, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
  .section { padding: 60px 20px; }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .section-title { font-size: 2.2rem; }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .navbar-nav { margin-left: auto; }
}
```

---

## Utility Classes

### Spacing Utilities

```css
/* Margin */
.m-0 to .m-5     /* All sides */
.mt-0 to .mt-5   /* Top */
.mb-0 to .mb-5   /* Bottom */
.ms-0 to .ms-5   /* Start (left) */
.me-0 to .me-5   /* End (right) */
.mx-0 to .mx-5   /* Horizontal */
.my-0 to .my-5   /* Vertical */

/* Padding */
.p-0 to .p-5     /* All sides */
.pt-0 to .pt-5   /* Top */
.pb-0 to .pb-5   /* Bottom */
.ps-0 to .ps-5   /* Start (left) */
.pe-0 to .pe-5   /* End (right) */
.px-0 to .px-5   /* Horizontal */
.py-0 to .py-5   /* Vertical */
```

### Text Utilities

```css
/* Alignment */
.text-start, .text-center, .text-end

/* Transform */
.text-lowercase, .text-uppercase, .text-capitalize

/* Weight */
.fw-light (300), .fw-normal (400), .fw-bold (700)

/* Style */
.fst-italic, .fst-normal

/* Color */
.text-primary, .text-secondary, .text-muted, .text-white
```

### Display Utilities

```css
/* Display */
.d-none, .d-block, .d-inline, .d-inline-block, .d-flex

/* Responsive display */
.d-sm-none, .d-md-block, .d-lg-flex

/* Flex utilities */
.flex-row, .flex-column
.justify-content-start, .justify-content-center, .justify-content-end
.align-items-start, .align-items-center, .align-items-end
```

### Size Utilities

```css
/* Width */
.w-25, .w-50, .w-75, .w-100, .w-auto

/* Height */
.h-25, .h-50, .h-75, .h-100, .h-auto

/* Max width/height */
.mw-100, .mh-100
```

---

## Animation & Transitions

### Hover Effects

```css
/* Card hover */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* Button hover */
.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Link hover */
a {
  transition: color 0.3s ease;
}

a:hover {
  color: var(--secondary-color);
}
```

### Smooth Scrolling

```css
html {
  scroll-behavior: smooth;
}
```

### Loading States

```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.loading {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### Fade In Animation

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}
```

---

## Special Elements

### Video Embed Wrapper

```css
.ratio {
  position: relative;
  width: 100%;
}

.ratio-16x9 {
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.ratio iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
```

### Image Styles

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}

.img-cover {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
```

### Gradients

```css
/* Primary gradient */
.gradient-primary {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
}

/* Overlay gradient */
.gradient-overlay {
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%);
}
```

---

## Best Practices

### 1. Use CSS Variables

```css
/* Good */
color: var(--primary-color);

/* Avoid */
color: #2b7a8e;
```

### 2. Mobile-First Responsive Design

```css
/* Good - start with mobile */
.element {
  font-size: 1rem;
}
@media (min-width: 768px) {
  .element {
    font-size: 1.5rem;
  }
}

/* Avoid - desktop first */
@media (max-width: 767px) {
  .element {
    font-size: 1rem;
  }
}
```

### 3. Use Bootstrap Classes First

```javascript
/* Good - use Bootstrap */
<div className="mb-4 text-center">

/* Avoid - custom CSS when Bootstrap exists */
<div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
```

### 4. Consistent Spacing

Use Bootstrap's spacing scale (0-5) consistently:
```javascript
<div className="py-5">  // Consistent with other sections
```

### 5. Semantic Class Names

```css
/* Good */
.hero-section, .info-banner, .card-grid

/* Avoid */
.blue-box, .big-text, .container-1
```

### 6. Transition Performance

```css
/* Good - GPU-accelerated properties */
transition: transform 0.3s ease, opacity 0.3s ease;

/* Avoid - CPU-intensive properties */
transition: width 0.3s ease, height 0.3s ease;
```

---

## Customization Guide

### Changing Brand Colors

**Step 1:** Update CSS variables in `globals.css`
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
}
```

**Step 2:** Colors automatically update throughout the site

### Adding New Utility Classes

Add to `globals.css`:
```css
.your-utility-class {
  /* styles */
}
```

### Overriding Bootstrap

Place custom styles after Bootstrap import:
```css
/* Override Bootstrap button */
.btn-primary {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}
```

---

## Accessibility

### Focus States

```css
a:focus,
button:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}
```

### Color Contrast

All text meets WCAG AA standards:
- Primary color (#2b7a8e) on white: 4.5:1 ratio
- White on primary: 4.5:1 ratio
- Dark gray (#333333) on white: 12.6:1 ratio

### Skip Link

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--primary-color);
  color: white;
  padding: 8px;
  text-decoration: none;
}

.skip-link:focus {
  top: 0;
}
```

---

## Performance Optimization

### CSS Loading

```javascript
// In layout.js - load CSS in optimal order
import 'bootstrap/dist/css/bootstrap.min.css'  // Framework first
import './globals.css'                         // Custom styles second
```

### Minimize Animations

Only animate GPU-accelerated properties:
- `transform`
- `opacity`
- `filter`

### Use Will-Change Sparingly

```css
.card:hover {
  will-change: transform;
}
```

---

*For component documentation, see [COMPONENTS.md](./COMPONENTS.md)*  
*For page structure, see [PAGES.md](./PAGES.md)*
