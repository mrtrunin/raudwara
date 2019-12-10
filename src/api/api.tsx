import { Chapter } from "../components/Chapter/Chapter.model";
import axios from "axios";
import { Book } from "../components/Book/Book.model";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const CHAPTERS_URL = `${BASE_URL}/chapters`;
const BOOKS_URL = `${BASE_URL}/books`;
const BOOK_BY_CHAPTER_ID_URL = `${BASE_URL}/books/getBookByChapterId`;
const LOGIN_URL = `${BASE_URL}/auth/login`;

export async function getChapters(): Promise<Chapter[]> {
  return await axios.get(CHAPTERS_URL).then(res => res.data);
}

export async function getBooks(): Promise<Book[]> {
  return await axios.get(BOOKS_URL).then(res => res.data);
}

export async function getChapter(id: string): Promise<Chapter> {
  return await axios.get(`${CHAPTERS_URL}/${id}`).then(res => res.data);
}

export async function getBookByChapterId(chapterId: string): Promise<Book> {
  return await axios
    .get(`${BOOK_BY_CHAPTER_ID_URL}/${chapterId}`)
    .then(res => res.data);
}

export async function login(
  username: string,
  password: string
): Promise<{ access_token: string }> {
  return await axios
    .post(`${LOGIN_URL}`, {
      username,
      password
    })
    .then(res => res.data);
}
