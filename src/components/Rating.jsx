import React from 'react';
import MovieCard from './MovieCard';

class Rating extends React.Component {
  render() {
    const { rating } = this.props
    return(
      <div className="rating">Rating {rating}</div>
    );
  }
}

export default Rating;
