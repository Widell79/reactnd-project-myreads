import React from "react";
import Book from "./Book";

const BookList = ({ bookshelfTitle, books }) => {
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{bookshelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book) => (
                <Book
                  image={book.imageLinks}
                  bookTitle={book.title}
                  bookAuthor={book.authors}
                  key={book.id}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
