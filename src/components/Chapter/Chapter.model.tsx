import { Section } from "../Sections/Section.model";

export interface ChapterProps {
  chapter: Chapter;
  previousChapter?: Chapter;
  nextChapter?: Chapter;
}

export interface Chapter {
  _id: string;
  title: string;
  sections: Section[];
}

export interface ChapterContentProps {
  titlesize?: 1 | 2 | 3 | 4 | undefined;
  chapter: Chapter;
  previousChapter?: Chapter;
  nextChapter?: Chapter;
  onSectionsChange: (sections: Section[]) => void;
  saveChapter: () => void;
  createNewSection: (section: Section) => void;
}
