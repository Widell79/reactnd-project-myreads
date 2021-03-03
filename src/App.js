import React from "react";
import { Route } from "react-router-dom";
import BookShelf from "./components/BookShelf";
import Search from "./components/Search";

import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
    search: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((resp) => {
      window.location.reload();
    });
  };

  searchBook = (query) => {
    BooksAPI.search(query).then((resp) => {
      if (query.length === 0 || resp.error) {
        this.setState((currState) => ({
          ...currState,
          search: [],
        }));
      } else {
        this.setState((currState) => ({
          ...currState,
          search: resp,
        }));
      }
    });
  };

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <Route
            exact
            path="/"
            render={() => (
              <BookShelf
                books={this.state.books}
                updateShelf={(book, shelf) => {
                  this.updateBookShelf(book, shelf);
                }}
              />
            )}
          />

          <Route
            path="/search"
            render={() => (
              <Search
                currentBooks={this.state.books}
                searchedBooks={this.state.search}
                searchBook={(query) => {
                  this.searchBook(query);
                }}
                updateShelf={(book, shelf) => {
                  this.updateBookShelf(book, shelf);
                }}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default BooksApp;
