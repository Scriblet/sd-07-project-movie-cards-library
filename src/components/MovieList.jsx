// implement MovieList component here
import React from 'react';
import MovieCards from './MovieCard';

class MovieList extends React.Component {
  render() {
    const list = [
      {
        title: 'Movie Title 1',
        subtitle: 'Movie Subtitle 1',
        storyline: 'Movie Storyline 1',
        rating: 4.5,
        imagePath: 'images/movie_1',
      },
      {
        title: 'Movie Title 2',
        subtitle: 'Movie Subtitle 2',
        storyline: 'Movie Storyline 2',
        rating: 4.5,
        imagePath: 'images/movie_2',
      },
      {
        title: 'Movie Title 3',
        subtitle: 'Movie Subtitle 3',
        storyline: 'Movie Storyline 3',
        rating: 3,
        imagePath: 'images/movie_3',
      },
    ];
    return (
      <div>
        {list.map((element) => <li>{element}</li>)}
      </div>
    );
  }
}

export default MovieList;
