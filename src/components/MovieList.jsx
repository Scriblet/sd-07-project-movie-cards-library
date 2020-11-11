import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    const movies = this.props;
    return <div>{movies}</div>;
  }
}

export default MovieList;
