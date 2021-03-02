import React from "react";
import BookList from "./components/BookList";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <BookList
            bookshelfTitle="Currently Reading"
            books={this.state.books}
          />
          <BookList bookshelfTitle="Want to Read" books={this.state.books} />
          <BookList bookshelfTitle="Read" books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default BooksApp;
