import { useEffect, useState } from "react";
import { movieAPI } from "./MovieAPI";
import { Movie } from "./Movie";
import toast from "react-hot-toast";

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
          </article>
        ))}
      </section>
    </>
  );
}

export default MovieList;
