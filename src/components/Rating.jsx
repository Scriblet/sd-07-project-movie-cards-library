// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    // Here I am declaring that 'rating' is a props of the Rating component.
    const { rating } = this.props;
    return (
    <div className="rating">{rating}</div>
    );
  }
}

export default Rating;