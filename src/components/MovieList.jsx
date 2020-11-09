import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

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
/* MovieList.prototype = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired 
}; */

export default MovieList;
