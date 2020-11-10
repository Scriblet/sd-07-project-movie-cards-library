import React from 'react';

class MovieCard extends React.Component {
  render() {
    const properties = this.props;
    const { title, subtitle, imagePath, storyline } = properties.movie;
    return (
      <div>
        <img src={imagePath} alt="" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
      </div>
    );
  }
}

export default MovieCard;
