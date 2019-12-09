import { Chapter } from "../Chapter/Chapter.model";

export interface Book {
  title: string;
  icon?: string;
  chapters: Chapter[];
}

export interface BookList {
  books: Book[];
}
