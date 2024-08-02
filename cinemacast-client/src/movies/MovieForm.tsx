import { Link } from "react-router-dom";

function MovieForm() {
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" />

      <label htmlFor="genre">Genre</label>
      <input type="text" id="genre" />

      <label htmlFor="year">Year</label>
      <input type="number" id="year" />

      <label htmlFor="rating">Rating</label>
      <input type="number" id="rating" />

      <label htmlFor="director">Director</label>
      <input type="text" id="director" />

      <label htmlFor="budgetInMillions">Budget</label>
      <input type="number" id="budgetInMillions" />
      <small>Budget numbers are entered in millions</small>

      <div className="actions-footer">
        <button className="">Save</button>
        <Link to={"/movies"}>Cancel</Link>
      </div>
    </form>
  );
}

export default MovieForm;
