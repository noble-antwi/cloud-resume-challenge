
import Header from '../components/Header';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Publications from '../components/Publications';

export default function Home() {
  return (
    <div className="center-wrapper">
      <main className="main-content">
        <Header />
        <Education />
        <Skills />
        <Experience />
        <Certificates />
        <Publications />
      </main>
    </div>
  );
}
