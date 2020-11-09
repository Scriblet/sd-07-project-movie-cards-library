import React, { Component } from 'react';
import MovieCard from './MovieCard';


class MovieList extends Component {
    render() {
    return (
      <main>
        <div>
            {this.props.movies.map(({title, subtitle, storyline, rating, imagePath }, index) => < MovieCard
            key={index}
            title={title}
            subtitle={subtitle}
            storyline={storyline}
            rating={rating}
            imagePath={imagePath }/>)}
        </div>
      </main>
    );
  }
}

export default MovieList;
