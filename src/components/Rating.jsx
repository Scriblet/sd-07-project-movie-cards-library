import React from 'react';

import PropTypes from 'prop-types';


Rating.propTypes = { rating: PropTypes.number.isRequired };

function Ratings(props) {
  rating = props.rating;
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

export default Rating;
