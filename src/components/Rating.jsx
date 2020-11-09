// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const rate = this.props.rating;
    return (
      <div className="rating">
        <p>{rate}</p>
      </div>
    );
  }
}
Rating.propTypes = { rating: PropTypes.number.isRequired };

export default Rating;
