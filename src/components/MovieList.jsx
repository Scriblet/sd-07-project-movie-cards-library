import React from 'react';
import MovieCard from './MovieCard.jsx';

export default class MovieList extends React.Component {
  render() {
    const properties = this.props;
    return (<section className="movie-list">
      { properties.movies.map((movie) => (
        <MovieCard key={movie.title} prop={movie} />
      )) }
    </section>);
  }
}
