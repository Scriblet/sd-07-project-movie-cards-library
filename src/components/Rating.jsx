import PropTypes from 'prop-types';
import React from 'react';

class Rating extends React.Component {
  render() {
    const ratingMovie = this.props.rating;
    return <div className="rating">{ratingMovie}</div>;
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired };

export default Rating;
