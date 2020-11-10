import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <div className="rating">
          {rating}
        </div>
      </div>
    );
  }
}

// Elemento inserido para a validação do CC, sem isso não submete.
Rating.propTypes = { rating: PropTypes.element.isRequired };

export default Rating;
