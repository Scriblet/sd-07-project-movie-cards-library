import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render () {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movies; 
    return (
      <div>
          <img src={imagePath} alt={`${title} sprite`} ></img>
          <h4> {title} </h4>
          <h5> {subtitle} </h5>
          <p> {storyline}</p>
        <span>Rating {rating}</span>
      </div>
    );
  }
}

MovieCard.propTypes = {
    movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline:PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.number,
  })
};

export default MovieCard;
