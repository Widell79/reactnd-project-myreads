import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const BookShelf = (props) => {
  return (
    <div className="bookshelf-books">
      <div className="list-books-content">
        <h2>Currently Reading</h2>
        <ol className="books-grid">
          {props.books.map((book) => (
            <Book
              image={book.imageLinks}
              bookTitle={book.title}
              bookAuthor={book.authors}
              key={book.id}
            />
          ))}
        </ol>
      </div>
      <div className="list-books-content">
        <h2>Want to Read</h2>
        <ol className="books-grid">
          {props.books.map((book) => (
            <Book
              image={book.imageLinks}
              bookTitle={book.title}
              bookAuthor={book.authors}
              key={book.id}
            />
          ))}
        </ol>
      </div>
      <div className="list-books-content">
        <h2>Read</h2>
        <ol className="books-grid">
          {props.books.map((book) => (
            <Book
              image={book.imageLinks}
              bookTitle={book.title}
              bookAuthor={book.authors}
              key={book.id}
            />
          ))}
        </ol>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

export default BookShelf;
