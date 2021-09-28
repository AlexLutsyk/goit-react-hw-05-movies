import s from "./Card.module.css";

export default function Card({ movie }) {
  return (
    <div className={s.card}>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "https://upload.wikimedia.org/wikipedia/commons/9/9e/Box_Art_Not_Available.png"
        }
        alt={movie.title}
        className={s.cardPoster}
      />
      <div className={s.cardInfo}>
        <h2 className={s.cardTitle}>
          {movie.title} {movie.release_date}
        </h2>
        <p>User Score: {movie.vote_average * 10}%</p>
        <h3>Overwiew</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p> {movie.genres.map((genre) => genre.name)}</p>
      </div>
    </div>
  );
}
