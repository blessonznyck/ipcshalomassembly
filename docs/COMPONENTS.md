# Components Documentation

Complete reference for all reusable components in the IPC Shalom Assembly website.

---

## Table of Contents

1. [Navigation Component](#navigation-component)
2. [Footer Component](#footer-component)
3. [Layout Component](#layout-component)
4. [Common Patterns](#common-patterns)

---

## Navigation Component

**File:** `src/components/Navigation.js`

### Purpose
Provides consistent navigation across all pages with responsive mobile menu and dropdown for fellowship pages.

### Component Structure

```javascript
'use client'

import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [expanded, setExpanded] = useState(false)
  
  return (
    <Navbar 
      expanded={expanded} 
      onToggle={setExpanded} 
      expand="lg" 
      bg="white" 
      className="shadow-sm sticky-top"
    >
      {/* Navigation content */}
    </Navbar>
  )
}
```

### Features

#### 1. Sticky Header
```javascript
className="shadow-sm sticky-top"
```
- Stays at top of viewport when scrolling
- Subtle shadow for depth
- White background

#### 2. Brand Logo
```javascript
<Navbar.Brand as={Link} href="/" className="fw-bold text-primary-custom">
  <span style={{ fontSize: '1.5rem' }}>IPC SHALOM ASSEMBLY</span>
</Navbar.Brand>
```
- Links to homepage
- Custom primary color
- Bold font weight
- 1.5rem font size

#### 3. Mobile Toggle
```javascript
<Navbar.Toggle aria-controls="basic-navbar-nav" />
```
- Hamburger menu icon
- Appears on screens < 992px (lg breakpoint)
- Accessible ARIA label

#### 4. Navigation Links

**Main Links:**
```javascript
<Nav className="ms-auto align-items-lg-center">
  <Nav.Link as={Link} href="/">Home</Nav.Link>
  <Nav.Link as={Link} href="/about">About</Nav.Link>
  <NavDropdown title="Fellowship" id="fellowship-dropdown">
    {/* Dropdown items */}
  </NavDropdown>
  <Nav.Link as={Link} href="/sermons">Sermons</Nav.Link>
  <Nav.Link as={Link} href="/visit">
    <Button variant="outline-primary">VISIT</Button>
  </Nav.Link>
</Nav>
```

**Fellowship Dropdown:**
```javascript
<NavDropdown title="Fellowship" id="fellowship-dropdown">
  <NavDropdown.Item as={Link} href="/fellowship">
    All Fellowship
  </NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item as={Link} href="/fellowship/youth">
    Youth Fellowship
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} href="/fellowship/sisters">
    Sisters Fellowship
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} href="/fellowship/outreach">
    Outreach Program
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} href="/fellowship/sunday-school">
    Sunday School
  </NavDropdown.Item>
</NavDropdown>
```

### State Management

```javascript
const [expanded, setExpanded] = useState(false)
```

**Purpose:**
- Controls mobile menu open/close state
- Automatically closes menu when link is clicked

**Usage:**
```javascript
<Nav.Link as={Link} href="/about" onClick={() => setExpanded(false)}>
  About
</Nav.Link>
```

### Responsive Behavior

**Desktop (≥992px):**
- Horizontal navigation
- Dropdown on hover
- All links visible

**Mobile (<992px):**
- Hamburger menu icon
- Vertical navigation
- Collapsible menu
- Dropdown expands inline

### Styling

**Classes Used:**
- `shadow-sm`: Subtle box shadow
- `sticky-top`: Sticky positioning
- `ms-auto`: Push navigation to right
- `align-items-lg-center`: Vertical center on desktop
- `fw-bold`: Bold font weight
- `text-primary-custom`: Custom brand color

**Custom CSS (in globals.css):**
```css
.text-primary-custom {
  color: var(--primary-color) !important;
}
```

### Adding New Navigation Links

1. **Add to Nav section:**
```javascript
<Nav.Link as={Link} href="/new-page" onClick={() => setExpanded(false)}>
  New Page
</Nav.Link>
```

2. **For dropdown items:**
```javascript
<NavDropdown.Item as={Link} href="/fellowship/new-group">
  New Group
</NavDropdown.Item>
```

---

## Footer Component

**File:** `src/components/Footer.js`

### Purpose
Provides consistent footer with quick links, contact information, and copyright across all pages.

### Component Structure

```javascript
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer>
      <Container>
        {/* Footer content */}
      </Container>
    </footer>
  )
}
```

### Layout Structure

Three-column grid on desktop, stacked on mobile:

```javascript
<Row className="mb-4">
  <Col md={4}>Column 1</Col>
  <Col md={4}>Column 2</Col>
  <Col md={4}>Column 3</Col>
</Row>
```

### Column 1: Church Information

```javascript
<Col md={4} className="mb-4 mb-md-0">
  <h5 className="mb-3">IPC Shalom Assembly</h5>
  <p className="text-white-50">
    Making Jesus known to everyone, everywhere. 
    Join us as we learn to follow Jesus in the 21st century.
  </p>
</Col>
```

**Content:**
- Church name
- Mission statement
- Brief description

### Column 2: Quick Links

```javascript
<Col md={4} className="mb-4 mb-md-0">
  <h5 className="mb-3">Quick Links</h5>
  <ul className="list-unstyled">
    <li className="mb-2">
      <Link href="/about">About Us</Link>
    </li>
    <li className="mb-2">
      <Link href="/fellowship">Fellowship</Link>
    </li>
    <li className="mb-2">
      <Link href="/sermons">Sermons</Link>
    </li>
    <li className="mb-2">
      <Link href="/visit">Visit</Link>
    </li>
  </ul>
</Col>
```

**Links:**
- About Us
- Fellowship
- Sermons
- Visit

### Column 3: Contact Information

```javascript
<Col md={4}>
  <h5 className="mb-3">Contact</h5>
  <p className="text-white-50 mb-2">
    <strong>Service Times:</strong><br />
    Sundays at 9 AM and 11 AM
  </p>
  <p className="text-white-50">
    <strong>Address:</strong><br />
    No 1, Puliyur 2nd Main Rd,<br />
    Trustpurum, Kodambakkam,<br />
    Chennai, Tamil Nadu 600024<br /><br />
    <strong>Email:</strong> info@ipcshalom.org<br />
    <strong>Phone:</strong> (555) 123-4567
  </p>
</Col>
```

**Information:**
- Service times
- Full address
- Email
- Phone number

### Copyright Section

```javascript
<Row>
  <Col className="text-center pt-3 border-top border-secondary">
    <p className="text-white-50 mb-0">
      &copy; {currentYear} IPC Shalom Assembly. All rights reserved.
    </p>
  </Col>
</Row>
```

**Features:**
- Dynamic year calculation
- Centered text
- Top border separator
- Gray text color

### Styling

**Footer Styles (in globals.css):**
```css
footer {
  background-color: var(--dark-gray);
  color: white;
  padding: 40px 20px 20px;
  margin-top: 80px;
}

footer a {
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;
}

footer a:hover {
  color: white;
}
```

**Classes Used:**
- `mb-4`: Margin bottom (spacing)
- `mb-md-0`: Remove margin on desktop
- `text-white-50`: Semi-transparent white text
- `list-unstyled`: Remove list bullets
- `text-center`: Center align text
- `border-top border-secondary`: Top border

### Responsive Behavior

**Desktop (≥768px):**
- 3 equal columns
- Side-by-side layout

**Mobile (<768px):**
- Stacked vertically
- Full width columns
- Bottom margin between sections

### Updating Contact Information

**Service Times:**
```javascript
<strong>Service Times:</strong><br />
Sundays at 9 AM and 11 AM
```

**Address:**
```javascript
<strong>Address:</strong><br />
No 1, Puliyur 2nd Main Rd,<br />
Trustpurum, Kodambakkam,<br />
Chennai, Tamil Nadu 600024
```

**Email/Phone:**
```javascript
<strong>Email:</strong> info@ipcshalom.org<br />
<strong>Phone:</strong> (555) 123-4567
```

---

## Layout Component

**File:** `src/app/layout.js`

### Purpose
Root layout that wraps all pages with common elements and metadata.

### Component Structure

```javascript
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  // SEO metadata
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

### Features

#### 1. Font Configuration
```javascript
const inter = Inter({ subsets: ['latin'] })
```
- Google Font: Inter
- Subset: Latin characters
- Applied to body element

#### 2. CSS Imports
```javascript
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
```
- Bootstrap CSS loaded first
- Custom CSS loaded second (for overrides)

#### 3. Metadata Export

```javascript
export const metadata = {
  title: 'IPC Shalom Assembly - Making Jesus Known to Everyone, Everywhere',
  description: 'Welcome to IPC Shalom Assembly...',
  keywords: [...],
  authors: [{ name: 'IPC Shalom Assembly' }],
  openGraph: {
    title: '...',
    description: '...',
    type: 'website',
    locale: 'en_US',
    siteName: 'IPC Shalom Assembly',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPC Shalom Assembly',
    description: '...',
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

**SEO Benefits:**
- Proper page titles
- Meta descriptions
- Open Graph tags (social sharing)
- Twitter Card tags
- Search engine directives

#### 4. Layout Structure

```javascript
<html lang="en">
  <body className={inter.className}>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </body>
</html>
```

**Elements:**
- `<Navigation />`: Top navigation bar
- `<main>`: Page content area
- `<Footer />`: Bottom footer

### Updating Metadata

**Site-wide Title:**
```javascript
title: 'Your New Title'
```

**Description:**
```javascript
description: 'Your new description for SEO...'
```

**Keywords:**
```javascript
keywords: ['keyword1', 'keyword2', 'keyword3']
```

---

## Common Patterns

### Info Banner Pattern

**Purpose:** Highlight important information

```javascript
<div className="info-banner">
  <h5>Banner Title</h5>
  <p className="mb-0">
    Important information goes here...
  </p>
</div>
```

**CSS:**
```css
.info-banner {
  background-color: var(--light-gray);
  border-left: 4px solid var(--primary-color);
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}
```

### Card Pattern

**Purpose:** Display content in cards

```javascript
<Card className="shadow-sm h-100">
  <Card.Body className="p-4">
    <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>
      🎨
    </div>
    <Card.Title className="h4 mb-3">
      Card Title
    </Card.Title>
    <Card.Text className="text-muted">
      Card description text...
    </Card.Text>
  </Card.Body>
</Card>
```

**Features:**
- Shadow effect
- Full height (`h-100`)
- Icon at top
- Consistent padding
- Hover effects (from globals.css)

### Button Pattern

**Primary Button:**
```javascript
<Button className="btn-primary-custom">
  Button Text
</Button>
```

**Outline Button:**
```javascript
<Button variant="outline-primary" className="rounded-pill px-4">
  Button Text
</Button>
```

**Link as Button:**
```javascript
<Link href="/page">
  <Button variant="outline-primary" className="rounded-pill">
    Button Text
  </Button>
</Link>
```

### Section Pattern

**Full-Width Section:**
```javascript
<section className="section">
  <Container>
    {/* Section content */}
  </Container>
</section>
```

**Colored Background:**
```javascript
<section className="section bg-light">
  <Container>
    {/* Content */}
  </Container>
</section>
```

**Primary Color Background:**
```javascript
<section className="section bg-primary-custom text-white">
  <Container>
    {/* Content */}
  </Container>
</section>
```

### Video Embed Pattern

**YouTube Embed:**
```javascript
<div className="ratio ratio-16x9">
  <iframe 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    title="Video Title"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen
  ></iframe>
</div>
```

**Features:**
- Responsive 16:9 aspect ratio
- Full permissions for YouTube features
- Accessible title attribute

### Google Maps Embed Pattern

```javascript
<div className="ratio ratio-16x9">
  <iframe 
    src="https://www.google.com/maps/embed?pb=..."
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Location Map"
  ></iframe>
</div>
```

**Features:**
- Responsive ratio
- Lazy loading
- No border
- Full screen capability

---

## Component Best Practices

### 1. Always Use 'use client' for Interactive Components

```javascript
'use client'

import { useState } from 'react'
// Component code
```

### 2. Import Only What You Need

```javascript
import { Container, Row, Col, Card } from 'react-bootstrap'
```

### 3. Use Semantic HTML

```javascript
<section>, <article>, <nav>, <footer>, <header>
```

### 4. Close Mobile Menu on Click

```javascript
onClick={() => setExpanded(false)}
```

### 5. Use Link Component for Navigation

```javascript
import Link from 'next/link'

<Nav.Link as={Link} href="/page">
```

### 6. Add ARIA Labels for Accessibility

```javascript
<Navbar.Toggle aria-controls="basic-navbar-nav" />
```

### 7. Use Bootstrap's Responsive Classes

```javascript
<Col xs={12} md={6} lg={4}>
```

---

## Creating New Components

### Steps:

1. **Create file in `src/components/`**
   ```
   src/components/NewComponent.js
   ```

2. **Add 'use client' if interactive**
   ```javascript
   'use client'
   ```

3. **Import dependencies**
   ```javascript
   import { Container, Row, Col } from 'react-bootstrap'
   ```

4. **Export default function**
   ```javascript
   export default function NewComponent() {
     return (
       // JSX
     )
   }
   ```

5. **Import in page or layout**
   ```javascript
   import NewComponent from '@/components/NewComponent'
   ```

---

*For page-specific documentation, see [PAGES.md](./PAGES.md)*  
*For styling details, see [STYLING.md](./STYLING.md)*
