import React from "react";
export default class Rating extends React.Component {
  render() {
    return <span className='movie-card-rating'>{this.props.rating}</span>
  }
}
