import React from 'react';

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

export default Rating;
