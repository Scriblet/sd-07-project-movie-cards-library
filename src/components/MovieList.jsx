// implement MovieList component here
import MovieCards from './MovieCard';
import Data from '..data/';
import React from 'react';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <MovieCards movies={Data} />
      </div>
    )
  }
}

export default MovieList;