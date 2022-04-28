import movie from "./movie.json";
import styles from "./MovieDetails.module.css";

export default function MovieDetails() {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.MovieDetailsContainer}>
      <img
        className={`${styles.movieImage} ${styles.movieDetails}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={styles.movieDetails}>
        <p className={styles.firstP}>
          <strong>Title: </strong>
          {movie.title}
        </p>
        <strong>Genres: </strong>
        {movie.genres.map((genre) => genre.name).join(", ")}
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
