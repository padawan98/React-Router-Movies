import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Switch, Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // console.log(response.data);
          setMovieList(response.data);
          // Study this response with a breakpoint or log statements x
          // and set the response data as the 'movieList' slice of state x
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
    //
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Switch>
        {/* contain path inside of route & display current component */}
        {/* exact path of component is home page/ base url */}
        <Route exact path = '/'> 
          <MovieList movieList ={movieList}/>
        </Route>
        {/* whatever is after ':' is the url param */}
        <Route path = '/movies/:id'>
          <Movie />
        </Route>
      </Switch>
      <div>Replace this Div with your Routes</div>
    </div>
  );
}
