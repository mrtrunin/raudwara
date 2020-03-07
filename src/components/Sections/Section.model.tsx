export interface Section {
  _id: string;
  type: string;
  title?: string;
  content?: string;
  url?: string;
  alt?: string;
}

export interface SectionViewProps {
  section: Section;
}

export interface SectionEditProps {
  section: Section;
  onSectionChange: (section: Section, newSection?: Section) => void;
}
