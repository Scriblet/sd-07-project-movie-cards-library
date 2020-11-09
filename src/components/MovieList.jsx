import React from 'react';
import MovieCard from './MovieCard';

// o map é feito em pokemons , mais pokemons so vai ser passado no App.js
class MovieList extends React.Component {
    render() {
        return (
            <div >
                {this.props.movies.map(movie => <MovieCard key={movie.title} movie={movie} />)}   
            </div>
        );
    }
}

export default MovieList;