import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((element) => (
          <MovieCard key={element.name} movie={element} />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ),
};

MovieList.defaultProps = {
  movies: [
    {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
    },
  ],
};

export default MovieList;
