import React from 'react';
import RatinigNote from '../data.js';

function getNota(title) {
  return RatinigNote.map((note) => (note.title === title ? note.rating : 'não encontrado'));
}

class Rating extends React.Component {
  render() {
    return (
      <div className="rating">
        <p> {getNota('Kingsglaive')}</p>
      </div>
    );
  }
}

export default Rating;
