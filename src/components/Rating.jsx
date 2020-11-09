import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props.rating;

    return (
      <div className="rating">
        <span className="movie-card-rating">{rating}</span>
      </div>
    );
  }
}

export default Rating;
