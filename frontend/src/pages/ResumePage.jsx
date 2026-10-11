import 'css/pages/resume.css';

import ResumeHeader from '@/components/resume/ResumeHeader';
import Education from '@/components/resume/Education';
import Experience from '@/components/resume/Experience';
import Skills from '@/components/resume/Skills';
import Certifications from '@/components/resume/Certifications';
import Publications from '@/components/resume/Publications';
import Leadership from '@/components/resume/Leadership';

export default function ResumePage() {
  return (
    <main className="page">
      <ResumeHeader />
      <Education />
      <Experience />
      <Skills />
      <Certifications />
      <Publications />
      <Leadership />
    </main>
  );
}
