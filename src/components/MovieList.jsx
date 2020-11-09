import React, { Component } from 'react';
import MovieCard from './MovieCard';


class MovieList extends Component {
  render() {
    return (
      <main>
        <div>
            <MovieCard title={this.props.movies[0].title} subtitle={this.props.movies[0].subtitle} storyline={this.props.movies[0].storyline} rating={this.props.movies[0].rating} imagePath={this.props.movies[0].imagePath}/>
            <MovieCard title={this.props.movies[1].title} subtitle={this.props.movies[1].subtitle} imagePath={this.props.movies[1].imagePath}/>
            <MovieCard title={this.props.movies[2].title} subtitle={this.props.movies[2].subtitle} storyline={this.props.movies[2].storyline} rating={this.props.movies[2].rating} imagePath={this.props.movies[2].imagePath}/>
            <MovieCard title={this.props.movies[3].title} subtitle={this.props.movies[3].subtitle} storyline={this.props.movies[3].storyline} rating={this.props.movies[3].rating} imagePath={this.props.movies[3].imagePath}/>
            <MovieCard title={this.props.movies[4].title} subtitle={this.props.movies[4].subtitle} storyline={this.props.movies[4].storyline} rating={this.props.movies[4].rating} imagePath={this.props.movies[4].imagePath}/> 
        </div>
      </main>
    );
  }
}

export default MovieList;
