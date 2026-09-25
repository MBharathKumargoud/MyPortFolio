# M Bharath Kumar Goud — Portfolio

> **Professional Corporate × Modern Developer** portfolio website.

## 🚀 Quick Start

```bash
npm install
npm run dev       # → http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

## 📸 Adding Your Profile Photo

Place your professional portrait as:

```
public/profile.jpg
```

The hero section will automatically load it. If the file is missing, a clean lettermark placeholder (`MBKG`) is displayed instead.

> **Tip:** Use a high-resolution portrait (at least 600×800px). The image is cropped to a 3:4 aspect ratio and positioned from the top.

## 🎨 Design System

| Variable | Value | Usage |
|---|---|---|
| `--bg-primary` | `#0D0E0F` | Main background |
| `--bg-secondary` | `#141516` | Alternate sections |
| `--text-primary` | `#F4F4F2` | Headings & important text |
| `--text-secondary` | `#A7A7A2` | Body text |
| `--border` | `#292A2B` | All borders & dividers |
| `--accent` | `#C8A97E` | Champagne accent — used sparingly |

Fonts: **Inter** (body) + **Playfair Display** (display headings)

## 📄 Resume Link

Update `resumeUrl` in `src/data/portfolioData.js` to point to your resume PDF:

```js
resumeUrl: "https://your-resume-url.com/resume.pdf",
```

## 🗂 Project Structure

```
src/
  components/
    Navbar.jsx / Navbar.css
    Footer.jsx / Footer.css
  sections/
    Hero.jsx / Hero.css
    About.jsx / About.css
    Skills.jsx / Skills.css
    Projects.jsx / Projects.css
    Experience.jsx / Experience.css
    Education.jsx / Education.css
    Certifications.jsx / Certifications.css
    Profiles.jsx / Profiles.css
    Contact.jsx / Contact.css
  data/
    portfolioData.js    <- All content lives here
  hooks/
    useScrollReveal.js
    useNavScroll.js
  index.css
  App.jsx
  main.jsx
public/
  profile.jpg           <- Add your photo here
  favicon.svg
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npx vercel
```

### Netlify
Drag and drop the `dist/` folder after running `npm run build`.

## 📱 Responsive Breakpoints

Tested at: 1440 / 1280 / 1024 / 900 / 768 / 480 / 390 / 360px
