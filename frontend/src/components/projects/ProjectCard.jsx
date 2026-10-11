import { Link } from 'react-router-dom';
import ProjectImage from './ProjectImage';

export default function ProjectCard({ project }) {
  const { name, description, slug } = project;

  return (
    <article className="project-card">
      <div className="project-card-body">
        <h2>{name}</h2>
        <p>{description}</p>
        <Link to={`/projects/${slug}`} className="pill-button">
          View Project Details
        </Link>
      </div>
      <ProjectImage project={project} />
    </article>
  );
}
