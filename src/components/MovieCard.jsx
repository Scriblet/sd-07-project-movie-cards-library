import React from 'react';
// import propTypes from 'prop-types';

class MovieCard extends React.Component {
  const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
  render() {
    return (
      <div>
        teste
      </div>
    )
  }
}

export default MovieCard;