import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const properties = this.props;
    return <span className="rating">{ properties.rating }</span>;
  }
}
Rating.propTypes = { rating: PropTypes.string.isRequired };

export default Rating;
