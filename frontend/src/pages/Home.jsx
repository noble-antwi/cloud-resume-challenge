import Header from '../components/Header';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Certificates from '../components/Certificates';
import Publications from '../components/Publications';
import Leadership from '../components/Leadership';

export default function Home() {
  return (
    <main className="page" id="resume">
      <Header />
      <Education />
      <Experience />
      <Skills />
      <Certificates />
      <Publications />
      <Leadership />
    </main>
  );
}
