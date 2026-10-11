import { resumeData } from '@/data/resumeData';
import Section from './Section';
import Entry from './Entry';

export default function Education() {
  return (
    <Section id="education" title="Education">
      {resumeData.education.map((edu) => (
        <Entry
          key={edu.id}
          title={edu.school}
          location={edu.location}
          subtitle={edu.degree}
          date={edu.period}
        />
      ))}
    </Section>
  );
}
