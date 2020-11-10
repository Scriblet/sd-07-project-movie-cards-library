import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const rating = this.props.rating;
    return (
      <div>{rating}</div>
    );
  }
}

export default Rating;
