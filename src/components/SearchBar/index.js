import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "../../images/search.png";
import styles from "./index.module.scss";

const SearchBar = () => {
  const navigate = useNavigate();
  const searchValue = React.useRef("");

  useEffect(() => {
    searchValue.current.focus();
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (searchValue.current.value) {
      navigate(`/items?search=${searchValue.current.value}`);
    }
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        name="value"
        placeholder="Nunca dejes de buscar"
        className={styles.form__input}
        ref={searchValue}
        autoComplete="off"
      />
      <button type="submit" className={styles.form__button} aria-label="Buscar">
        <img src={searchIcon} alt="search button" width="16" height="16" />
      </button>
    </form>
  );
};

export default SearchBar;
