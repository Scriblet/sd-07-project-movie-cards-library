import React, { Component } from 'react';
import MovieCard from './MovieCard';

const movies = [
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

class MovieList extends Component {
  render() {
    return (
      movies.map((movie) => {
        const setKey = movie.title.toString();
        return (
          <section className="movie-list">
            <div className="movie-card">
              <MovieCard
                key={setKey}
                title={movie.title}
                subtitle={movie.subtitle}
                storyline={movie.storyline}
                rating={movie.rating}
                imagePath={movie.imagePath}
              />
            </div>
          </section>
        );
      })
    );
  }
}

export default MovieList;
