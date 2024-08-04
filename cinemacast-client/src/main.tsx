import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviesPage from "./movies/MoviesPage.tsx";
import MovieCreatePage from "./movies/MovieCreatePage.tsx";
import MovieEditPage from "./movies/MovieEditPage.tsx";
import MovieDetailPage from "./movies/MovieDetailPage.tsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "movies", element: <MoviesPage /> },
      { path: "movies/create", element: <MovieCreatePage /> },
      { path: "movies/edit/:id", element: <MovieEditPage /> },
      { path: "movies/detail/:id", element: <MovieDetailPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
