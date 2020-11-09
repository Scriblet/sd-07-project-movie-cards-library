import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map(movie => console.log(movie))};
      </div>
    );
  }
}

export default MovieList;
