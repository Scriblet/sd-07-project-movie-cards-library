import PropTypes from 'prop-types';
import React from 'react';

class Rating extends React.Component {
  render() {
    return <span className="rating">{this.props.rating}</span>;
  }
}

Rating.defaultProps = { rating: 0 };
Rating.propTypes = { rating: PropTypes.number.isRequired };

export default Rating;
