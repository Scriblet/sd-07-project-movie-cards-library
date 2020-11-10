// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    // The line below is declaring that 'movies' is a props of the MovieList
    // component. That property is later called in the MovieList renderization
    // in the App.js file.
    const { movies } = this.props;
    return (
      <div>
        {/* Since 'movies' is known to be an array (I still got figure out
          how the code knows that), the .map() high order function can be
          used to create multiple child components, in this case, multiple
          MovieCard components. */}
        {movies.map(movie => <MovieCard key={movie.title} movie={movie}/>)}
      </div>
    );
  }
}

export default MovieList;