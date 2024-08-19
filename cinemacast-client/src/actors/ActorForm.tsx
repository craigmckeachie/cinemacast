import { useForm } from "react-hook-form";
import { Actor } from "./Actor";
import { Link, useNavigate } from "react-router-dom";
import { actorAPI } from "./ActorAPI";

function ActorForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Actor>({});
  const navigate = useNavigate();

  async function save(actor: Actor) {
    await actorAPI.post(actor);
    navigate("/actors");
  }

  return (
    <form className="w-25" onSubmit={handleSubmit(save)}>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          {...register("name", {
            required: "Name is required",
          })}
          className={`form-control ${errors.name && "is-invalid"} `}
          type="text"
          autoFocus
        />
        <div className="invalid-feedback">{errors?.name?.message}</div>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="imdbID">
          IMDB ID
        </label>
        <input
          id="imdbID"
          {...register("imdbID", {
            required: "imdbID is required",
          })}
          className={`form-control ${errors.imdbID && "is-invalid"} `}
          type="text"
        />
        <div className="invalid-feedback">{errors?.imdbID?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="nationality">
          Nationality
        </label>
        <input
          id="nationality"
          className={`form-control ${errors.nationality && "is-invalid"} `}
          {...register("nationality")}
          type="text"
        />
        <div className="invalid-feedback">{errors?.nationality?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="gender">
          Gender
        </label>

        <select
          className={`form-select ${errors.gender && "is-invalid"} `}
          //   {...register("gender", {
          //     validate: (value) =>
          //       value === "Female" || value === "Male" || "Gender is required",
          //   })}
          {...register("gender", {
            required: "Gender is required",
          })}
          id="gender"
        >
          <option value="">Select...</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>

        <div className="invalid-feedback">{errors?.gender?.message}</div>
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-outline-primary">
          Save
        </button>
        <Link className="btn btn-outline-secondary" to="/actors">
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default ActorForm;
