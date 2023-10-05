import React, { useRef } from "react";
import classes from "./AddBookForm.module.css";
import { useDispatch } from "react-redux";
import { buttonActions } from "../store/button-slice";

const AddBookForm = () => {
  const authorInputRef = useRef();
  const countryInputRef = useRef();
  const languageInputRef = useRef();
  const linkInputRef = useRef();
  const pagesInputRef = useRef();
  const titleInputRef = useRef();
  const yearInputRef = useRef();

  const dispatch = useDispatch();

  const id = Math.random(Math.round() * 10000000);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;
    const enteredLanguage = languageInputRef.current.value;
    const enteredLink = linkInputRef.current.value;
    const enteredPages = pagesInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredYear = yearInputRef.current.value;

    try {
      const response = await fetch(
        "http://68.178.162.203:8080/application-test-v1.1/books",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            author: enteredAuthor,
            country: enteredCountry,
            language: enteredLanguage,
            link: enteredLink,
            pages: enteredPages,
            title: enteredTitle,
            year: enteredYear,
            id: id,
          }),
        }
      );

      if (response.ok) {
        console.log("Book data was successfully posted.");
      } else {
        console.error("Failed to post book data.");
      }
    } catch (error) {
      console.error("Error posting book data:", error);
    }

    dispatch(buttonActions.addbook());
  };

  return (
    <div className={classes.book}>
      <form className={classes.addbookform} onSubmit={submitHandler}>
        <label className={classes.label}>Author</label>
        <input
          type="text"
          placeholder="Enter Author Name"
          className={classes.input}
          ref={authorInputRef}
          required
        />
        <label className={classes.label}>Country</label>
        <input
          type="text"
          placeholder="Enter Country Name"
          className={classes.input}
          ref={countryInputRef}
          required
        />
        <label className={classes.label}>Language</label>
        <input
          type="text"
          placeholder="Enter Language Name"
          className={classes.input}
          ref={languageInputRef}
          required
        />
        <label className={classes.label}>Link</label>
        <input
          type="url"
          placeholder="Enter Link"
          className={classes.input}
          ref={linkInputRef}
          required
        />
        <label className={classes.label}>Pages</label>
        <input
          type="number"
          placeholder="Enter Pages"
          className={classes.input}
          ref={pagesInputRef}
          required
        />
        <label className={classes.label}>Title</label>
        <input
          type="text"
          placeholder="Enter Title Name"
          className={classes.input}
          ref={titleInputRef}
          required
        />
        <label className={classes.label}>Year</label>
        <input
          type="number"
          placeholder="Enter Year"
          className={classes.input}
          ref={yearInputRef}
          required
        />
        <button className={classes.button}>Add Book IN List</button>
      </form>
    </div>
  );
};

export default AddBookForm;
