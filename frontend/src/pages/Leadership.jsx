import { resumeData } from '../data/resumeData';

export default function Leadership() {
  const { leadership, personal } = resumeData;

  return (
    <main className="main-content">
      <header>
        <h1>{personal.name}</h1>
      </header>

      <section id="leadership">
        <h2>Leadership & Activities</h2>
        <ul>
          {leadership.map((item) => (
            <li key={item.id}>
              <strong>{item.role},</strong> {item.organization}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
