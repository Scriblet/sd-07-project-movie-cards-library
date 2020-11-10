import PropTypes from 'prop-types';
import React from 'react';
import Rating from './Rating.jsx';

export default class MovieCard extends React.Component {
  render() {
    const properties = this.props;
    const obj = properties.prop;
    return (
      <div className="movie-card">
        <img src={obj.imagePath} className="movie-card-image" alt={obj.title} />
        <div className="movie-card-budy">
          <h4 className="movie-card-title">{obj.title}</h4>
          <h5 className="movie-card-subtitle">{obj.subtitle}</h5>
          <p className="movie-card-storyline">{obj.storyline}</p>
        </div>
        <div className="movie-card-rating"><Rating rating={obj.rating} /></div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  "prop.imagePath": PropTypes.string,
  "prop.title": PropTypes.string,
  "prop.subtitle": PropTypes.string,
  "prop.storyline": PropTypes.string,
  "prop.rating":  PropTypes.number,
};
