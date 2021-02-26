import React from 'react';
import {useHistory} from 'react-router-dom';
//hook that allows you to navigate between pages

export default function MovieList(props) {
  const movieList = props.movieList;
  return (
    <div className="movie-list">
      {movieList.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  const history = useHistory();
  const handlesomething = () => {
    history.push(`/movies/${props.movie.id}`); //when clicking on movie card, fetch data from the url movie card
  }
  return (
    <div className="movie-card" onClick = {handlesomething}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
