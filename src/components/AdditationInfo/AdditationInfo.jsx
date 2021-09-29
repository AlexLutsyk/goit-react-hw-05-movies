import { Link, Route, Switch, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import s from "./AdditationInfo.module.css";
// import Cast from "../Cast/Cast";
// import Reviews from "../Reviews/Reviews";

const Cast = lazy(() =>
  import("../Cast/Cast.jsx" /* webpackChunkName: 'Cast' */)
);

const Reviews = lazy(() =>
  import("../Reviews/Reviews.jsx" /* webpackChunkName: 'Reviews' */)
);

export default function AdditationInfo({ movieId, url, path }) {
  const location = useLocation();

  console.log(location);
  return (
    <div className={s.AdditationInfoWrapper}>
      <h2>Additaional information:</h2>
      <ul>
        <li>
          <Link
            to={{
              pathname: `${url}/cast`,
              state: {
                from: location?.state?.from ?? "/",
              },
            }}
            className={s.AdditationInfoLink}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            className={s.AdditationInfoLink}
            to={{
              pathname: `${url}/reviews`,
              state: {
                from: location?.state?.from ?? "/",
              },
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense
        fallback={
          <Loader
            type="Watch"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        }
      >
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast movieId={movieId} />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
