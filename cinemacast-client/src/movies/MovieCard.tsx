import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Movie } from "./Movie";
import { movieAPI } from "./MovieAPI";
import { SyntheticEvent } from "react";

interface MovieCardProps {
  movie: Movie;
  onRemove: (movie: Movie) => void;
}

function MovieCard({ movie, onRemove }: MovieCardProps) {
  return (
    <article className="card p-4" key={movie.id}>
      <strong>{movie.title}</strong>
      <small>
        Genre: {movie.genre} ({movie.year})
      </small>
      <small></small>
      <small>Rating: {movie.rating}</small>
      <small>Director: {movie.director}</small>
      <div className="d-flex justify-content-between">
        <Link className="small" to={`/movies/edit/${movie.id}`}>
          edit
        </Link>
        <a
          className="small"
          onClick={(event: SyntheticEvent) => {
            event.preventDefault();
            onRemove(movie);
          }}
        >
          delete
        </a>
      </div>
    </article>
  );
}

export default MovieCard;
