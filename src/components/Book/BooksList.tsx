import React from "react";
import { BookList } from "../../components/Book/Book.model";

const BooksList = ({ books }: BookList) => {
  if (!books) {
    return <div>No books</div>;
  }

  return (
    <>
      {books.map((book, i) => {
        return (
          <div key={i}>
            <h2 key={`book-title:${i}`}>{book.title}</h2>
            <ul key={`book-list:${i}`}>
              {book.chapters.map((chapter, j) => {
                return (
                  <li key={`chapter:${j}`}>
                    <a href={`chapter/${chapter._id}`}>{chapter.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default BooksList;
