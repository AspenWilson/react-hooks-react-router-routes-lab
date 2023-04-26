import React from "react";
import { movies } from "../data";

function Movies() {

  const allMovies = movies.map((movie, index) => {
    const allGenres = movie.genres.map((genre, index) => {
      return <li key={index}>{genre}</li>
    })
    return (
      <div key={index}>
        <h3>Name: {movie.title}</h3>
        Time:{movie.time}
        <br />
        Genres:
        <ul>
          {allGenres}
        </ul>
      </div>
    )
  })
  return (
  <div>
    <h1>Movies Page</h1>
    {allMovies}
  </div>);
}

export default Movies;
