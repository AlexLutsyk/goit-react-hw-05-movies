import { useState } from "react";

import s from "./SearchFilm.module.css";

export default function SearchFilm({ onSubmit }) {
  const [searchFilm, setSearchFilm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchFilm.trim() === "") {
      alert("Please enter new movie name.");
      return;
    }

    onSubmit(searchFilm);
    setSearchFilm("");
  };

  const onHandleChange = (event) => {
    setSearchFilm(event.target.value);
  };

  return (
    <div className={s.SearchFilmWrapper}>
      <form className={s.SearchFilm} onSubmit={handleSubmit}>
        <input
          className={s.SearchFilmInput}
          value={searchFilm}
          onChange={onHandleChange}
          type="text"
        />
        <button tupe="submit" className={s.btn}>
          Search Film
        </button>
      </form>
    </div>
  );
}
