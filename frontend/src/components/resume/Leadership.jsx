import { resumeData } from '@/data/resumeData';
import Section from './Section';
import Entry from './Entry';

export default function Leadership() {
  return (
    <Section id="leadership" title="Leadership & Activities">
      {resumeData.leadership.map((item) => (
        <Entry key={item.id} title={`${item.organization} - ${item.role}`} />
      ))}
    </Section>
  );
}
