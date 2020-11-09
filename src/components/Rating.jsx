import React from 'react';
import RatinigNote from '../data.js';

function getNota(title) {
  return RatinigNote.map((note) => (note.title === title ? note.rating : ''));
}

class Rating extends React.Component {
  render() {
    const { rating,index } = this.props
    return (
      <div key={index} className="rating">
        { getNota(rating) }
      </div>
    );
  }
}

export default Rating;
