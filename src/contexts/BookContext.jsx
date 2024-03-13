import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Changed import statement
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Bookd one", author: "Author one", id: 1 },
    { title: "Bookd two", author: "Author tow", id: 2 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
