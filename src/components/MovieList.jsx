import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard.jsx';

export default class MovieList extends React.Component {
  render() {
    const properties = this.props;
    return (<section className="movie-list">
      { properties.movies.map((movie) => (
        <MovieCard key={movie.title} {...movie} />
      )) }
    </section>);
  }
}

MovieList.propTypes = {
  properties : {
    movies:{
      imagePath: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }
  }
};

/* title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired, */