import { resumeData } from '@/data/resumeData';
import Section from './Section';
import Entry from './Entry';

export default function Certifications() {
  return (
    <Section id="certificates" title="Certifications">
      {resumeData.certificates.map((cert) => (
        <Entry key={cert.id} title={cert.title} location={cert.issuer} date={cert.date} />
      ))}
    </Section>
  );
}
