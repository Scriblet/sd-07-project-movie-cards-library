import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component{
  render () {
    const movies = this.props.movies;
    console.log(movies);
    return (
      <div>
        {movies.map(movie => <MovieCard movie={movie} />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
}
export default MovieList;