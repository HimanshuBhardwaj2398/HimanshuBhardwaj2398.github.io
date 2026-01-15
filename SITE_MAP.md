# Site Map - New Multi-Page Structure

## Page Structure

```
┌─────────────────────────────────────────────────────────┐
│                    SIDEBAR (Desktop)                     │
│  ┌─────────────────────────────────────────────────┐   │
│  │         [Profile Photo - Circular]               │   │
│  │                                                   │   │
│  │            Himanshu Bhardwaj                     │   │
│  │    AI Engineer & Data Science Consultant         │   │
│  │                                                   │   │
│  │  Navigation:                                     │   │
│  │  • Home                                          │   │
│  │  • Projects                                      │   │
│  │  • Experience                                    │   │
│  │  • CV                                            │   │
│  │  • Contact                                       │   │
│  │                                                   │   │
│  │  Social Links:                                   │   │
│  │  • Email                                         │   │
│  │  • GitHub                                        │   │
│  │  • LinkedIn                                      │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

## Pages Overview

### 1. Home (/) - `index.html`
**Purpose:** Landing page with welcome message and chronological activity timeline

**Content:**
- Welcome introduction
- Recent Activity (2025 → 2022)
  - Job changes and promotions
  - Major project launches
  - Educational milestones
- Focus Areas (4 key specializations)
- Education summary

**Layout:** Timeline format with years as headers and dated entries

---

### 2. Projects (/projects.html) - `projects.md`
**Purpose:** Showcase of all major projects and case studies

**Content Sections:**
1. Healthcare AI
   - AI Data Extraction Pipeline
2. Financial AI
   - Real-time Stock Data Infrastructure
   - AI Report Generation System
3. Automation
   - LLM-Powered Twitter Bot (@KalqylAI)
4. Enterprise AI
   - Enterprise RAG Platform
5. Analytics
   - Survey Analytics NLP Pipeline
6. Personal Projects
   - Meditation AI Assistant

**Each project includes:**
- Title and category
- Description
- Technologies used
- Links to demos/case studies (where available)

---

### 3. Experience (/experience.html) - `experience.md`
**Purpose:** Detailed professional experience and educational background

**Content:**
- **Work Experience** (4 positions)
  - AI Engineer @ Bridge Medical Consulting (Current)
  - AI & ML Consultant @ Predli Consulting AB
  - Data Science Intern @ Predli Consulting AB
  - Business Operations Associate @ ZS Associates

- **Education** (2 degrees)
  - MSc Data Analytics & Business Economics @ Stockholm School of Economics
  - BE Electronics & Communication @ BITS Pilani

**Format:** Reverse chronological order with detailed bullet points

---

### 4. CV (/cv.html) - `cv.md`
**Purpose:** Comprehensive curriculum vitae with all professional details

**Content:**
- Contact Information
- Professional Summary
- Professional Experience (detailed)
- Education (detailed)
- Technical Skills
  - AI & Machine Learning
  - Programming & Frameworks
  - Data & Cloud
  - Tools & Platforms
- Key Projects
- Publications & Case Studies
- Last updated date

**Format:** Traditional CV layout, print-friendly

---

### 5. Contact (/contact.html) - `contact.md`
**Purpose:** Contact information and areas of interest

**Content:**
- Contact methods (Email, LinkedIn, GitHub)
- Areas of Interest (6 categories)
- Consulting Services offered
- Response time expectation

**Format:** Simple, direct contact information with context

---

## Navigation Flow

```
                    ┌─────────┐
                    │  HOME   │
                    └────┬────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
    ┌────▼────┐    ┌────▼────┐    ┌────▼────┐
    │ PROJECTS│    │EXPERIEN-│    │   CV    │
    │         │    │   CE    │    │         │
    └─────────┘    └─────────┘    └────┬────┘
                                        │
                                   ┌────▼────┐
                                   │ CONTACT │
                                   └─────────┘
```

**Typical User Journeys:**

1. **Quick Overview:** Home → CV
2. **Project Focus:** Home → Projects → Experience
3. **Job Application:** Home → CV → Contact
4. **Technical Deep Dive:** Projects → Experience → CV
5. **Networking:** Home → Contact

---

## Design System

### Colors
- **Primary:** Blue (#2563eb) - Links, accents
- **Background:** White (#ffffff) and Light Gray (#f9fafb)
- **Text:** Dark Gray (#111827) for headings, Medium Gray (#6b7280) for body
- **Borders:** Light Gray (#e5e7eb)

### Typography
- **Font Family:** System fonts (San Francisco on Mac, Segoe UI on Windows)
- **Headings:** Bold, hierarchical sizes (2.5rem → 1.5rem)
- **Body:** 1rem with 1.6 line-height for readability

### Spacing
- **Max Content Width:** 800px (optimal for reading)
- **Sidebar Width:** 256px (16rem)
- **Section Spacing:** 2-2.5rem between major sections

### Responsive Breakpoints
- **Mobile:** < 768px (Sidebar collapses to header with menu)
- **Desktop:** ≥ 768px (Fixed sidebar visible)

---

## Technical Details

### Built With
- **Jekyll:** Static site generator
- **Tailwind CSS:** Utility-first CSS framework
- **Markdown:** Content formatting
- **GitHub Pages:** Hosting

### Key Files
- `_layouts/page.html` - Main page template with sidebar
- `_includes/sidebar.html` - Sidebar component
- `_config.yml` - Site configuration
- `assets/css/main.css` - Styles
- `assets/js/main.js` - JavaScript (mobile menu)

### Performance
- Minimal JavaScript (< 1KB)
- No external dependencies (except fonts)
- Fast load times
- SEO optimized
- Print-friendly CSS

---

## Mobile Experience

```
┌───────────────────────────┐
│  [☰] Himanshu Bhardwaj   │  ← Fixed Header
├───────────────────────────┤
│                           │
│   Page Content Here       │
│   • Full width            │
│   • Scrollable            │
│   • Touch-friendly        │
│                           │
│                           │
└───────────────────────────┘
```

**Mobile Menu (when opened):**
```
┌───────────────────────────┐
│  [×] Himanshu Bhardwaj   │
├───────────────────────────┤
│  Home                     │
│  Projects                 │
│  Experience               │
│  CV                       │
│  Contact                  │
└───────────────────────────┘
```

---

## Accessibility Features

✅ Semantic HTML structure
✅ Proper heading hierarchy (h1 → h6)
✅ Skip to main content link
✅ Focus states for keyboard navigation
✅ ARIA labels on interactive elements
✅ High contrast text (WCAG AA compliant)
✅ Responsive font sizes
✅ Touch-friendly tap targets (48px minimum)

---

## Print Layout (CV Page)

When printing the CV page:
- Sidebar is hidden
- Content uses full width
- White background
- URLs shown after links
- Page breaks optimized
- Black text for toner savings

---

*This site map represents the new clean, professional structure inspired by academic portfolio websites.*
