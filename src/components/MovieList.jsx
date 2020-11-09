import React, { Component } from 'react';
import MovieCard from './MovieCard';
import Proptypes from 'prop-types';

class MovieList extends Component {
    render() {
        const movies = this.props.movies;
    return (
      <main>
        <div>
            {movies.map((item, index) => < MovieCard
            key={index} movie={item} />)}
        </div>
      </main>
    );
  }
}

MovieList.propType = { 
    movies: Proptypes.arrayOf(Proptypes.object).isRequired
};

export default MovieList;
