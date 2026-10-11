# Cloud Resume Challenge

A full-stack cloud-native resume website built as part of the [Cloud Resume Challenge](https://cloudresumechallenge.dev/).

## About

This project demonstrates cloud engineering skills by building and deploying a professional resume website with:

- Static frontend hosted on cloud infrastructure
- Serverless backend API
- Infrastructure as Code (IaC)
- CI/CD automation

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND                                 │
│  ┌─────────┐    ┌──────────────┐    ┌─────────────────────┐    │
│  │ React + │───▶│ S3 Static   │───▶│ CloudFront CDN     │    │
│  │ Vite    │    │ Hosting      │    │ (HTTPS + Caching)  │    │
│  └─────────┘    └──────────────┘    └─────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                         BACKEND                                  │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────┐     │
│  │ API Gateway │───▶│ Lambda      │───▶│ DynamoDB        │     │
│  │ (REST API)  │    │ (Python)    │    │ (Visitor Count) │     │
│  └─────────────┘    └─────────────┘    └─────────────────┘     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      INFRASTRUCTURE                              │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Terraform / AWS SAM (Infrastructure as Code)            │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

## Project Structure

```
cloud-resume-challenge/
├── frontend/          # React + Vite website (Home, Resume, Projects)
│   ├── public/        # Files served as-is (favicon, background)
│   ├── src/
│   │   ├── assets/stylesheets/   # default, breakpoints, one file per page
│   │   ├── components/           # layout/, resume/, projects/
│   │   ├── data/                 # resume and project content
│   │   ├── pages/                # one component per route
│   │   ├── Layout.jsx            # shared top bar + page outlet
│   │   └── main.jsx              # router and global styles
│   └── README.md      # Frontend documentation
├── docs/reference/    # IIT resume format used as the content guide
├── backend/           # Lambda functions (coming soon)
├── infrastructure/    # Terraform/SAM templates (coming soon)
└── README.md          # This file
```

## Tech Stack

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite 5
- **Routing**: React Router 7
- **Styling**: Plain CSS, one stylesheet per page
- **CSS Processing**: PostCSS

### Backend (Planned)
- **Runtime**: Python 3.x
- **API**: AWS API Gateway
- **Compute**: AWS Lambda
- **Database**: AWS DynamoDB

### Infrastructure (Planned)
- **IaC**: Terraform or AWS SAM
- **Hosting**: AWS S3 + CloudFront
- **DNS**: Route 53
- **SSL**: AWS Certificate Manager

### CI/CD (Planned)
- **Pipeline**: GitHub Actions
- **Testing**: pytest, Cypress
- **Deployment**: Automated on push to main

## Progress

| Phase | Status |
|-------|--------|
| Resume HTML/CSS | Completed |
| React Migration | Completed |
| Mobile Responsive Design | Completed |
| Home / Resume / Projects pages | Completed |
| S3 Static Hosting | Planned |
| CloudFront CDN | Planned |
| Custom Domain + HTTPS | Planned |
| Visitor Counter API | Planned |
| DynamoDB Backend | Planned |
| Infrastructure as Code | Planned |
| CI/CD Pipeline | Planned |

## Getting Started

### Frontend Development

```bash
cd frontend
npm ci
npm run dev
```

Visit `http://localhost:5173` to view the resume.

### Production Build

```bash
cd frontend
npm run build
```

## Challenge Requirements

Based on the [Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/):

1. **Certification** - AWS Cloud Practitioner (or higher)
2. **HTML** - Resume written in HTML
3. **CSS** - Styled with CSS
4. **Static Website** - Deployed to S3
5. **HTTPS** - CloudFront distribution
6. **DNS** - Custom domain with Route 53
7. **JavaScript** - Visitor counter
8. **Database** - DynamoDB for counter
9. **API** - API Gateway + Lambda
10. **Python** - Lambda function in Python
11. **Tests** - Python tests for Lambda
12. **Infrastructure as Code** - Terraform or SAM
13. **CI/CD (Backend)** - Automated deployment
14. **CI/CD (Frontend)** - Automated deployment
15. **Blog Post** - Document the journey

## Author

**Noble W. Antwi**
- LinkedIn: [noble-antwi-worlanyo](https://linkedin.com/in/noble-antwi-worlanyo)
- GitHub: [noble-antwi](https://github.com/noble-antwi)
- Portfolio: [noble-antwi.github.io](https://noble-antwi.github.io/)

## License

This project is for educational and portfolio purposes as part of the Cloud Resume Challenge.
