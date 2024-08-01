import { useEffect, useState } from "react";
import { movieAPI } from "./MovieAPI";
import { Movie } from "./Movie";

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  async function loadMovies() {
    const data = await movieAPI.list();
    setMovies(data);
  }

  useEffect(() => {
    loadMovies();
  }, []);

  return (
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
  );
}

export default MovieList;
