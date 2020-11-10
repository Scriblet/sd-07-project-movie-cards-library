import React from 'react';

import PropTypes from 'prop-types';

function Ratings(props) {
  const rating = props.rating;
  return (
    <div key={rating.toString()} className="rating">
      <strong>{ rating }</strong>
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
