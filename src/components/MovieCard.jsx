// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    // This line is saying that 'movie' is a props of the MovieCard component.
    // Then, we say that 'movie' is and object that contains the specified props.
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div>
        <div>
          {/* Here, the props defined for the movie props (?) are used to
          fill the information about the movies in each card. These infos
          are gonna be read only when MovieList make a call. */}
          <img src={imagePath} alt="" />
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </div>
        <div>
          {/* This line calls the Rating component. */}
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}

export default MovieCard;
