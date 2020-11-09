import PropTypes from 'prop-types';
import React from 'react';

class Rating extends React.Component {
  render() {
    console.log(this);
    return <p className="rating">{this.props.rating}</p>;
  }
}

Rating.propTypes = { rating: PropTypes.number };

export default Rating;
