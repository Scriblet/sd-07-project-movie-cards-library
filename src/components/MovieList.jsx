import React from 'react';
import MovieCard from './MovieCard.jsx';

export default class MovieList extends React.Component {
  render() {
    const properties = this.props;
    return (<section className="movie-list">
      { properties.movies.map((element) => (
        <MovieCard key={element.title} movie={element} />
      )) }
    </section>);
  }
}
