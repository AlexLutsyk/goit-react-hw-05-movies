import { Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";

import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
// import HomePage from './components/views/HomePage/HomePage';
// import MoviesPage from './components/views/MoviesPage/MoviesPage';
// import MovieDetailsPage from './components/views/MovieDetailsPage/MovieDetailsPage';
// import NotFound from './components/notFound/NotFound';

import "./App.css";

const HomePage = lazy(() =>
  import(
    "./components/views/HomePage/HomePage.jsx" /* webpackChunkName: 'HomePage' */
  )
);
const MoviesPage = lazy(() =>
  import(
    "./components/views/MoviesPage/MoviesPage.jsx" /* webpackChunkName: 'MoviesPage' */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "./components/views/MovieDetailsPage/MovieDetailsPage.jsx" /* webpackChunkName: 'MovieDetailsPage'*/
  )
);
const NotFound = lazy(() =>
  import("./components/notFound/NotFound.jsx" /* webpackChunk 'NotFound' */)
);

function App() {
  return (
    <Container>
      <AppBar />
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
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route path="/">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
