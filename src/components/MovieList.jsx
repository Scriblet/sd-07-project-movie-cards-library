import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard.jsx';

class MovieList extends React.Component {
  render() {
    const moviesArr = this.props.movies;
    return (
      <main className="movie-list">
        {moviesArr.map((card) => <MovieCard key={card.title} movie={card} />)}
      </main>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieList;
