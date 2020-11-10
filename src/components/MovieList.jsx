// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCards from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {
          movies.map((movie) =>
            (<MovieCards movie={movie} key={movie.title} className="movie-card" />))
        }
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf().isRequired };

MovieList.defaultProps = { movies: [] };

export default MovieList;
