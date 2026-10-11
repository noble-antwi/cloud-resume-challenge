import { Link, useParams } from 'react-router-dom';
import 'css/pages/projects.css';

import { findProject } from '@/data/projectsData';
import ProjectImage from '@/components/projects/ProjectImage';
import NotFoundPage from './NotFoundPage';

// One project's details, at /projects/:slug.
export default function ProjectPage() {
  const { slug } = useParams();
  const project = findProject(slug);

  if (!project) {
    return <NotFoundPage />;
  }

  const { name, description, tags, repo } = project;

  return (
    <main className="page project-detail">
      <Link to="/projects" className="back-link">
        ← All projects
      </Link>
      <h1 className="page-title">{name}</h1>
      <ProjectImage project={project} className="project-image-large" />
      <p>{description}</p>
      <ul className="project-tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <a href={repo} target="_blank" rel="noreferrer" className="pill-button">
        View Source on GitHub
      </a>
    </main>
  );
}
