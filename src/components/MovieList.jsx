import React from 'react';

class MovieList extends React.Component {
  render() {
    return (<div>
     {this.props.movie}
   </div>);
  }
}

export default MovieList;
