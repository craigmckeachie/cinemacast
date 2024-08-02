import { useEffect, useState } from "react";
import { movieAPI } from "./MovieAPI";
import { Movie } from "./Movie";

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [busy, setBusy] = useState(false);

  async function loadMovies() {
    setBusy(true);
    const data = await movieAPI.list();
    setMovies(data);
    setBusy(false);
  }

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <>
      {busy && (
        <section className="busy-container">
          <button aria-busy="true" className="outline secondary">
            Please wait…
          </button>
        </section>
      )}
      <section className="list">
        {movies.map((movie) => (
          <article className="card">
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
