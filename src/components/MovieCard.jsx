// implement MovieCard component here
import React from 'react';
import PropsTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const movie = this.props.movie;

    return (
      <div>
        <img src={movie.imagePath} alt={movie.title} />
        <h4>{movie.title}</h4>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = { movie: PropsTypes.objectOf().isRequired };
