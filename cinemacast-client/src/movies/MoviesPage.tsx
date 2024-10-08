import { Link } from "react-router-dom";
import MovieList from "./MovieList";
import MovieTable from "./MovieTable";

function MoviesPage() {
  return (
    <>
      <nav className="d-flex justify-content-between">
        <h4>Movies</h4>
        <Link
          to={"/movies/create"}
          role="button1"
          className="btn btn-outline-secondary"
        >
          + Add Movie
        </Link>
      </nav>

      <hr />

      <MovieTable />
      <MovieList />
    </>
  );
}

export default MoviesPage;
