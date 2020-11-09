import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    return (
      <div>
        {this.props.movies.map((movie) => <div>{movie.title}</div>)}
      </div>
    );
  }
}

export default MovieList;
