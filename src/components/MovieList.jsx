// implement MovieList component here
// implement Header component here
import React from 'react';
import MovieCard from './MovieCard.jsx'

class MovieList extends React.Component {
  render() {
    return (
        this.props.movies.map(movie => <MovieCard key={movie.name}/>)
    );
  }
}

export default MovieList;
