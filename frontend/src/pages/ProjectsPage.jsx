import 'css/pages/projects.css';

import { projects } from '@/data/projectsData';
import ProjectCard from '@/components/projects/ProjectCard';

export default function ProjectsPage() {
  return (
    <main className="page">
      <h1 className="visually-hidden">Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
