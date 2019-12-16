export interface Section {
  _id: string;
  type: string;
  title?: string;
  content?: string;
  filename?: string;
  alt?: string;
}

export interface SectionProps {
  section: Section;
}
