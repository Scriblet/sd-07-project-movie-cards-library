import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const moviesData = this.props.movies;
    return (
      <div className="movie-list">
        {moviesData.map((movie) => <MovieCard movie={movie} key={movie.title} />)}
      </div>
    );
  }
}


MovieCard.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      imagePath: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
    }),
  ),
};

export default MovieList;
