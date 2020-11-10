import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div>
        <img ClassName="card-image" alt={title} src={imagePath} />
        <div className="info">
          <h6 className="title">{title}</h6>
          <p className="subtitle">{subtitle}</p>
          <p className="storyline">{storyline}</p>
          <p className="rating">{rating}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
