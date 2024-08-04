import { useEffect, useState } from "react";
import { movieAPI } from "./MovieAPI";
import { Movie } from "./Movie";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [busy, setBusy] = useState(false);

  async function loadMovies() {
    try {
      setBusy(true);
      const data = await movieAPI.list();
      setMovies(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <>
      {busy && (
        <section className="d-flex justify-content-center align-items-center align-content-center vh-100">
          <div className=" spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </section>
      )}
      <section className="d-flex flex-wrap gap-4">
        {movies.map((movie) => (
          <article className="card p-4" key={movie.id}>
            <strong>{movie.title}</strong>
            <small>
              Genre: {movie.genre} ({movie.year})
            </small>
            <small></small>
            <small>Rating: {movie.rating}</small>
            <small>Director: {movie.director}</small>
            <div className="d-flex justify-content-between">
              <Link className="small" to={`/movies/edit/${movie.id}`}>edit</Link>
              <a
                className="small"
                onClick={async (event) => {
                  event.preventDefault();
                  if (confirm("Are you sure you want to delete this Movie?")) {
                    if (movie.id) {
                      await movieAPI.delete(movie.id);
                      let updatedMovies = movies.filter((m) => m.id !== movie.id);
                      setMovies(updatedMovies);
                      toast.success("Successfully deleted.");
                    }
                  }
                }}
              >
                delete
              </a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default MovieList;
