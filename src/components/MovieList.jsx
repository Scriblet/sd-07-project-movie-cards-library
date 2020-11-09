import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const dataMovies = this.props.movies;
    return (
      <div className="movie-list">
        {dataMovies.map((eachMovie) => (
          <MovieCard movie={eachMovie} key={eachMovie.title} />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
