// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Rating extends React.Component {
  render() {
    const rank = this.props;
    return (
      <div className="rating">
        <p>{rank.rating}</p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 'number',
};

export default Rating;
