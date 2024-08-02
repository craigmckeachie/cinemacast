import { Link } from "react-router-dom";
import MovieList from "./MovieList";

function MoviesPage() {
  return (
    <>
      <nav>
        <h4>Movies</h4>
        <Link to={"/movies/create"} role="button1" className="secondary">
          Add Movie
        </Link>
      </nav>

      <hr />
      <MovieList />
    </>
  );
}

export default MoviesPage;
