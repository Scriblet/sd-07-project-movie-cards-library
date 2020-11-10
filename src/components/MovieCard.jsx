// import PropTypes from 'prop-types';
import React from 'react';
import Rating from './Rating.jsx';

export default class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img src={this.props.imagePath} className="movie-card-image" alt={this.props.title} />
        <h4 className="movie-card-title">{this.props.title}</h4>
        <h5 className="movie-card-subtitle">{this.props.subtitle}</h5>
        <p className="movie-card-storyline">{this.props.storyline}</p>
        <div className="movie-card-rating"><Rating rating={this.props.rating} /></div>
      </div>
    );
  }
}
