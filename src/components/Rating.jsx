import React from 'react';

import PropTypes from 'prop-types';

function Ratings(props) {
  const value = props.rating;
  return (
    <div key={value.toString()} className="rating">
      <strong>{ value }</strong>
    </div>
  );
}

class Rating extends React.Component {
  render() {
    return Ratings(this.props);
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired };

export default Rating;
