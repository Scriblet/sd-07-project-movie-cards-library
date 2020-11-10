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
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
  // title: PropTypes.string.isRequired,
  // subtitle: PropTypes.string.isRequired,
  // storyline: PropTypes.string.isRequired,
  // rating: PropTypes.string.isRequired,
  // imagePath: PropTypes.string.isRequired,
};

export default MovieCard;
