// implement Rating component here
import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const rating = this.props.rating;
    // console.log(`Chegada da data no mavelist ${movies}`);
    return (<div> {rating} </div>);
  }
}

export default Rating;
