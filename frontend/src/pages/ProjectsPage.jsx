import 'css/pages/projects.css';

import { projects } from '@/data/projectsData';
import ProjectCard from '@/components/projects/ProjectCard';

export default function ProjectsPage() {
  return (
    <main className="page">
      <h1 className="page-title">Projects</h1>
      <p className="page-intro">
        Hands-on cloud security, identity, and automation work. Every project links to
        its source on GitHub.
      </p>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
