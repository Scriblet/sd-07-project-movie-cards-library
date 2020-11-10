// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
        {movies.map((element) => <MovieCard key={element.title} movies={element} />)}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieList;
