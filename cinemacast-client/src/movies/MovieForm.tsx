import { Link } from "react-router-dom";

function MovieForm() {
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" />

      <label htmlFor="genre">Genre</label>
      <select id="genre">
        <option value="">Select...</option>
        <option value="Action">Action</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Animation">Animation</option>
        <option value="Comedy">Comedy</option>
        <option value="Horror">Horror</option>
        <option value="Adventure">Adventure</option>
        <option value="Drama">Drama</option>
      </select>

      <label htmlFor="year">Year</label>
      <input type="number" id="year" min="1920" max="3000" />

      <label htmlFor="rating">Rating</label>
      <input type="number" id="rating" min="1.0" max="10.0" step=".1" />

      <label htmlFor="director">Director</label>
      <input type="text" id="director" />

      <label htmlFor="budgetInMillions">Budget</label>
      <input type="number" id="budgetInMillions" step="1" />
      <small>Budget numbers are entered in millions</small>

      <div className="actions-footer">
        <button className="">Save</button>
        <Link to={"/movies"}>Cancel</Link>
      </div>
    </form>
  );
}

export default MovieForm;
