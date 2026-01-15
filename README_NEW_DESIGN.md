# Portfolio Website - Clean Multi-Page Design

This repository contains a professional portfolio website with a clean, academic-style design featuring a sidebar layout and multiple pages.

## 🎨 Design Philosophy

**Inspiration:** Academic portfolio websites like [filipklaesson.github.io](https://filipklaesson.github.io/)

**Key Features:**
- Clean, minimal aesthetic without visual effects
- Fixed sidebar with profile and navigation
- Multi-page structure for better organization
- Neutral color palette (whites, grays, blues)
- Professional, easy-to-read typography
- Fully responsive (mobile-friendly)

## 📁 Site Structure

```
/
├── index.html          # Home page with activity timeline
├── projects.md         # Projects showcase
├── experience.md       # Work experience and education
├── cv.md              # Comprehensive CV
├── contact.md         # Contact information
├── _layouts/
│   ├── page.html      # Main page layout with sidebar
│   ├── default.html   # Base HTML template
│   └── home.html      # (Old single-page layout - archived)
├── _includes/
│   ├── sidebar.html   # Sidebar component
│   ├── head.html      # HTML head with meta tags
│   └── footer.html    # Simple footer
├── assets/
│   ├── css/
│   │   ├── main.css       # Current clean styles
│   │   └── main-old.css   # Archived original styles
│   ├── js/
│   │   ├── main.js        # Simple mobile menu
│   │   └── main-old.js    # Archived original JS
│   └── images/
│       └── profile.jpg    # Profile photo
└── _config.yml        # Jekyll configuration
```

## 🚀 Quick Start

### Prerequisites
- Ruby 2.6+
- Bundler
- Jekyll

### Installation

```bash
# Clone the repository
cd HimanshuBhardwaj2398.github.io

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Visit
open http://localhost:4000
```

### Build for Production

```bash
# Build the site
bundle exec jekyll build

# Output will be in _site/ directory
```

## 📝 Customization

### Update Content

**Home Page:** Edit `index.html`
- Update welcome message
- Add/remove timeline entries
- Modify focus areas

**Projects:** Edit `projects.md`
- Add new projects
- Update descriptions
- Add links to demos/case studies

**Experience:** Edit `experience.md`
- Add new positions
- Update responsibilities
- Add education details

**CV:** Edit `cv.md`
- Update skills
- Add new accomplishments
- Modify sections as needed

**Contact:** Edit `contact.md`
- Update contact information
- Modify areas of interest
- Update consulting services

### Update Profile Photo

Replace the file at:
```
/assets/images/profile.jpg
```

**Recommended specs:**
- Square dimensions (e.g., 400x400px)
- JPG or PNG format
- Under 500KB file size

### Customize Colors

Edit CSS variables in `assets/css/main.css`:

```css
:root {
    --primary: #2563eb;        /* Main blue - change for different brand color */
    --primary-dark: #1e40af;   /* Darker shade for hovers */
    --text-primary: #111827;   /* Main text color */
    --text-secondary: #6b7280; /* Secondary text (lighter) */
    --border: #e5e7eb;         /* Border color */
    --bg-white: #ffffff;       /* Background white */
    --bg-gray: #f9fafb;        /* Light gray background */
}
```

### Add New Pages

1. Create a new markdown file (e.g., `publications.md`)
2. Add front matter:

```markdown
---
layout: page
title: Publications
permalink: /publications/
---

# Your content here
```

3. Add navigation link in `_includes/sidebar.html`:

```html
<li><a href="{{ '/publications.html' | relative_url }}" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors">Publications</a></li>
```

## 🎨 Design System

### Typography
- **Font:** System fonts (optimal performance)
- **Headings:** Bold, clear hierarchy
- **Body:** 1rem base size, 1.6 line-height

### Colors
- **Primary Blue:** #2563eb
- **Text Dark:** #111827
- **Text Light:** #6b7280
- **Borders:** #e5e7eb

### Spacing
- **Content Width:** Max 800px
- **Sidebar:** 256px fixed
- **Padding:** Consistent 1.5-2rem

### Responsive Breakpoints
- **Mobile:** < 768px
- **Desktop:** ≥ 768px

## 📱 Mobile Experience

- Fixed header with hamburger menu
- Collapsible navigation
- Touch-friendly interface
- Optimized content width

## ♿ Accessibility

- Semantic HTML
- Proper heading hierarchy
- Skip to main content link
- Keyboard navigation support
- WCAG AA color contrast
- Screen reader friendly

## 🖨️ Print Styles

The CV page includes print-optimized styles:
- Hides sidebar and navigation
- Full-width content
- Shows full URLs for links
- Optimized page breaks

## 📊 SEO Features

- Meta tags for social sharing
- Open Graph tags
- Twitter Card tags
- Semantic HTML structure
- Fast load times
- Mobile-friendly

## 🔧 Troubleshooting

### Styles not loading
- Check that `bundle exec jekyll build` runs without errors
- Verify `assets/css/styles.css` exists (generated by Tailwind)
- Run `npm run build:css` if needed

### Pages return 404
- Check that markdown files have proper front matter
- Verify `permalink` in front matter
- Rebuild the site

### Mobile menu not working
- Check browser console for errors
- Verify `assets/js/main.js` is loading
- Check that button ID matches JavaScript selector

## 📚 Documentation

- `QUICK_START.md` - Quick setup guide
- `TRANSFORMATION_SUMMARY.md` - Detailed change log
- `SITE_MAP.md` - Complete site structure

## 🚢 Deployment

### GitHub Pages

```bash
# Add and commit changes
git add .
git commit -m "Update portfolio website"

# Push to GitHub
git push origin main
```

GitHub Pages will automatically build and deploy your site.

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file with your domain
2. Configure DNS with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 🔄 Reverting Changes

If you want to revert to the old design:

```bash
# Restore old CSS
mv assets/css/main-old.css assets/css/main.css

# Restore old JavaScript
mv assets/js/main-old.js assets/js/main.js

# Update index.html to use old layout
# Change: layout: page → layout: home
```

## 📞 Support

For issues or questions:
1. Check documentation files
2. Review Jekyll documentation: https://jekyllrb.com/docs/
3. Check GitHub Pages docs: https://docs.github.com/pages

## 📄 License

This is a personal portfolio website. Feel free to use the structure as inspiration for your own site.

---

**Built with ❤️ using Jekyll, Tailwind CSS, and GitHub Pages**

*Last updated: January 2026*
