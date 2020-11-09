// implement MovieList component here
import React from 'react';
import movies from '../data'

class MovieList extends React.Component {
  render() {
		return(
			<p>{ movies[0].title }</p>
		);
	}
}

export default MovieList;
