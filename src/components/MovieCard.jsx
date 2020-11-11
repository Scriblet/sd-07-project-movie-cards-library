// implement MovieList component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <div>
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <Rating rating={movie.rating} />
        <img alt="" src={movie.imagePath} />
      </div>
    );
  }
  // MovieCard.propTypes = {
  //   movie: Proptypes.arrayOf(PropTypes.shape({
  //     title: PropTypes.string,
  //     subtitle: PropTypes.string,
  //     storyline: PropTypes.string,
  //     rating: PropTypes.number,
  //     imagePath: PropTypes.string,
  //   })).isRequired
  // }
}

export default MovieCard;
