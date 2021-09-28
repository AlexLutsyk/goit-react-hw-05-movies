import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchTrendingMovies } from "../../API/API";

import s from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!movies) {
      return;
    }
    fetchTrendingMovies(1).then((response) => {
      setMovies(response.results);
    });
  }, []);

  return (
    <div className={s.homePageWrapper}>
      <h1 className={s.homePageHeader}>Trending Today.</h1>

      <ul className={s.movieList}>
        {movies.map((movie) => (
          <li className={s.movieItem} key={movie.id}>
            <Link className={s.movieItems} to={`movies/${movie.id}`}>
              {movie.title ? movie.title : movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
