import { useEffect, useState } from "react";
import { Actor } from "./Actor";
import { actorAPI } from "./ActorAPI";
import { Link } from "react-router-dom";

function ActorList() {
  const [actors, setActors] = useState<Actor[]>([]);
  const [busy, setBusy] = useState(false);

  async function loadActors() {
    setBusy(true);
    let data = await actorAPI.list();
    setActors(data);
    setBusy(false);
  }

  useEffect(() => {
    loadActors();
  }, []);

  return (
    <section className="d-flex flex-wrap gap-4">
      {busy && (
        <div className="d-flex justify-content-center align-items-center w-100 vh-100">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {actors.map((actor) => (
        <div className="card p-4" key={actor.id}>
          <strong>{actor.name}</strong>
          <small>{actor.awards.join(", ")}</small>
          <small>{actor.nationality}</small>
          <small>{actor.gender}</small>
          <small>{actor.imdbID}</small>
          <Link to={`/actors/edit/${actor.id}`}>edit</Link>
        </div>
      ))}
    </section>
  );
}

export default ActorList;
