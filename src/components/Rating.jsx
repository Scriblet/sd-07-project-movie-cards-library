import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        {rating}
      </div>
    );
  }
}
Rating.prototypes = { rating: PropTypes.shape({ rating: PropTypes.number }).isRequired };
export default Rating;
