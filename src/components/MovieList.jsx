import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

// prettier-ignore
export default class MovieList extends React.Component {
  render() {
    return (
      <main>
        <div className="movie-list">
          {this.props.movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
            ))}
        </div>
      </main>
    );
  }
}

// prettier-ignore
MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
