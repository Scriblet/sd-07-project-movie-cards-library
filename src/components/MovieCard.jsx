import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title } = this.props.movie;
    return (
      <p>{title}</p>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.shape({ title: PropTypes.string }).isRequired };

export default MovieCard;
