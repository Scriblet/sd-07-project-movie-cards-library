import React, { Component } from 'react';

class Rating extends Component {
  render() {
  const { rating } = this.props.rating;
  return (
  <div className='rating'>
  <p>{rating}</p>
			</div>
);
}
}
export default Rating;
