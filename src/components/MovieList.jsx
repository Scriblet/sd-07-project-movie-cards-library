// implement MovieList component here
import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const moviesList = this.props.movies;
    return (
      <div className="movie-list">
        {moviesList.map((actual) => (<MovieCard key={actual.title} movie={actual} />))}
      </div>
    );
  }
}

MovieList.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };

export default MovieList;
