import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const movieTitle = movies.map((movie) => <MovieCard key={movie.title} movie={movie} />);
    return (
        <div className="movie-list">
          {movieTitle}
        </div>
      );
  }
  }
MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
export default MovieList;
