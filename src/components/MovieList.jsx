// implement MovieList component here
import React from 'react'
import MovieCard from './MovieCard'
import PropTypes from 'prop-types'

class MovieList extends React.Component{
  
  render() {
    return (
      <div className='movie-list'>
      {this.props.movies.map((movCard) =>(
        <MovieCard key={movCard.title} movie={movCard}/>
       ))}
      </div>
    ) 
    
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired).isRequired
};

export default MovieList