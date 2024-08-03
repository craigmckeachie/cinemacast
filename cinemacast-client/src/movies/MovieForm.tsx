import { Link } from "react-router-dom";

function MovieForm() {
  return (
    <form className="w-50">
      <div className="mb-3">
        <label className="form-label" htmlFor="title">
          Title
        </label>
        <input className="form-control" type="text" id="title" />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="genre">
          Genre
        </label>
        <select className="form-select" id="genre">
          <option value="">Select...</option>
          <option value="Action">Action</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Animation">Animation</option>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
          <option value="Adventure">Adventure</option>
          <option value="Drama">Drama</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="year">
          Year
        </label>
        <input className="form-control" type="number" id="year" min="1920" max="3000" />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="rating">
          Rating
        </label>
        <input className="form-control" type="number" id="rating" min="1.0" max="10.0" step=".1" />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="director">
          Director
        </label>
        <input className="form-control" type="text" id="director" />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="budgetInMillions">
          Budget
        </label>
        <input className="form-control" type="number" id="budgetInMillions" step="1" />
        <div className="form-text">Budget numbers are entered in millions</div>
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-outline-primary">Save</button>
        <Link className="btn btn-outline-secondary" to={"/movies"}>
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default MovieForm;
