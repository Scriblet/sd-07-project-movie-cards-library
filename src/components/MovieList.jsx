import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const movieList = this.props.movies;
    return (
      <div className="movie-list">
        {movieList.map(movie => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
};

MovieList.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
};

MovieList.defaultProps = {
    title: 'Era pra ter informações aqui',
    subtitle: 'Era pra ter informações aqui',
    storyline: 'Era pra ter informações aqui',
    rating: 'Tinha um número aqui',
    imagePath: 'Era pra ter informações aqui',
};

export default MovieList;
