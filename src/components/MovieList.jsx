// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard'
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      movies.map((movie) => (
        <MovieCard movie={movie} key={movie.title} />
      ))
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({  
    title: PropTypes.string,
    subtitles: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }))
}

export default MovieList;
