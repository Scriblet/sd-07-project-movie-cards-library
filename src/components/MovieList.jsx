import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
// oneOfType: an object that could be one of many types
MovieList.propTypes = { movies: PropTypes.oneOfType.isRequired };

export default MovieList;
