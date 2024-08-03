import MovieForm from "./MovieForm";

function MovieCreatePage() {
  return (
    <nav className="d-flex justify-content-between">
      <h4>New Movie</h4>
      <hr />
      <MovieForm />
    </nav>
  );
}

export default MovieCreatePage;
