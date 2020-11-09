// implement Rating component here
import PropTypes from 'prop-types';
import React from 'react';

class Rating extends React.Component {
  render() {
    const rating = this.props.rating;
    return (
      <div className="rating">
        {rating}
      </div>
    );
  }
}

export default Rating;

Rating.propTypes = { rating: PropTypes.number.isRequired };
