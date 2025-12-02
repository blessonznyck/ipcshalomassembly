# IPC Shalom Assembly Website Documentation

Welcome to the comprehensive documentation for the IPC Shalom Assembly website. This documentation will help developers understand the codebase structure, styling, components, and how to navigate the project.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Pages Documentation](#pages-documentation)
5. [Components](#components)
6. [Styling System](#styling-system)
7. [Development Guide](#development-guide)
8. [Deployment](#deployment)

---

## Project Overview

IPC Shalom Assembly is a modern church website built with Next.js 15 and Bootstrap 5. The website features:

- **SEO Optimized**: Full metadata, Open Graph tags, and Twitter cards
- **Responsive Design**: Mobile-first approach using Bootstrap 5
- **Server-Side Rendering**: Fast page loads with Next.js App Router
- **Modular Architecture**: Reusable components and clean code structure

**Official Address:**  
No 1, Puliyur 2nd Main Rd, Trustpurum, Kodambakkam, Chennai, Tamil Nadu 600024

**Service Times:**  
Sundays at 10:00 AM and 1:00 PM
---

## Technology Stack

### Core Technologies
- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **Bootstrap 5**: CSS framework
- **React Bootstrap**: Bootstrap components for React

### Development Tools
- **ESLint**: Code linting
- **npm**: Package management

### Key Dependencies
```json
{
  "next": "^15.1.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "bootstrap": "^5.3.2",
  "react-bootstrap": "^2.10.0"
}
```

---

## Project Structure

```
shalom/
├── .github/
│   └── copilot-instructions.md    # GitHub Copilot settings
├── docs/                          # Documentation (you are here)
│   ├── README.md                  # Main documentation
│   ├── PAGES.md                   # Page-by-page guide
│   ├── COMPONENTS.md              # Component documentation
│   ├── STYLING.md                 # CSS and styling guide
│   └── DEVELOPMENT.md             # Development workflow
├── public/
│   ├── manifest.json              # PWA manifest
│   └── robots.txt                 # SEO robots file
├── src/
│   ├── app/                       # Next.js App Router pages
│   │   ├── about/
│   │   │   └── page.js            # About page
│   │   ├── fellowship/
│   │   │   ├── page.js            # Main fellowship page
│   │   │   ├── youth/
│   │   │   │   └── page.js        # Youth fellowship
│   │   │   ├── sisters/
│   │   │   │   └── page.js        # Sisters fellowship
│   │   │   ├── outreach/
│   │   │   │   └── page.js        # Outreach program
│   │   │   └── sunday-school/
│   │   │       └── page.js        # Sunday school
│   │   ├── sermons/
│   │   │   └── page.js            # Sermons with videos
│   │   ├── visit/
│   │   │   └── page.js            # Visit information
│   │   ├── layout.js              # Root layout with metadata
│   │   ├── page.js                # Homepage
│   │   └── globals.css            # Global styles
│   └── components/
│       ├── Navigation.js          # Header navigation
│       └── Footer.js              # Footer component
├── .eslintrc.json                 # ESLint configuration
├── .gitignore                     # Git ignore rules
├── jsconfig.json                  # JavaScript configuration
├── next.config.js                 # Next.js configuration
├── package.json                   # Dependencies
└── README.md                      # Project readme
```

---

## Pages Documentation

The website consists of 6 main pages and 4 fellowship sub-pages:

### Main Pages

1. **Home** (`/`) - Landing page with hero section, mission statement, and quick links
2. **About** (`/about`) - Church history, beliefs, values, and pastoral heritage
3. **Fellowship** (`/fellowship`) - Overview of fellowship groups
4. **Sermons** (`/sermons`) - Video sermons and messages
5. **Visit** (`/visit`) - Service times, location, and visitor information

### Fellowship Sub-Pages

6. **Youth Fellowship** (`/fellowship/youth`) - Young people ages 13-25
7. **Sisters Fellowship** (`/fellowship/sisters`) - Women's ministry
8. **Outreach Program** (`/fellowship/outreach`) - Community service
9. **Sunday School** (`/fellowship/sunday-school`) - Age-appropriate Bible teaching

For detailed page documentation, see [PAGES.md](./PAGES.md)

---

## Components

### Core Components

#### Navigation (`src/components/Navigation.js`)
- Sticky top navigation bar
- Dropdown menu for Fellowship sub-pages
- Mobile-responsive hamburger menu
- Links: Home, About, Fellowship (dropdown), Sermons, Visit

#### Footer (`src/components/Footer.js`)
- Three-column layout (desktop) / stacked (mobile)
- Quick links to all pages
- Contact information and service times
- Copyright notice

For detailed component documentation, see [COMPONENTS.md](./COMPONENTS.md)

---

## Styling System

### CSS Architecture

The project uses a combination of:
1. **Bootstrap 5** - Grid system, utilities, components
2. **Custom CSS** - Brand colors, custom components, animations
3. **React Bootstrap** - Pre-built React components

### Color Palette

```css
:root {
  --primary-color: #2b7a8e;      /* Teal blue */
  --secondary-color: #48a7ba;    /* Light teal */
  --dark-gray: #333333;          /* Text color */
  --light-gray: #f8f9fa;         /* Background */
  --text-color: #666666;         /* Secondary text */
}
```

### Key CSS Classes

- `.hero-section` - Full-width hero banners
- `.section` - Standard section padding
- `.section-title` - Consistent heading styles
- `.text-primary-custom` - Brand color text
- `.btn-primary-custom` - Branded buttons
- `.info-banner` - Highlighted information boxes

For complete styling documentation, see [STYLING.md](./STYLING.md)

---

## Development Guide

### Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Start Production Server**
   ```bash
   npm start
   ```

### File Naming Conventions

- Pages: `page.js` (Next.js App Router convention)
- Components: PascalCase (e.g., `Navigation.js`, `Footer.js`)
- Styles: kebab-case or standard names (e.g., `globals.css`)

### Code Structure

All pages follow this pattern:
```javascript
'use client'  // Client component directive

import { Container, Row, Col } from 'react-bootstrap'

export default function PageName() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-section">
        {/* Hero content */}
      </section>

      {/* Main Content */}
      <section className="section">
        {/* Section content */}
      </section>
    </>
  )
}
```

For detailed development workflow, see [DEVELOPMENT.md](./DEVELOPMENT.md)

---

## Deployment

### Build Commands

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start production server
npm start
```

### Environment Variables

No environment variables are currently required. Update `next.config.js` if needed.

### Hosting Recommendations

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

---

## Quick Reference

### Adding a New Page

1. Create folder in `src/app/your-page/`
2. Add `page.js` file
3. Use 'use client' directive
4. Import Bootstrap components
5. Add navigation link in `Navigation.js`
6. Add footer link in `Footer.js`

### Updating Church Information

- **Address**: Update in `Footer.js`, `page.js` (home), `visit/page.js`
- **Service Times**: Update in `Footer.js` and `visit/page.js`
- **Contact Info**: Update in `Footer.js`
- **Leadership**: Update in `about/page.js`

### Common Tasks

- **Update Sermons**: Edit sermon array in `sermons/page.js`
- **Change Colors**: Modify CSS variables in `globals.css`
- **Update Navigation**: Edit `components/Navigation.js`
- **Modify Footer**: Edit `components/Footer.js`

---

## Support & Contribution

For questions or contributions, please refer to the individual documentation files in this directory for more detailed information.

**Documentation Files:**
- [PAGES.md](./PAGES.md) - Detailed page documentation
- [COMPONENTS.md](./COMPONENTS.md) - Component reference
- [STYLING.md](./STYLING.md) - CSS and styling guide
- [DEVELOPMENT.md](./DEVELOPMENT.md) - Development workflow

---

*Last Updated: December 2025*
