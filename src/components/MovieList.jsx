// implement MovieList component here
import React from 'react';
import movies from './src/data.js';

class MovieList extends React.Component {
  render() {
  return <div>{ this.props.movies }</div>;
  }
}

export default MovieList;
