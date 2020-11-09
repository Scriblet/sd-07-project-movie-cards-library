import React from 'react';
import MovieCard from './MovieCard.jsx';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const moviesArr = this.props.movies;
    return (
      <main>
        {moviesArr.map((card) => <MovieCard key={card.title} movie={card} />)}
      </main>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  moviesArr: PropTypes.array,
}
