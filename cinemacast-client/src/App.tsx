import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesPage from "./movies/MoviesPage";
import MovieCreatePage from "./movies/MovieCreatePage";
import MovieEditPage from "./movies/MovieEditPage";
import MovieDetailPage from "./movies/MovieDetailPage";
import CreditCreatePage from "./credits/CreditCreatePage";
import CreditEditPage from "./credits/CreditEditPage";
import { useState } from "react";
import { User } from "./users/User";
import { UserContext } from "./users/UserContext";
import SignInPage from "./account/SignInPage";
import ActorsPage from "./actors/ActorsPage";
import Header from "./Header";
import NavPanel from "./NavPanel";
import ActorCreatePage from "./actors/ActorCreatePage";
import ActorEditPage from "./actors/ActorEditPage";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout";

function getPersistedUser() {
  const userAsJSON = localStorage.getItem("user");
  if (!userAsJSON) return undefined;
  const user = JSON.parse(userAsJSON);
  return user;
}

function App() {
  const [user, setUser] = useState<User | undefined>(getPersistedUser());

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="signin" element={<SignInPage />} />
          <Route element={<Layout />}>
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/create" element={<MovieCreatePage />} />
            <Route path="movies/edit/:id" element={<MovieEditPage />} />
            <Route
              path="movies/detail/:movieId/*"
              element={<MovieDetailPage />}
            />
            <Route path="actors" element={<ActorsPage />} />
            <Route path="actors/create" element={<ActorCreatePage />} />
            <Route path="actors/edit/:id" element={<ActorEditPage />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
