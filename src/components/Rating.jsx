import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Rating = (prop) => <span className="rating">{prop.rating}</span>;

Rating.propTypes = { prop: PropTypes.number };
Rating.defaultProps = { rating: 0 };

export default Rating;
