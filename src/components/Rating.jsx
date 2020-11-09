import React from 'react';

class Rating extends React.Component {
  render() {
    const ratingMovie = this.props.rating;
    return <div className="rating">{ratingMovie}</div>;
  }
}

export default Rating;
