// The project's screenshot, or a grey 320 x 200 placeholder until one is added.
export default function ProjectImage({ project, className = '' }) {
  if (project.image) {
    return (
      <img
        className={`project-image ${className}`}
        src={project.image}
        alt={`${project.name} screenshot`}
        width="320"
        height="200"
      />
    );
  }

  return (
    <div className={`project-image project-image-placeholder ${className}`} aria-hidden="true">
      320 × 200
    </div>
  );
}
