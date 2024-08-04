import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { Movie } from "./Movie";
import { movieAPI } from "./MovieAPI";

function MovieDetailPage() {
  const { id } = useParams<{ id: string }>();
  const movieId = Number(id);
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [busy, setBusy] = useState(false);

  async function loadMovie() {
    try {
      if (!movieId) return;
      setBusy(true);
      const data = await movieAPI.find(movieId);
      setMovie(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    loadMovie();
  }, []);

  if (!movie) return null;

  return (
    <>
      <nav className="d-flex justify-content-between pe-2">
        <h4>Movie</h4>
        <Link to={`/movies/edit/${movie.id}`} className="btn btn-outline-primary">
          edit
        </Link>
      </nav>
      <hr />
      <>
        {busy && (
          <section className="d-flex justify-content-center align-items-center align-content-center vh-100">
            <div className=" spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </section>
        )}
        {movie && (
          <>
            <section className="card d-flex flex-row gap-5 p-4 w-100 bg-body-tertiary">
              <dl className="">
                <dt>Title</dt>
                <dd>{movie.title}</dd>
                <dt>Genre</dt>
                <dd>{movie.genre}</dd>
              </dl>
              <dl>
                <dt>Year</dt>
                <dd>{movie.year}</dd>
                <dt>Director</dt>
                <dd>{movie.director}</dd>
              </dl>
              <dl>
                <dt>Rating</dt>
                <dd>{movie.rating}</dd>
              </dl>
            </section>
            <section className="card p-4 mt-4 w-100">
              <h5>Cast</h5>
              <table className="table table-hover table-light w-50">
                <thead>
                  <tr>
                    <th>Actor</th>
                    <th>Role</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tom Cruise</td>
                    <td>Ethan Hunt</td>
                    <td>
                      <Link to={"/movies/detail/${movie.id}/credit/1"}>edit</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </>
        )}
      </>
    </>
  );
}

export default MovieDetailPage;
