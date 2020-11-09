import React from 'react';
import MovieCard from './MovieCard';

// const MovieList = (props) => {
//   const { movies } = props;
//   return (
//     <div className="movie-list">
//       {movies.map((movie) => <MovieCard key={movie.title} data={movie} />)}
//     </div>
//   );
// };
class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        <span>MovieList</span>
        <MovieCard />
      </div>
    );
  }
}

export default MovieList;
