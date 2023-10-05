import React, { useState } from "react";
import axios from "axios";
import classes from "./SearchForm.module.css";

function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "http://68.178.162.203:8080/application-test-v1.1/books",
        {
          params: {
            title: searchQuery,
          },
        }
      );

      if (response.status === 200) {
        setBooks(response.data.data);
      } else {
        //console.error("Error:", response.status);
      }
    } catch (error) {
      //console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className={classes.search}>Book Search</h1>
      <form onSubmit={handleSearch} className={classes.form}>
        <input
          type="text"
          placeholder="Enter book title"
          className={classes.input}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
        <button className={classes.btn}>Search</button>
      </form>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : books.length > 0 ? (
          <ul className={classes.booklist}>
            {books.map((book) => (
              <li key={book.id} className={classes.bookcontainer}>
                <h2>Title: {book.title}</h2>
                <div className={classes.borderline}></div>
                <img
                  src={book.link}
                  alt={book.title}
                  className={classes.image}
                />

                <div className={classes.container}>
                  <p>Country: {book.country}</p>
                  <p>Languge: {book.language}</p>
                </div>
                <div>Published Year: {book.year}</div>

                <div className={classes.borderline}></div>
                <div className={classes.footer}>
                  <p>Pages: {book.pages}</p>
                  <p>Author : {book.author}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchForm;
