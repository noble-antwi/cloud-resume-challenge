# Frontend

The resume website: a React + Vite app with three pages (Home, Resume, Projects), styled as a printed resume on handmade paper.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 5
- **Routing**: React Router 7
- **Styling**: Plain CSS, one shared stylesheet plus one per page
- **Linting**: ESLint 9

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install

```bash
cd frontend
npm ci
```

Use `npm ci`, not `npm install`. It installs the exact versions in `package-lock.json`, so the build behaves the same on every machine.

### Run locally

```bash
npm run dev
```

Open `http://localhost:5173`.

### Check and build

```bash
npm run lint      # code checks, must pass before pushing
npm run build     # production build into dist/
npm run preview   # serve dist/ locally
```

## Project Structure

```
frontend/
├── index.html                    # page shell: title, favicon, description
├── public/                       # served as-is at the site root
│   ├── favicon.svg
│   └── images/paper.png          # tiled background texture
├── src/
│   ├── main.jsx                  # router + global stylesheets
│   ├── Layout.jsx                # top bar + current page
│   ├── pages/                    # one component per route
│   │   ├── HomePage.jsx          #   /
│   │   ├── ResumePage.jsx        #   /resume
│   │   ├── ProjectsPage.jsx      #   /projects
│   │   └── NotFoundPage.jsx      #   anything else
│   ├── components/
│   │   ├── layout/Navbar.jsx
│   │   ├── resume/               # ResumeHeader, Section, Entry, and one per resume section
│   │   └── projects/ProjectCard.jsx
│   ├── data/
│   │   ├── resumeData.js         # all resume content
│   │   └── projectsData.js       # all project content
│   └── assets/stylesheets/
│       ├── default.css           # base type, top bar, paper sheet, buttons
│       ├── breakpoints.css       # phone and print rules (loaded last)
│       └── pages/                # home.css, resume.css, projects.css
├── vite.config.js                # aliases: '@' = src, 'css' = src/assets/stylesheets
├── postcss.config.js
└── eslint.config.js
```

### Conventions

- **Content lives in `src/data/`.** To change what the site says, edit `resumeData.js` or `projectsData.js`. Components only handle layout.
- **Each page imports its own stylesheet**, for example `import 'css/pages/resume.css'`.
- **Import from `src` with `@`**, for example `import { resumeData } from '@/data/resumeData'`, instead of `../../`.
- **Resume entries use `Entry`**: bold title and location on the first row, subtitle and italic date on the second, and optional bullets.

## Adding a page

1. Create `src/pages/NewPage.jsx` and `src/assets/stylesheets/pages/new.css`.
2. Add a `<Route path="new" element={<NewPage />} />` in `src/main.jsx`.
3. Add a link to the `links` list in `src/components/layout/Navbar.jsx`.

## Hosting note

The pages are client-side routes. When this is deployed to S3 + CloudFront, set CloudFront to return `index.html` for 403/404 errors. Otherwise `/resume` and `/projects` fail when opened directly or refreshed.

## Resume Format

Content follows the Illinois Institute of Technology resume template, kept in `../docs/reference/`.
