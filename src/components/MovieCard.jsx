import React from 'react';
import Rating from './Rating.jsx';

export default class MovieCard extends React.Component {
  render() {
    const properties = this.props;
    const obj = properties.prop;
    return (
      <div className="movie-card" key={properties.key}>
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
