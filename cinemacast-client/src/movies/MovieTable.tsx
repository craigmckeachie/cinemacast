import { useEffect, useState } from "react";
import { movieAPI } from "./MovieAPI";
import { Movie } from "./Movie";
import toast from "react-hot-toast";
import MovieCard from "./MovieCard";
import MovieTableRow from "./MovieTableRow";

function MovieTable() {
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

  async function remove(movie: Movie) {
    if (confirm("Are you sure you want to delete this Movie?")) {
      if (movie.id) {
        await movieAPI.delete(movie.id);
        let updatedMovies = movies.filter((m) => m.id !== movie.id);
        setMovies(updatedMovies);
        toast.success("Successfully deleted.");
      }
    }
  }

  return (
    <>
      {busy && (
        <section className="d-flex justify-content-center align-items-center align-content-center vh-100">
          <div className=" spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </section>
      )}
      <table className="table table-hover w-75">
        <thead>
          <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Director</th>
            <th>Budget</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <MovieTableRow key={movie.id} movie={movie} onRemove={remove} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieTable;
