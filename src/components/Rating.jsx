// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Rating extends Component {
  render() {
    const rating = this.props.rating;
    // console.log(`Chegada da data no mavelist ${movies}`);
    return (<div className="movie-card-rating"> <span className="rating">{rating}</span> </div>);
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired };

export default Rating;
