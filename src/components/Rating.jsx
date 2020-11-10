import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const properties = this.props;
    const element = <span className="rating">{ properties.rating }</span>;
    return element;
  }
}

Rating.propTypes = {
  properties: {
    rating: PropTypes.string.isRequired
  }
};

export default Rating;
