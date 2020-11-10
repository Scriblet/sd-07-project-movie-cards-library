import React from 'react';
import Rating from './Rating.jsx';

export default class MovieCard extends React.Component {
  render() {
    const properties = this.props;
    return (
      <div className="movie-card" key={properties.prop.key}>
        <img src={properties.prop.imagePath} className="movie-card-image" alt={properties.prop.title} />
        <div className="movie-card-budy">
          <h4 className="movie-card-title">{properties.prop.title}</h4>
          <h5 className="movie-card-subtitle">{properties.prop.subtitle}</h5>
          <p className="movie-card-storyline">{properties.prop.storyline}</p>
        </div>
        <div className="movie-card-rating"><Rating rating={properties.prop.rating} /></div>
      </div>
    );
  }
}
