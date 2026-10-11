export default function Section({ id, title, children }) {
  return (
    <section id={id} className="resume-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
