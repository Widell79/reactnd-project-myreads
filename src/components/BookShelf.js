import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const BookShelf = ({ books, updateShelf }) => {
  const bookShelfs = ["Currently Reading", "Want to Read", "Read"];
  const convertShelf = {
    "Currently Reading": "currentlyReading",
    "Want to Read": "wantToRead",
    Read: "read",
  };

  return (
    <div className="list-books-content">
      <div>
        {bookShelfs.map((shelf) => (
          <div key={shelf} className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter(function(book) {
                    return book.shelf === convertShelf[shelf];
                  })
                  .map((book) => {
                    const background = `url(${
                      book.imageLinks ? book.imageLinks.thumbnail : "./bg.png"
                    })`;
                    return (
                      <Book
                        image={background}
                        bookTitle={book.title}
                        bookAuthor={book.authors}
                        key={book.id}
                        updateShelf={updateShelf}
                        id={book.id}
                        shelf={book.shelf}
                      />
                    );
                  })}
              </ol>
            </div>
          </div>
        ))}
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
