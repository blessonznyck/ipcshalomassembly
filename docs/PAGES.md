# Pages Documentation

Complete guide to all pages in the IPC Shalom Assembly website.

---

## Table of Contents

1. [Homepage](#homepage)
2. [About Page](#about-page)
3. [Fellowship Pages](#fellowship-pages)
4. [Sermons Page](#sermons-page)
5. [Visit Page](#visit-page)

---

## Homepage

**Path:** `/`  
**File:** `src/app/page.js`

### Purpose
The landing page that introduces visitors to IPC Shalom Assembly and provides quick access to key sections.

### Sections

#### 1. Hero Section
```javascript
<section className="hero-section">
```
- **Content**: Church name, mission statement, welcome message
- **CTA Button**: "VISIT US" linking to `/visit`
- **Background**: Gradient (primary to secondary color)

**Key Messages:**
- "IPC SHALOM ASSEMBLY"
- "MAKING JESUS KNOWN TO EVERYONE, EVERYWHERE"
- Three value statements:
  - Everyone is welcome
  - Everyone has a next best step
  - Everyone can make a difference

#### 2. About Section
```javascript
<section className="section bg-light">
```
- **Heading**: "We're a church all about loving Jesus"
- **Content**: Brief church description
- **Features**: Two-column layout (text + mission box)
- **CTA**: "Learn More About Us" → `/about`

#### 3. Get Connected Section
```javascript
<section className="section">
```
- **Cards**: Three connection points
  1. Sunday Services (⛪)
  2. Small Groups (🤝)
  3. Serve (❤️)
- **Layout**: 3-column grid on desktop, stacked on mobile

#### 4. CTA Section
```javascript
<section className="section bg-primary-custom text-white">
```
- **Heading**: "Welcome to IPC Shalom Assembly"
- **Service Times**: Sundays at 9 AM and 11 AM
- **Address**: Full Chennai address
- **CTA**: "Plan Your Visit" → `/visit`

### SEO Metadata
```javascript
// In layout.js (applies to homepage)
title: 'IPC Shalom Assembly - Making Jesus Known to Everyone, Everywhere'
description: 'Welcome to IPC Shalom Assembly...'
keywords: ['IPC Shalom Assembly', 'Church', 'Christian', 'Community', ...]
```

---

## About Page

**Path:** `/about`  
**File:** `src/app/about/page.js`

### Purpose
Tell the church's story, explain beliefs, and introduce leadership.

### Sections

#### 1. Page Header
```javascript
<section className="hero-section">
```
- **Title**: "About IPC Shalom Assembly"
- **Subtitle**: "Learning to follow Jesus together"

#### 2. Our Story
```javascript
<section className="section">
```
- Church founding and mission
- Community description
- Values and approach to ministry

#### 3. What We Believe
```javascript
<section className="section bg-light">
```
Core beliefs explained:
- The Bible
- God (Trinity)
- Jesus Christ
- Salvation
- The Church

#### 4. Our Core Values
```javascript
<section className="section">
```
Four values with icons:
1. 🙏 Worship
2. 📖 Scripture
3. 🤝 Community
4. 🌍 Mission

#### 5. Our Pastoral Heritage
```javascript
<section className="section bg-light">
```

**Current Leadership:**
- Rev. John Smith - Senior Pastor (since 2018)
- Sister Grace Williams - Youth Secretary (since 2023)
- Sister Mary Joseph - Women's Group Secretary (since 2024)
- Brother Thomas Matthew - Church Secretary (since 2022)

**Former Pastors:**
Eight past pastors listed chronologically from 1965 to 2018

### Leadership Card Structure
```javascript
<Card className="shadow-sm">
  <Card.Body className="p-4">
    <h5>{name}</h5>
    <p className="text-muted">{role}</p>
    <p className="small text-muted">Serving since {year}</p>
  </Card.Body>
</Card>
```

---

## Fellowship Pages

### Main Fellowship Page

**Path:** `/fellowship`  
**File:** `src/app/fellowship/page.js`

#### Overview Cards
Four fellowship groups, each with:
- Icon
- Title
- Description
- "Learn More" button linking to sub-page

#### Groups:
1. Youth Fellowship (🎸)
2. Sisters Fellowship (👭)
3. Outreach Program (🤝)
4. Sunday School (📚)

---

### Youth Fellowship

**Path:** `/fellowship/youth`  
**File:** `src/app/fellowship/youth/page.js`

#### Target Audience
Young people ages 13-25

#### What We Do (4 Cards)
- 🙏 Weekly Meetings (Friday 6 PM)
- 📖 Bible Study
- 🎮 Fun Activities
- ❤️ Service Projects

#### Schedule
- **Friday Youth Night**: 6:00 PM - 8:00 PM
- **Sunday Morning**: 11:00 AM Service
- **Monthly Events**: First Saturday

#### Leadership
Sister Grace Williams - Youth Secretary

---

### Sisters Fellowship

**Path:** `/fellowship/sisters`  
**File:** `src/app/fellowship/sisters/page.js`

#### Target Audience
Women of all ages

#### What We Offer (4 Cards)
- 📖 Bible Study
- 🙏 Prayer Groups
- ☕ Fellowship Events
- ❤️ Ministry & Service

#### Meeting Schedule
- **Weekly Bible Study**: Wednesdays at 10:00 AM
- **Prayer Meeting**: First Friday at 7:00 PM
- **Monthly Fellowship**: Third Saturday at 2:00 PM

#### Leadership
Sister Mary Joseph - Women's Group Secretary

---

### Outreach Program

**Path:** `/fellowship/outreach`  
**File:** `src/app/fellowship/outreach/page.js`

#### Initiatives (6 Cards)

1. **Food Ministry** (🍞)
   - Last Saturday of each month
   - Food distribution to families in need

2. **Clothing Drive** (👕)
   - Quarterly (March, June, Sept, Dec)
   - Clothing and essentials

3. **Hospital Visitation** (🏥)
   - Weekly visits by appointment
   - Patient support and prayer

4. **Community Clean-Up** (🏠)
   - Second Saturday each month
   - Neighborhood beautification

5. **Education Support** (📚)
   - During school year
   - Tutoring and supplies

6. **Missions Support** (🌍)
   - Ongoing support
   - Local and international missions

#### Impact Statistics
- 500+ Families Served Annually
- 50+ Active Volunteers
- 12 Monthly Programs

---

### Sunday School

**Path:** `/fellowship/sunday-school`  
**File:** `src/app/fellowship/sunday-school/page.js`

#### Age Groups (6 Classes)

1. **Nursery** (👶)
   - Ages 0-3
   - Songs and simple activities

2. **Preschool** (🎨)
   - Ages 4-5
   - Crafts and games

3. **Elementary** (📖)
   - Grades 1-5
   - Bible stories and memorization

4. **Middle School** (🎯)
   - Grades 6-8
   - Discussion-based learning

5. **High School** (🎓)
   - Grades 9-12
   - Apologetics and life application

6. **Adult Classes** (👥)
   - Ages 18+
   - Multiple class options

#### Schedule
- **Morning Session**: 9:00 AM - 10:00 AM (all ages)
- **Children During Service**: During 11:00 AM service (ages 4-10)

#### What We Teach
- ✓ Biblical Truth
- ✓ Practical Application
- ✓ Character Development
- ✓ Scripture Memorization

---

## Sermons Page

**Path:** `/sermons`  
**File:** `src/app/sermons/page.js`

### Purpose
Display video sermons with descriptions and speaker information.

### Structure

#### Recent Messages Section
Grid of sermon cards (3 columns on desktop)

Each card contains:
```javascript
{
  title: String,
  speaker: String,
  date: String,
  description: String,
  videoUrl: String (YouTube embed URL)
}
```

#### Card Layout
```javascript
<Card className="shadow-sm h-100">
  <div className="ratio ratio-16x9">
    <iframe src={videoUrl} />
  </div>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>{description}</Card.Text>
    <div className="border-top pt-3 mt-3">
      <small>{speaker}</small>
      <small>{date}</small>
    </div>
  </Card.Body>
</Card>
```

#### Current Sermons
1. Living with Purpose - Pastor John Smith
2. The Power of Grace - Pastor Sarah Johnson
3. Faith in Action - Pastor John Smith
4. Building Strong Relationships - Pastor Mike Davis
5. Overcoming Fear - Pastor Sarah Johnson
6. The Heart of Worship - Pastor John Smith

#### Subscribe CTA
- YouTube/Podcast subscription call-to-action
- Currently shows "Coming Soon" message

### Adding New Sermons

Update the `sermons` array:
```javascript
const sermons = [
  {
    title: 'Your Sermon Title',
    speaker: 'Pastor Name',
    date: 'Month Day, Year',
    description: 'Brief description...',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID'
  },
  // ... more sermons
]
```

---

## Visit Page

**Path:** `/visit`  
**File:** `src/app/visit/page.js`

### Purpose
Help visitors plan their first visit with practical information.

### Sections

#### 1. Welcome Message
```javascript
<section className="section">
```
- Welcoming introduction
- Emphasis on "come as you are"

#### 2. Service Times & Location
```javascript
<section className="section bg-light">
```

**Two Cards:**

**Card 1: Sunday Services (🕐)**
- Morning Service: 9:00 AM - 10:15 AM
- Late Morning Service: 11:00 AM - 12:15 PM
- Note: Both services are identical

**Card 2: Location (📍)**
- Full address:
  ```
  No 1, Puliyur 2nd Main Rd
  Trustpurum, Kodambakkam
  Chennai, Tamil Nadu 600024
  ```
- Phone: (555) 123-4567
- Email: info@ipcshalom.org
- Parking information

#### 3. What to Expect
```javascript
<section className="section">
```

Four expectations (4-column grid):
1. 👋 Friendly Welcome
2. 👕 Come As You Are
3. ⏱️ Service Length (75 minutes)
4. ☕ Coffee & Connect

#### 4. For Families
```javascript
<section className="section bg-light">
```

**Two Cards:**

1. **Children's Ministry (👶)**
   - Infants through 5th grade
   - Check-in location: main lobby
   - Tours available for first-timers

2. **Youth Ministry (🎸)**
   - Middle and high school
   - Sunday evenings at 6:00 PM
   - Youth Night: 6:00 PM - 7:30 PM

#### 5. First Time Guest
```javascript
<section className="section">
```

Three benefits at Welcome Center:
- 🎁 Pick up a welcome gift
- 🗺️ Get a church tour
- 👥 Meet our team

#### 6. Directions (Google Maps)
```javascript
<section className="section bg-light">
```

Features:
- Embedded Google Maps iframe (responsive 16:9)
- Full address displayed
- "Open in Google Maps" button
- Links to: `https://www.google.com/maps/place/IPC+SHALOM+ASSEMBLY+CHURCH/...`

### Google Maps Integration

```javascript
<iframe 
  src="https://www.google.com/maps/embed?pb=..."
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="IPC Shalom Assembly Location"
></iframe>
```

---

## Common Page Patterns

### Hero Section Pattern
```javascript
<section className="hero-section" style={{ minHeight: '40vh' }}>
  <Container>
    <h1 className="display-4 fw-bold">{pageTitle}</h1>
    <p className="lead">{subtitle}</p>
  </Container>
</section>
```

### Content Section Pattern
```javascript
<section className="section">
  <Container>
    <Row>
      <Col lg={8} className="mx-auto text-center">
        <h2 className="section-title">{sectionHeading}</h2>
        <p className="lead text-muted">{sectionIntro}</p>
      </Col>
    </Row>
  </Container>
</section>
```

### Card Grid Pattern
```javascript
<Row>
  {items.map((item, index) => (
    <Col key={index} md={6} lg={4} className="mb-4">
      <Card className="shadow-sm h-100">
        <Card.Body>
          {/* Card content */}
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
```

---

## SEO Best Practices

All pages follow these SEO practices:

1. **Semantic HTML**: Proper heading hierarchy (h1 → h2 → h3)
2. **Descriptive Text**: Clear, keyword-rich content
3. **Alt Text**: Images and icons have meaningful descriptions
4. **Meta Tags**: Set in `layout.js`
5. **Structured Content**: Logical section organization

---

## Responsive Behavior

### Breakpoints (Bootstrap 5)
- **xs**: < 576px (mobile)
- **sm**: ≥ 576px
- **md**: ≥ 768px (tablet)
- **lg**: ≥ 992px (desktop)
- **xl**: ≥ 1200px
- **xxl**: ≥ 1400px

### Common Responsive Patterns

**Grid Stacking:**
```javascript
<Col md={6} lg={4}>  // 2 cols on tablet, 3 cols on desktop, 1 col on mobile
```

**Centered Content:**
```javascript
<Col lg={8} className="mx-auto">  // Centered with max width on desktop
```

**Responsive Text:**
```css
font-size: clamp(2rem, 5vw, 3.5rem);  // Scales between min and max
```

---

*For component-specific documentation, see [COMPONENTS.md](./COMPONENTS.md)*  
*For styling details, see [STYLING.md](./STYLING.md)*
