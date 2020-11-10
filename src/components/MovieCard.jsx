import React from 'react';
import Rating from './Rating.jsx';

export default class MovieCard extends React.Component {
  render() {
    const properties = this.props;
    const { imagePath, title, subtitle, storyline, rating } = properties.children;
    return (
      <div key={title} className="movie-card">
        <img src={imagePath} className="movie-card-image" alt={title} />
        <div className="movie-card-budy">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <div className="movie-card-rating"><Rating rating={rating} /></div>
      </div>
    );
  }
}
