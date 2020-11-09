import React, { Component } from 'react';
// import movies from '../data';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movieList">
        <p>{movies}</p>
      </div>
    );
  }
}

export default MovieList;
