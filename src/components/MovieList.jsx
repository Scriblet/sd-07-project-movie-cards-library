import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
      return (
        <div>
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      );
  }
}

export default MovieList;
