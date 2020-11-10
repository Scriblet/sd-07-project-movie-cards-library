// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';


const Rating = (prop) => <span className="rating">{prop.rating}</span>;

Rating.protoTypes = { rating: PropTypes.number.isRequired };

export default Rating;
