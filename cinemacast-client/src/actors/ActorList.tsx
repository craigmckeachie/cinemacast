import { useEffect, useState } from "react";
import { Actor } from "./Actor";
import { actorAPI } from "./ActorAPI";

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
        <div className="card p-4">
          <strong>{actor.name}</strong>
          <small>{actor.awards.join(", ")}</small>
          <small>{actor.nationality}</small>
          <small>{actor.gender}</small>
          <small>{actor.imdbID}</small>
        </div>
      ))}
    </section>
  );
}

export default ActorList;
