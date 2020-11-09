import React from 'react';
import Rating from './Rating.jsx';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;

    return (
      <section>
        <div>
          <img src={imagePath} alt="Baner" />
        </div>
        <div>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </div>
        {<Rating rating={rating} />}
      </section>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
}
