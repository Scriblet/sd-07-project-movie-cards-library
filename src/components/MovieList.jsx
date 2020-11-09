import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import movieDefault from '../movieDefault';

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

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    movieDefault,
  ).isRequired,
};

MovieCard.defaultProps = {
  movie: {
    title: 'Title',
    subtitle: 'Subtitle',
    imagePath: 'Image Path',
    storyline: 'Storyline',
    rating: 0,
  },
};


export default MovieList;
