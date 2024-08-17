import { Link } from "react-router-dom";
import { Movie } from "./Movie";
import { SyntheticEvent } from "react";

interface MovieTableRowProps {
  movie: Movie;
  onRemove: (movie: Movie) => void;
}

function MovieTableRow({ movie, onRemove }: MovieTableRowProps) {
  return (
    <tr>
      <td>
        <Link to={`/movies/detail/${movie.id}`}>{movie.title}</Link>
      </td>
      <td>
        {movie.genre} ({movie.year})
      </td>
      <td>{movie.rating}</td>
      <td>{movie.director}</td>
      <td>
        ${movie.budgetInMillions} {movie.budgetInMillions && "million"}
      </td>
      <td>
        <div className="d-flex gap-2">
          <Link className="small" to={`/movies/edit/${movie.id}`}>
            edit
          </Link>
          |
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
      </td>
    </tr>
  );
}

export default MovieTableRow;
