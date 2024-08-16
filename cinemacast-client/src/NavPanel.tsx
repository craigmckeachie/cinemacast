import { NavLink } from "react-router-dom";

function NavPanel() {
  return (
    <section
      className="bg-body-tertiary vh-100 p-4  border-end"
      style={{ width: "12rem" }}
    >
      <aside className="">
        <nav>
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <NavLink to={"/movies"} className="nav-link ">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/actors" className="nav-link ">
                Actors
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </section>
  );
}

export default NavPanel;
