import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div>
        <h4>{title}</h4>
        <img src={imagePath} alt='Films card image' />
      </div>
    );
  }
}

export default MovieCard;
