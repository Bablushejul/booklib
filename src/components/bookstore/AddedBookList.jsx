import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./AddedBookList.module.css";

function AddedBookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://68.178.162.203:8080/application-test-v1.1/books"
        );
        setBooks(response.data);
       setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
       setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className={classes.bookdata}>
      <h1 className={classes.search}>Welcome To Book Store</h1>
      <ul className={classes.booklist}>
        {books.data.map((book) => (
          <li key={book.id} className={classes.bookcontainer}>
            <h2>Title: {book.title}</h2>
            <div className={classes.borderline}></div>
            <img src={book.link} alt={book.title} className={classes.image} />

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
    </div>
  );
}

export default AddedBookList;
