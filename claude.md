# Remaining Steps for Portfolio Restructuring

## 1. Install Dependencies
```bash
npm install
```

## 2. Build Tailwind CSS
```bash
npm run build:css
```

## 3. Test Locally
```bash
bundle exec jekyll serve
```
Visit `http://localhost:4000` to verify all sections render correctly.

## 4. Verify Functionality
- [ ] Navigation works (desktop and mobile)
- [ ] All sections display correctly (hero, about, skills, projects, experience, education, contact)
- [ ] 3D tilt effects on cards
- [ ] Mouse glow effects (dark and light sections)
- [ ] Wave animation on canvas
- [ ] Responsive design at different breakpoints
- [ ] No console errors

## 5. Clean Up Old Files (Optional)
These files from the old theme can be safely deleted:
```bash
rm archives.html authors.html categories.html tags.html blog.md
rm _includes/custom-footer-scripts.html
rm _data/navigation.yml _data/theme.yml
```

## 6. Commit and Push
```bash
git add .
git commit -m "Restructure portfolio with Jekyll + Tailwind"
git push
```

The GitHub Actions workflow will automatically build the Tailwind CSS on push.

## File Structure Summary
```
_includes/
  sections/     # 7 section files (hero, about, skills, projects, experience, education, contact)
  head.html     # Meta tags, CSS links
  nav.html      # Navigation
  footer.html   # Footer

_layouts/
  default.html  # Base layout
  home.html     # Home page (includes all sections)

_data/
  projects.yml  # Project cards data
  experience.yml # Experience timeline data
  skills.yml    # Skills categories data
  education.yml # Education cards data

assets/
  css/main.css  # Tailwind entry (edit custom styles here)
  js/main.js    # JS entry point
  js/modules/   # animations.js, navigation.js, effects.js, canvas.js
```

## Editing Content
- **Projects**: Edit `_data/projects.yml`
- **Experience**: Edit `_data/experience.yml`
- **Skills**: Edit `_data/skills.yml`
- **Education**: Edit `_data/education.yml`
- **About text**: Edit `_includes/sections/about.html`
- **Hero text**: Edit `_includes/sections/hero.html`