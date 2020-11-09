import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const rated = this.props.rating;
    return (
      <div className="movie-card-rating">
        <div className="rating">{rated}</div>
      </div>
    );
  }
}

export default Rating;

Rating.propTypes = { rating: PropTypes.number };

Rating.defaultProps = { rating: 0 };
