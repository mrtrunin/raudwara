import React, { useState, useEffect } from "react";
import { getBooks } from "../../api/api";
import { Book } from "../Book/Book.model";

const Write = () => {
  const [books, setBooks] = useState<Book[] | null>(null);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = () => {
    getBooks().then(books => {
      setBooks(books);
    });
  };

  if (!books) {
    return <div>No books</div>;
  }

  return (
    <div>
      {books.map((book, i) => {
        return (
          <div key={`book:${i}`}>
            <h2>{book.title}</h2>
            <ul>
              {book.chapters.map((chapter, j) => {
                return (
                  <li key={`chapter:${j}`}>
                    <a href={`/write/chapter/${chapter._id}`}>
                      {chapter.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Write;
