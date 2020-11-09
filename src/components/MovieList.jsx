import React from 'react';
import data from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        { data}
      </div>
    );
  }
}

export default MovieList;
