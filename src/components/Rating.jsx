import React from 'react';
import PropTypes from 'prop-types';

export default class Rating extends React.Component {
  render() {
    return (
      <div className="movie-card-rating">
        <p>
          Rating <span className="rating">{this.props.rating}</span>
        </p>
      </div>
    );
  }
}

// prettier-ignore
Rating.propTypes = { rating: PropTypes.number.isRequired };
