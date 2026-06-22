# Quick Start Guide

## 🚀 Immediate Setup (5 minutes)

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm start
```

The app will automatically open at `http://localhost:3000`

### Step 3: Edit Files

All component files are in `src/components/` directory. Changes will hot-reload automatically!

---

## 📝 Quick Customization Checklist

### 1. Update Personal Info (Contact Section)

Edit: `src/components/Contact/Contact.jsx` (lines 96-107)

- Change email address
- Update LinkedIn URL
- Update GitHub URL

### 2. Update Projects

Edit: `src/components/Projects/Projects.jsx` (lines 8-36)

- Modify project titles and descriptions
- Update technology tags
- Change project links

### 3. Customize Skills

Edit: `src/components/Skills/Skills.jsx` (lines 8-34)

- Add/remove skill categories
- Update specific technologies
- Change icons/emojis

### 4. Edit About Section

Edit: `src/components/About/About.jsx` (lines 8-45)

- Update bio text
- Modify achievement stats
- Change profile description

### 5. Change Colors

Edit any `Component.module.css` file

- Primary color: `#007bff` (blue)
- Primary dark: `#0056b3` (darker blue)
- Dark mode color: `#00bfff` (cyan)
- Text color: `#333` (light), `#fff` (dark mode)

---

## 🎯 What's Included

✅ Fully functional React app with 6 main components
✅ Responsive design (works on mobile, tablet, desktop)
✅ Dark mode toggle with smooth transitions
✅ Mobile-friendly hamburger menu
✅ Form validation with error messages
✅ Reusable component patterns
✅ CSS Modules for scoped styling
✅ ES6+ JavaScript features

---

## 📂 File Structure Overview

```
src/
├── components/
│   ├── About/       → Developer profile section
│   ├── Contact/     → Contact form with validation
│   ├── Header/      → Navigation bar with mobile menu
│   ├── Hero/        → Home/hero section
│   ├── Projects/    → Featured projects showcase
│   └── Skills/      → Technical skills display
├── utils/
│   └── formValidation.js  → Email and form validation logic
├── App.jsx          → Main app component
└── App.module.css   → Global styles
```

---

## 💻 Available Commands

| Command         | Purpose                                       |
| --------------- | --------------------------------------------- |
| `npm start`     | Start development server                      |
| `npm run build` | Build for production                          |
| `npm test`      | Run tests                                     |
| `npm run eject` | Eject from Create React App (⚠️ Irreversible) |

---

## 🌐 Deployment Options

### Vercel (Recommended - Easiest)

1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Auto-deploys on every push!

### Netlify

1. Run `npm run build`
2. Drag & drop `build/` folder to Netlify
3. Or connect GitHub for auto-deploys

### GitHub Pages

```bash
npm install gh-pages --save-dev
# Add to package.json:
# "homepage": "https://yourusername.github.io/repo-name"
# Add deploy scripts
npm run build
npm run deploy
```

---

## 🔍 Key Component Features

### Header

- Sticky navigation
- Mobile hamburger menu
- Dark/Light theme toggle
- Smooth scroll to sections

### Hero

- Large call-to-action button
- Responsive grid layout
- Animated floating element

### About

- Profile statistics
- Hover animations
- Circular profile image

### Skills

- Card-based layout
- Skill categories with icons
- Hover elevation effect

### Projects

- Project cards with tech tags
- Hover animations
- Links to project demos

### Contact

- Real-time form validation
- Email format verification
- Success message feedback
- Loading state during submission

---

## 🎨 Theme Colors

### Light Mode (Default)

- Background: `#fff` (white)
- Text: `#333` (dark gray)
- Primary: `#007bff` (blue)
- Secondary: `#f8f9fa` (light gray)

### Dark Mode

- Background: `#1a1a1a` (dark gray)
- Text: `#fff` (white)
- Primary: `#00bfff` (cyan)
- Secondary: `#2a2a2a` (medium gray)

---

## 🆘 Troubleshooting

### Port 3000 already in use?

```bash
# Use a different port
PORT=3001 npm start
```

### Dependencies not installing?

```bash
# Clear npm cache and try again
npm cache clean --force
npm install
```

### Hot reload not working?

```bash
# Restart the development server
# Press Ctrl+C to stop, then npm start again
```

---

## 📚 Learn More

- [React Docs](https://react.dev)
- [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)
- [MDN Web Docs](https://developer.mozilla.org)
- [ES6 Features](https://es6.io/)

---

**Happy coding! 🚀**
