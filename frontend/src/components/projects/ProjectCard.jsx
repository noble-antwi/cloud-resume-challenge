export default function ProjectCard({ project }) {
  const { name, description, tags, repo } = project;

  return (
    <article className="project-card">
      <h2>
        <a href={repo} target="_blank" rel="noreferrer">
          {name}
        </a>
      </h2>
      <p>{description}</p>
      <ul className="project-tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}
