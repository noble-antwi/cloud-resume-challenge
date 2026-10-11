import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="page">
      <h1 className="page-title">Page not found</h1>
      <p>
        That page does not exist. <Link to="/">Go back home</Link>.
      </p>
    </main>
  );
}
