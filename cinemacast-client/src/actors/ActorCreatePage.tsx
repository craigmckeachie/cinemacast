import ActorForm from "./ActorForm";

function ActorCreatePage() {
  return (
    <>
      <header className="d-flex justify-content-between">
        <h4>New Actor</h4>
      </header>
      <hr />
      <ActorForm />
    </>
  );
}

export default ActorCreatePage;
