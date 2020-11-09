import React, { Component } from 'react';
import PropType from 'prop-types';

class Rating extends Component {
  render() {
    const rating = this.props.rating
    return (
      <div className="rating">
        <em>{rating}</em>
      </div>
    );
  }
}

Rating.PropType = {
  rating: PropType.number,
}

export default Rating;
