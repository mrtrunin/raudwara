export interface Paragraph {
  type: string;
  title?: string;
  content?: string;
  filename?: string;
  alt?: string;
}

export interface ContentResponse {
  title: string;
  content: Paragraph[];
}
