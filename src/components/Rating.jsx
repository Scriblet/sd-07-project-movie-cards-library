// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const rating = this.props.rating;
    return (
      <div className="rating" >{rating}</div>
    );
  }
}
Rating.propTypes = { movie: PropTypes.number.isRequired };
export default Rating;
