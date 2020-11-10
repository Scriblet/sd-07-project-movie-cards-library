// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
        {movies.map((filme) => <MovieCard movie={filme} key={filme.title} />)}
      </div>
    );
  }
  movies.propTypes = {
    title: PropTypes.string
    subtitle: PropTypes.string
    storyline: PropTypes.string
    rating: PropTypes.number
    storyline: PropTypes.string
  };
}

export default MovieList;
