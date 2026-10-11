import { resumeData } from '../data/resumeData';
import Section from './Section';
import Entry from './Entry';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      {resumeData.experience.map((job) => (
        <Entry
          key={job.id}
          title={`${job.company} - ${job.title}`}
          location={job.location}
          date={job.period}
          bullets={job.responsibilities}
        />
      ))}
    </Section>
  );
}
