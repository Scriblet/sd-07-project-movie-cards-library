import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    return (
      <div className="rating">
        <p className="movie-card-rating">{this.props.rating}</p>
      </div>
    );
  }
}

export default Rating;

Rating.propTypes = { rating: PropTypes.number.isRequired };
