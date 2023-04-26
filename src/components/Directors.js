import React from "react";
import { directors } from "../data";

function Directors() {

  const allDirectors = directors.map((director, index) => {
    const allMovies = director.movies.map((movie, index) => {
      return <li key={index}>{movie}</li>
    })
    return (
      <div key={index}>
        <h3>Name: {director.name}</h3>
        Movies:
        <ul>
          {allMovies}
          </ul>
      </div>
    )
  })
  return (
  <div>
    <h1>Directors Page</h1>
    {allDirectors}
  </div>);
}

export default Directors;
