import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath /* , rating */ } = this.props.movie;
    return (
      <section>
        <img src={imagePath} alt="" />;
        <div>
          <h4>{title}</h4>;
          <h5>{subtitle}</h5>;
          <p>{storyline}</p>;
        </div>
      </section>
    );
  }
}

MovieCard.protoType = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }),
};

export default MovieCard;
