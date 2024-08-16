import { useForm } from "react-hook-form";
import { Actor } from "./Actor";
import { Link } from "react-router-dom";

function ActorForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Actor>({});

  function save(actor: Actor) {
    console.log(actor);
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
        <label className="form-label" htmlFor="nationality">
          Nationality
        </label>
        <input
          id="nationality"
          {...register("nationality", {
            required: "Nationality is required",
          })}
          className={`form-control ${errors.nationality && "is-invalid"} `}
          type="text"
          
        />
        <div className="invalid-feedback">{errors?.nationality?.message}</div>
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
