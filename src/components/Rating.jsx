import React, { Component } from 'react';
import PropType from 'prop-types';

class Rating extends Component {
  render() {
    return (
      <div className="rating">
        <em>{this.props.rating}</em>
      </div>
    );
  }
}

Rating.PropType = {
  rating: PropType.number,
};

export default Rating;
