import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <div className="rating">
        <em>{this.props.rating}</em>
      </div>
    );
  }
}

export default Rating;
