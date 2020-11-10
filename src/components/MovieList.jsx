// implement MovieList component here

import React from 'react';
import data from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = data;
    return(
    <div>
      {
        movies.map(item => <MovieCard />)
      }
    </div>
    )
  }
}

export default MovieList;
