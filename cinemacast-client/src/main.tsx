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
import CreditCreatePage from "./credits/CreditCreatePage.tsx";
import CreditEditPage from "./credits/CreditEditPage.tsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "movies", element: <MoviesPage /> },
      { path: "movies/create", element: <MovieCreatePage /> },
      { path: "movies/edit/:id", element: <MovieEditPage /> },
      {
        path: "movies/detail/:movieId",
        element: <MovieDetailPage />,
        // children: [
        //   {
        //     path: "credit/create",
        //     element: <CreditCreatePage />,
        //   },
        //   {
        //     path: "credit/edit/:creditId",
        //     element: <CreditEditPage />,
        //   },
        // ],
      },
      {
        path: "movies/detail/:movieId/credit/create",
        element: <CreditCreatePage />,
      },
      {
        path: "movies/detail/:movieId/credit/edit/:creditId",
        element: <CreditEditPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
