import AddBookForm from "./components/addbookform/AddBookForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import { buttonActions } from "./components/store/button-slice";
import SearchForm from "./components/addbookform/SearchForm.jsx";
import AddedBookList from "./components/bookstore/AddedBookList.jsx";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isclick = useSelector((state) => state.book.isAllowed);

  const clickHand = () => {
    dispatch(buttonActions.addbook());
  };
  console.log(isclick);

  return (
    <div className="app">
      <SearchForm />
      {!isclick && (
        <button onClick={clickHand} className="btn">
          Add New Book
        </button>
      )}
      {isclick && <AddBookForm />}
      <AddedBookList />
    </div>
  );
}

export default App;
