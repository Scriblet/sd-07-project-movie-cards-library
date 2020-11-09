import React, { Component } from 'react';
import MovieCard from './MovieCard';

// import movies from '../data';

class MovieList extends Component {
    render() {
      return (
        <main>
          <div>
            <MovieCard />
          </div>
        </main>
      );
    }
}

export default MovieList;
