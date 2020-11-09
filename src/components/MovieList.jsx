import PropTypes from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return movies.map((movie) => <MovieCard key={movie.title} movie={movie} />);
  }
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        storyline: PropTypes.string,
        imagePath: PropTypes.string,
        rating: PropTypes.number,
      })
    ),
  };

export default MovieList;
