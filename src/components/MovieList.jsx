// implement MovieList component here
import React from 'react';

class MovieList extends React.Component {
  render() {
    return (<div>
        {this.props.movies[0]};
    </div>
    );
  }
}

export default MovieList;