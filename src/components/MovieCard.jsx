// implement MovieCard component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../App.css';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    // console.log(`Chegada da data no movieCard ${title}`);
    return (
      <section className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" alt="" src={imagePath} />
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Rating rating={rating} />
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
  // Na doc. existe o PropTypes.object e não dá warning. O CC só reclama pq é má prática
  // as {} do shape que dizem que é objeto
  // https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
  // Podia fazer assim, 1 por 1?
};

export default MovieCard;
