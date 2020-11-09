// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const film = this.props.movie;
    return (
      <div>{film.title}</div>
    );
  }
}
export default MovieCard;
