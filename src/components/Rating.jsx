import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const nota = this.props.rating;
    return (
      <div className="movie-card-rating">
        <p className="rating">{nota}</p>
      </div>
    );
  }
}

Rating.prototype = { rating: PropTypes.number, };

export default Rating;
