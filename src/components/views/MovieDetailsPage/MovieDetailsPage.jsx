import { useState, useEffect } from "react";
import {
  useParams,
  useHistory,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import { fetchMovieDetails } from "../../../API/API";
import Card from "../../Card/Card";
import AdditaionInfo from "../../AdditationInfo/AdditationInfo";
import s from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(setMovie)
      .catch((err) => err.message || err);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? "/");
  };

  return (
    <>
      {movie ? (
        <div className={s.detailsWrapper}>
          <button className={s.btn} onClick={onGoBack}>
            Go Back
          </button>
          <Card movie={movie} />
          <AdditaionInfo movieId={movieId} url={url} path={path} />
        </div>
      ) : (
        <div>
          <button className={s.btn} type="button" onClick={onGoBack}>
            Go Back
          </button>
          <h2>Sorry this film is not available.</h2>
        </div>
      )}
    </>
  );
}
