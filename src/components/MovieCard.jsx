// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props.movies
    return movies
  }
}