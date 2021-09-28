import { useState, useEffect } from "react";
import { fetchMovieCredits } from "../API/API";

import s from "./Cast.module.css";

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId).then((response) => {
      if (response.cast.length === 0) return;
      setCast(response.cast);
    });
  }, [movieId]);
  return (
    <>
      {cast ? (
        <ul className={s.castList}>
          {cast.map((actorInfo) => (
            <li key={actorInfo.id} className={s.castItems}>
              <img
                className={s.profileImg}
                src={
                  actorInfo.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actorInfo.profile_path}`
                    : "https://upload.wikimedia.org/wikipedia/commons/9/9e/Box_Art_Not_Available.png"
                }
                alt={actorInfo.name}
              />
              <h2>{actorInfo.name}</h2>
              <p>Character: {actorInfo.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There no information.</p>
      )}
    </>
  );
}
