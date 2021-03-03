import React from "react";
import { Link } from "react-router-dom";

import Book from "./Book";

const Search = ({ currentBooks, searchedBooks, searchBook, updateShelf }) => {
  const updateSearch = (e) => {
    const value = e.target.value;
    // this.setState({ search: value });
    if (value && value.length > 0) searchBook(value);
  };

  return (
    <div className="bookshelf-books">
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              onChange={updateSearch}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.map((book, key) => {
              const bookOnShelf = currentBooks.find(({ id }) => id === book.id);
              const shelf = bookOnShelf ? bookOnShelf.shelf : "none";
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
                  shelf={shelf}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Search;
