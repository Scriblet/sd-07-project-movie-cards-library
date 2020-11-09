// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
    render () {
        const movie = this.props.movie;
        console.log(movie);
        return (
            <div>
                <img src={movie.imagePath} alt={movie.title}/>
                <h4>{movie.title}</h4>
                <h5>{movie.subtitle}</h5>
                <p>{movie.storyline}</p>
            </div>
        )
    }
}

export default MovieCard;
