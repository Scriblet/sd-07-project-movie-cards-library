// implement Rating component here
import React from 'react';
import propTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    return <div className="rating">{this.props.rating}</div>;
  }
}

Rating.protoType = {rating: propTypes.number};


export default Rating;
