# Frontend Technical Specification

A responsive, mobile-first resume website built with React and Vite.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 5
- **Styling**: Pure CSS with CSS Variables (mobile-first approach)
- **CSS Processing**: PostCSS with nesting support
- **Routing**: React Router DOM

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:5173` to view the resume.

### Production Build

```bash
npm run build
npm run preview  # Preview the production build
```

## Project Structure

```
frontend/
├── public/
│   └── images/           # Background images
├── src/
│   ├── components/
│   │   └── Navbar.jsx    # Responsive navigation with hamburger menu
│   ├── pages/
│   │   └── Home.jsx      # Main resume content
│   ├── styles/
│   │   ├── variables.css    # CSS custom properties & design tokens
│   │   ├── mobile.css       # Base mobile-first styles
│   │   ├── breakpoints.css  # Tablet & desktop responsive overrides
│   │   ├── accessibility.css # Reduced motion & high contrast support
│   │   └── style.css        # Additional component styles
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css         # CSS imports orchestration
├── postcss.config.js     # PostCSS configuration for CSS nesting
├── vite.config.js
└── package.json
```

## CSS Architecture

### Mobile-First Approach

Styles are organized following a mobile-first methodology:

1. **variables.css** - Design tokens (colors, typography, spacing)
2. **mobile.css** - Base styles optimized for mobile devices
3. **breakpoints.css** - Progressive enhancements for larger screens
4. **accessibility.css** - User preference support (reduced motion, high contrast)
5. **style.css** - Additional component-specific styles

### Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| Base (default) | Mobile phones |
| `640px` | Tablets |
| `1024px` | Desktop |
| `1440px` | Large desktop |

### Design System

#### Color Palette

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-primary` | `#1e3a5f` | Headers, accents |
| `--color-primary-light` | `#2d5a8c` | Hover states |
| `--color-accent-teal` | `#06b6d4` | Highlights |
| `--color-text-dark` | `#1f2937` | Body text |
| `--color-text-light` | `#6b7280` | Secondary text |

#### Typography

- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Font Sizes**: `0.875rem` to `2rem` (responsive)
- **Font Weights**: 500 (medium), 600 (semibold), 700 (bold)

#### Spacing Scale

```css
--spacing-xs: 0.25rem   /* 4px */
--spacing-sm: 0.5rem    /* 8px */
--spacing-md: 1rem      /* 16px */
--spacing-lg: 1.5rem    /* 24px */
--spacing-xl: 2rem      /* 32px */
--spacing-2xl: 2.5rem   /* 40px */
```

## Features

### Responsive Navigation

- **Mobile**: Hamburger menu with slide-down dropdown
- **Desktop**: Horizontal navigation bar with hover effects
- Smooth transitions and accessible focus states

### Accessibility

- WCAG-compliant color contrast
- Keyboard navigation support
- `prefers-reduced-motion` support
- `prefers-contrast: more` support
- Visible focus indicators

### Performance

- No CSS frameworks (minimal bundle size)
- Efficient CSS selectors
- Hardware-accelerated animations
- Optimized for Core Web Vitals

## Resume Format

Based on the [Illinois Institute of Technology Resume Template](https://www.iit.edu/sites/default/files/2023-03/new_sample_resume_iltech_1.doc).

### Sections

- Header (Name, Contact, Links)
- Education
- Skills
- Work Experience
- Certificates
- Publications
- Leadership & Activities

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Recent Updates (January 2026)

### Mobile-First Refactor
- Migrated from static HTML to React + Vite
- Implemented mobile-first CSS architecture
- Added collapsible hamburger menu for mobile navigation
- Split CSS into modular files for better maintainability

### CSS Improvements
- Added PostCSS for CSS nesting support
- Implemented CSS custom properties for theming
- Added accessibility stylesheets for user preferences
- Fixed CSS syntax errors that prevented app loading
