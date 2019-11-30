export interface Paragraph {
  type: string;
  content: string;
}

export interface ContentResponse {
  title: string;
  content: Paragraph[];
}
