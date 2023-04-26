import React from "react";
import { actors } from "../data";

function Actors() {

  const allActors = actors.map((actor, index) => {
    const allMovies = actor.movies.map((movie, index) => {
      return <li key={index}>{movie}</li>
    })
    return (
      <div key={index}>
        <h3>Name: {actor.name}</h3>
        Movies:
        <ul>
          {allMovies}
          </ul>
      </div>
    )
  })
  return (
  <div>
    <h1>Actors Page</h1>
    {allActors}
  </div>);
}

export default Actors;
