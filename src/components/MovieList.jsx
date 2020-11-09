import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    const movieList = this.props.movies;
    return (
      <div className="movie-list">
        { movieList.map((movie) => <MovieCard key={movie.title} movie={movie} />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieList;
