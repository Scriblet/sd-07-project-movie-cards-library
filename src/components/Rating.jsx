// implement Rating component here
import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const rate = this.props;

    return (
      <div className="movie-card-rating">
        <span className="rating">{rate.rating}</span>
      </div>
    );
  }
}

export default Rating;
