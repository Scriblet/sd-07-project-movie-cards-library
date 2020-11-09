import PropTypes from 'prop-types';
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className="movie-card">
        <img src={imagePath} alt={title} className="movie-card-image" />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <div className="movie-card-rating">
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <div className="movie-card-rating">
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}

MovieCard.defaultProps = {
  movie: {
    title: 'Harry Potter',
    subtitle: 'Harry Potter e as Relíquias da Morte: Parte 2',
    storyline:
      'O confronto entre o bem e o mal espera pelo jovem Harry, que se prepara ao lado de Rony e Hermione para a batalha final contra Lord Voldemort. Harry se transformou em um garoto de aço em uma missão para livrar o mundo do mal. Os amigos devem procurar pelas últimas horcruxes que mantêm o covarde feiticeiro imortal.',
    rating: 5,
    imagePath: 'https://images3.alphacoders.com/144/thumb-350-144759.jpg',
  },
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
