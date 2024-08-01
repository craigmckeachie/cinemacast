import { BASE_URL, checkStatus, delay, parseJSON } from "../utility/fetchUtilities";
import { Movie } from "./Movie";

const url = `${BASE_URL}/movies`;

export const movieAPI = {
  list(): Promise<Movie[]> {
    return fetch(url).then(delay(200)).then(checkStatus).then(parseJSON);
  },

  find(id: number): Promise<Movie> {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
  },

  post(movie: Movie) {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  put(movie: Movie) {
    return fetch(`${url}/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  delete(id: number) {
    return fetch(`${url}/${id}`, { method: "DELETE" }).then(checkStatus);
  },
};
