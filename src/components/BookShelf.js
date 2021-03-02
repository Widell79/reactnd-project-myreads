import React from "react";
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
        <button onClick={() => this.setState({ showSearchPage: true })}>
          Add a book
        </button>
      </div>
    </div>
  );
};

export default BookShelf;
