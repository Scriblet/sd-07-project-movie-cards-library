import PropTypes from 'prop-types';
import React from 'react';

class Rating extends React.Component {
  render() {
  return <p className='rating'>{this.props.rating}</p>;
  }
}

Rating.protoTypes = {
  rating: PropTypes.number.isRequired
}

export default Rating;
