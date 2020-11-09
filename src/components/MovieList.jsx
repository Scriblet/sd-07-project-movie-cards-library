import React from 'react';
import MovieCard from './MovieCard';
import Movies from '../data'

class MovieList extends React.Component {
	render() {
		return (
      <div className='movie-list'>
      {Movies.map((mv) => (<MovieCard movie={mv} />))}
      </div>
    );
	}
}

export default MovieList;