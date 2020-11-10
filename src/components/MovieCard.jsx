// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.movie.imagePath} alt="Imagem do filme" />
        <h4>{this.props.movie.title}</h4>
        <h5>{this.props.movie.subtitle}</h5>
        <p>{this.props.movie.storyline}</p>
        <Rating rating={this.props.movie.rating} />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: {},
  imagePath: 'images/movie_1',
  title: 'Título do Filme',
  subtitle: 'Subtítulo',
  storyline: 'Breve resumo sobre a história do filme',
  rating: 0,
};

export default MovieCard;
