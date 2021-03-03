import React from "react";

const Book = ({ image, bookTitle, bookAuthor, updateShelf, id, shelf }) => {
  const handleUpdate = (e) => {
    const value = e.target.value;
    updateShelf({ id }, value);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: image,
            }}
          />
          <div onChange={handleUpdate} className="book-shelf-changer">
            <select defaultValue={shelf === undefined ? "none" : shelf}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{bookAuthor}</div>
      </div>
    </li>
  );
};
export default Book;
