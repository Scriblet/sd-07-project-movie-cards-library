import React from 'react';
import MovieCard from './MovieCard.jsx';

export default class MovieList extends React.Component {
  render() {
    const properties = this.props;
    return (<section className="movie-list">
      { properties.movies.map((movie) => (<div key={movie.title}><MovieCard>{movie}</MovieCard></div>)) }
    </section>);
  }
}
