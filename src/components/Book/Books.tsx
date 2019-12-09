import React, { useState, useEffect } from "react";
import BooksList from "./BooksList";
import { getBooks } from "../../api/api";
import { Book } from "./Book.model";

const Books = () => {
  const [books, setBooks] = useState<Book[] | null>(null);

  useEffect(() => {
    getBooks().then(res => {
      setBooks(res);
    });
  }, []);

  if (!books) {
    return <div>No books</div>;
  }

  return <BooksList books={books} />;
};

export default Books;
