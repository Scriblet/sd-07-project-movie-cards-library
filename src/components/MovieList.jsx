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

// https://medium.com/@fannyvieira/proptypes-in-react-eb5f9d417fb
MovieList.propTypes = { movies: PropTypes.arrayOf({ title: PropTypes.string }).isRequired };

export default MovieList;
