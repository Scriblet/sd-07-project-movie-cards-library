import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-list">
        <MovieCard movie={movie} />
      </div>
    );
  }
}

MovieList.propTypes = { movie: PropTypes.arrayOf(PropTypes.objectOf).isRequired };

export default MovieList;
