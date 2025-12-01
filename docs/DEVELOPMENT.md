# Development Guide

Complete guide to developing, maintaining, and deploying the IPC Shalom Assembly website.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Development Workflow](#development-workflow)
3. [Project Structure](#project-structure)
4. [Common Tasks](#common-tasks)
5. [Coding Standards](#coding-standards)
6. [Testing](#testing)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)

---

## Getting Started

### Prerequisites

- **Node.js**: Version 18.17 or later
- **npm**: Version 9 or later
- **Git**: For version control
- **Code Editor**: VS Code recommended

### Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd shalom
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This installs 321 packages including Next.js, React, and Bootstrap.

3. **Verify installation**
   ```bash
   npm list --depth=0
   ```
   Should show all main dependencies.

### First Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Expected output:**
```
▲ Next.js 15.1.0
- Local:        http://localhost:3000

✓ Starting...
✓ Ready in 2.5s
```

---

## Development Workflow

### Daily Development

1. **Start development server**
   ```bash
   npm run dev
   ```

2. **Make changes** to files in `src/` directory

3. **Hot reload** - Changes appear automatically in browser

4. **Check for errors** in terminal and browser console

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server (after build)
npm start

# Lint code
npm run lint
```

### Development Server Details

- **Port**: 3000 (default)
- **Hot Module Replacement**: Enabled
- **Fast Refresh**: React components update instantly
- **Error Overlay**: Shows errors in browser

### Build Process

```bash
npm run build
```

**Output:**
```
Route (app)                              Size     First Load JS
┌ ○ /                                    5.2 kB         95.1 kB
├ ○ /about                               7.8 kB         97.7 kB
├ ○ /fellowship                          4.1 kB         94.0 kB
├ ○ /fellowship/outreach                 6.3 kB         96.2 kB
├ ○ /fellowship/sisters                  5.5 kB         95.4 kB
├ ○ /fellowship/sunday-school            6.9 kB         96.8 kB
├ ○ /fellowship/youth                    5.4 kB         95.3 kB
├ ○ /sermons                             5.9 kB         95.8 kB
└ ○ /visit                               6.2 kB         96.1 kB

○  (Static)  prerendered as static content
```

---

## Project Structure

### Directory Overview

```
shalom/
├── .github/                    # GitHub configuration
│   └── copilot-instructions.md # Copilot settings
├── docs/                       # Documentation
│   ├── README.md              # Main docs
│   ├── PAGES.md               # Page guide
│   ├── COMPONENTS.md          # Component reference
│   ├── STYLING.md             # CSS guide
│   └── DEVELOPMENT.md         # This file
├── public/                     # Static files
│   ├── favicon.svg            # Site icon
│   ├── manifest.json          # PWA manifest
│   └── robots.txt             # SEO robots
├── src/                        # Source code
│   ├── app/                   # App Router pages
│   │   ├── about/
│   │   │   └── page.js        # About page
│   │   ├── fellowship/
│   │   │   ├── page.js        # Fellowship main
│   │   │   ├── youth/
│   │   │   │   └── page.js
│   │   │   ├── sisters/
│   │   │   │   └── page.js
│   │   │   ├── outreach/
│   │   │   │   └── page.js
│   │   │   └── sunday-school/
│   │   │       └── page.js
│   │   ├── sermons/
│   │   │   └── page.js        # Sermons page
│   │   ├── visit/
│   │   │   └── page.js        # Visit page
│   │   ├── layout.js          # Root layout
│   │   ├── page.js            # Homepage
│   │   └── globals.css        # Global styles
│   └── components/
│       ├── Navigation.js      # Header nav
│       └── Footer.js          # Footer
├── .eslintrc.json             # Linting config
├── .gitignore                 # Git ignore
├── jsconfig.json              # JS config
├── next.config.js             # Next.js config
├── package.json               # Dependencies
└── README.md                  # Project readme
```

### Key Files Explained

#### `package.json`
Project configuration and dependencies.

```json
{
  "name": "ipc-shalom-assembly",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "bootstrap": "^5.3.2",
    "react-bootstrap": "^2.10.0"
  }
}
```

#### `next.config.js`
Next.js configuration.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
```

#### `jsconfig.json`
Path aliases configuration.

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Allows imports like:
```javascript
import Navigation from '@/components/Navigation'
```

---

## Common Tasks

### Adding a New Page

**Step 1:** Create page directory
```bash
mkdir -p src/app/new-page
```

**Step 2:** Create `page.js`
```javascript
'use client'

import { Container, Row, Col } from 'react-bootstrap'

export default function NewPage() {
  return (
    <>
      <section className="hero-section">
        <Container>
          <h1 className="display-4 fw-bold">Page Title</h1>
          <p className="lead">Page description</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          {/* Content */}
        </Container>
      </section>
    </>
  )
}
```

**Step 3:** Add to navigation in `components/Navigation.js`
```javascript
<Nav.Link as={Link} href="/new-page" onClick={() => setExpanded(false)}>
  New Page
</Nav.Link>
```

**Step 4:** Add to footer in `components/Footer.js`
```javascript
<li className="mb-2">
  <Link href="/new-page">New Page</Link>
</li>
```

### Updating Sermons

**File:** `src/app/sermons/page.js`

**Step 1:** Locate the sermons array
```javascript
const sermons = [
  // existing sermons...
]
```

**Step 2:** Add new sermon object
```javascript
{
  title: 'Your Sermon Title',
  speaker: 'Pastor Name',
  date: 'December 1, 2025',
  description: 'Brief description of the sermon message...',
  videoUrl: 'https://www.youtube.com/embed/VIDEO_ID'
}
```

**Step 3:** Save file - changes appear automatically

### Updating Contact Information

**Locations to update:**

1. **Footer** (`src/components/Footer.js`)
   ```javascript
   <strong>Email:</strong> your-email@church.org<br />
   <strong>Phone:</strong> (123) 456-7890
   ```

2. **Visit Page** (`src/app/visit/page.js`)
   ```javascript
   <p className="text-muted mb-2">
     <strong>Phone:</strong> (123) 456-7890<br />
     <strong>Email:</strong> your-email@church.org
   </p>
   ```

### Updating Church Address

**Locations to update:**

1. **Footer** (`src/components/Footer.js`)
2. **Homepage** (`src/app/page.js`)
3. **Visit Page** (`src/app/visit/page.js`)
4. **Google Maps** embed in Visit Page

### Changing Brand Colors

**File:** `src/app/globals.css`

```css
:root {
  --primary-color: #YOUR-COLOR;
  --secondary-color: #YOUR-COLOR;
}
```

Colors update throughout the entire site automatically.

### Adding Images

**Step 1:** Add image to `public/` directory
```bash
public/
  └── images/
      └── your-image.jpg
```

**Step 2:** Use in components
```javascript
<img 
  src="/images/your-image.jpg" 
  alt="Description" 
  className="img-fluid"
/>
```

Or with Next.js Image component:
```javascript
import Image from 'next/image'

<Image 
  src="/images/your-image.jpg" 
  alt="Description" 
  width={800} 
  height={600}
/>
```

---

## Coding Standards

### JavaScript/React

**1. Use 'use client' for interactive components**
```javascript
'use client'

import { useState } from 'react'
```

**2. Use functional components**
```javascript
export default function Component() {
  return <div>...</div>
}
```

**3. Import order**
```javascript
// 1. External libraries
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

// 2. Internal components
import Navigation from '@/components/Navigation'

// 3. Styles
import './styles.css'
```

**4. Naming conventions**
- Components: PascalCase (`Navigation.js`)
- Functions: camelCase (`handleClick`)
- Constants: UPPER_SNAKE_CASE (`MAX_ITEMS`)
- CSS classes: kebab-case (`hero-section`)

**5. Use const for non-changing values**
```javascript
const sermons = [...]
```

**6. Destructure props**
```javascript
function Component({ title, description }) {
  return <div>{title}</div>
}
```

### CSS

**1. Use CSS variables**
```css
color: var(--primary-color);
```

**2. Mobile-first media queries**
```css
.element { font-size: 1rem; }

@media (min-width: 768px) {
  .element { font-size: 1.5rem; }
}
```

**3. Use Bootstrap utilities first**
```javascript
<div className="mb-4 text-center">
```

**4. Semantic class names**
```css
.hero-section { }  /* Good */
.blue-box { }      /* Avoid */
```

### File Organization

**1. Group related files**
```
app/
  fellowship/
    page.js
    youth/
      page.js
```

**2. Component file structure**
```javascript
// Imports
import { } from 'library'

// Component
export default function Component() {
  // State
  // Handlers
  // Return JSX
}
```

---

## Testing

### Manual Testing Checklist

**Before each deployment:**

- [ ] All pages load without errors
- [ ] Navigation links work correctly
- [ ] Dropdown menus function properly
- [ ] Mobile menu opens/closes
- [ ] Forms submit correctly (if any)
- [ ] Videos play correctly
- [ ] Google Maps loads properly
- [ ] All links go to correct pages
- [ ] Responsive design works on mobile
- [ ] Responsive design works on tablet
- [ ] Responsive design works on desktop
- [ ] No console errors in browser
- [ ] Build completes successfully

### Browser Testing

Test in multiple browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Device Testing

Test on multiple devices:
- iPhone (iOS Safari)
- Android phone (Chrome)
- iPad (iOS Safari)
- Desktop (1920x1080)

### Performance Testing

```bash
npm run build
```

Check output for:
- ✓ No errors
- ✓ Reasonable file sizes
- ✓ Static optimization enabled

---

## Deployment

### Build for Production

**Step 1:** Create production build
```bash
npm run build
```

**Step 2:** Test production build locally
```bash
npm start
```

**Step 3:** Visit http://localhost:3000 to verify

### Deployment Platforms

#### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Production deployment**
   ```bash
   vercel --prod
   ```

**Advantages:**
- Optimized for Next.js
- Automatic deployments
- Free SSL certificates
- Global CDN

#### Netlify

1. **Connect GitHub repository**
2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Deploy**

#### Traditional Hosting

**Requirements:**
- Node.js server
- PM2 or similar process manager

**Setup:**
```bash
# Install dependencies
npm install

# Build
npm run build

# Start with PM2
pm2 start npm --name "ipc-shalom" -- start
```

### Environment Variables

If needed, create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

Access in code:
```javascript
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
```

### Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] SSL certificate active
- [ ] Google Maps works
- [ ] YouTube videos play
- [ ] Mobile menu functions
- [ ] No console errors
- [ ] Lighthouse score > 90

---

## Troubleshooting

### Common Issues

#### Build Errors

**Error:** "Module not found"
```
Solution: npm install
```

**Error:** "'use client' directive must be at top"
```javascript
// Wrong
import { useState } from 'react'
'use client'

// Correct
'use client'
import { useState } from 'react'
```

#### Development Server Issues

**Error:** Port 3000 already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

**Error:** Changes not reflecting
```bash
# Clear .next cache
rm -rf .next
npm run dev
```

#### Styling Issues

**Bootstrap not working:**
```javascript
// Ensure import order in layout.js
import 'bootstrap/dist/css/bootstrap.min.css'  // First
import './globals.css'                         // Second
```

**Custom CSS not applying:**
```css
/* Use !important if needed */
.element {
  color: var(--primary-color) !important;
}
```

#### Navigation Issues

**Dropdown not closing on mobile:**
```javascript
// Ensure onClick handler
<Nav.Link onClick={() => setExpanded(false)}>
```

#### YouTube Embed Issues

**Video not playing:**
```javascript
// Use /embed/ URL format
src="https://www.youtube.com/embed/VIDEO_ID"

// Not /watch/
src="https://www.youtube.com/watch?v=VIDEO_ID"  // Wrong
```

### Debugging Tools

**1. React DevTools**
- Install browser extension
- Inspect component state and props

**2. Console Logging**
```javascript
console.log('Debug:', variable)
```

**3. Network Tab**
- Check for failed requests
- Verify API calls

**4. Next.js Error Overlay**
- Shows detailed error information
- Click for stack trace

---

## Git Workflow

### Initial Setup

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <repository-url>
git push -u origin main
```

### Daily Workflow

```bash
# Pull latest changes
git pull origin main

# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "Description of changes"

# Push to remote
git push origin feature/your-feature

# Merge to main
git checkout main
git merge feature/your-feature
git push origin main
```

### Commit Message Convention

```
feat: Add new sermon page
fix: Correct navigation dropdown
style: Update primary color
docs: Add development guide
refactor: Reorganize component structure
```

---

## Maintenance

### Regular Tasks

**Weekly:**
- Update sermon videos
- Check for broken links
- Monitor site performance

**Monthly:**
- Update dependencies
  ```bash
  npm outdated
  npm update
  ```
- Review and optimize images
- Check Google Analytics (if setup)

**Quarterly:**
- Major dependency updates
- Security audit
  ```bash
  npm audit
  npm audit fix
  ```
- Performance review

### Backup Strategy

**1. Code**: Use Git (GitHub/GitLab)
**2. Database**: If applicable, regular backups
**3. Assets**: Keep originals in separate location

---

## Performance Optimization

### Image Optimization

Use Next.js Image component:
```javascript
import Image from 'next/image'

<Image 
  src="/image.jpg" 
  alt="Description"
  width={800}
  height={600}
  loading="lazy"
/>
```

### Code Splitting

Next.js automatically splits code by route.

For dynamic imports:
```javascript
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('./Component'))
```

### Lazy Loading

```javascript
<iframe loading="lazy" src="..."></iframe>
```

### Bundle Analysis

```bash
npm install @next/bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Run analysis
ANALYZE=true npm run build
```

---

## Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Bootstrap Docs](https://getbootstrap.com/docs)
- [React Bootstrap](https://react-bootstrap.github.io)

### Tools
- [VS Code](https://code.visualstudio.com)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools)
- [React DevTools](https://react.dev/learn/react-developer-tools)

### Learning
- [Next.js Learn](https://nextjs.org/learn)
- [React Tutorial](https://react.dev/learn)
- [MDN Web Docs](https://developer.mozilla.org)

---

## Support

For questions or issues:
1. Check this documentation
2. Review error messages carefully
3. Search Next.js/React documentation
4. Check browser console for errors
5. Review Git history for recent changes

---

*Last Updated: December 2025*
