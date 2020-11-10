// implement Rating component here
import React from 'react';
import propTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    return (
      <div className="movie-card-rating">
        <div className="rating">{this.props.rating}</div>
      </div>
    );
  }
}
Rating.defaultProps = { rating: 0 };
Rating.propTypes = { rating: propTypes.number.isRequired };

export default Rating;
