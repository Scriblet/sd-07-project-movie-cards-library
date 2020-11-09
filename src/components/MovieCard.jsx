import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movie;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <img alt='' src={imagePath}></img>
      </div>
)
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
