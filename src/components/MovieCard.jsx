import PropTypes from 'prop-types';
import React from 'react';
import Rating from './Rating.jsx';

export default class MovieCard extends React.Component {
  render(porps) {
    const properties = this.props;
    const proper = properties.prop;
    return (
      <div className="movie-card">
        <img src={proper.imagePath} className="movie-card-image" alt={proper.title} />
        <div className="movie-card-budy">
          <h4 className="movie-card-title">{proper.title}</h4>
          <h5 className="movie-card-subtitle">{proper.subtitle}</h5>
          <p className="movie-card-storyline">{proper.storyline}</p>
        </div>
        <div className="movie-card-rating"><Rating rating={proper.rating} /></div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  imagePath: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating:  PropTypes.number,
};
