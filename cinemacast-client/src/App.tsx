import { Toaster } from "react-hot-toast";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="container-fluid px-4 py-4 bg-body-tertiary navbar border-bottom">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="73" height="49" fill="none">
            <path
              fill="#68DBFF"
              d="M46.868 24c0 12.426-10.074 22.5-22.5 22.5-12.427 0-22.5-10.074-22.5-22.5S11.94 1.5 24.368 1.5c12.426 0 22.5 10.074 22.5 22.5Z"
            />
            <path
              fill="#FF7917"
              d="M71.132 24c0 12.426-9.975 22.5-22.28 22.5-12.304 0-22.278-10.074-22.278-22.5S36.547 1.5 48.852 1.5c12.304 0 22.28 10.074 22.28 22.5Z"
            />
            <path
              fill="#5D2C02"
              d="M36.67 42.842C42.81 38.824 46.868 31.886 46.868 24c0-7.886-4.057-14.824-10.198-18.841A22.537 22.537 0 0 0 26.573 24 22.537 22.537 0 0 0 36.67 42.842Z"
            />
          </svg>
          <strong>CinemaCast</strong>
        </div>
        <details className="dropdown">
          <summary>Account</summary>
          <ul dir="rtl">
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Sign out</a>
            </li>
          </ul>
        </details>
      </header>

      <main className=" d-flex">
        <Toaster
          toastOptions={{
            success: {
              iconTheme: {
                primary: "#0d6efd",
                secondary: "white",
              },
            },
            style: {
              maxWidth: 500,
            },
          }}
        />
        <section className="bg-body-tertiary vh-100 p-4  border-end" style={{ width: "12rem" }}>
          <aside className="">
            <nav>
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <Link to={"/movies"} className="nav-link active" aria-current="page">
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Actors
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Credits
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </section>
        <section className="p-4 w-100">
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default App;
