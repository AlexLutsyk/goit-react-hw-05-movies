import { useState, useEffect } from "react";
import { Link, useRouteMatch, useLocation, useHistory } from "react-router-dom";
import { fetchByKeyWord } from "../../../API/API";
import SearchFilm from "../../SearchFilm/SearchFilm";

import s from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [searchFilm, setSearchFilm] = useState("");
  const [movies, setMovies] = useState(null);

  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();

  const query = new URLSearchParams(location.search).get("query");

  const handleSubmit = (searchFilm) => {
    setSearchFilm(searchFilm);
  };

  useEffect(() => {
    if (location.search !== "") {
      setSearchFilm(query);
    }
    if (!searchFilm) return;
    fetchByKeyWord(searchFilm, 1).then((response) => {
      if (response.results.length === 0) return;
      history.push({ ...location, search: `query=${searchFilm}` });
      setMovies(response.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchFilm]);

  return (
    <>
      <SearchFilm onSubmit={handleSubmit} />
      {movies && (
        <div className={s.moviesSearchWrapper}>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link className={s.movieLink} to={`${url}/${movie.id}`}>
                  <p className={s.movieTitle}>{movie.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
