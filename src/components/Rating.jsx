import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating, index } = this.props;

    return (
      <div key={index} className="rating">
        {rating}
      </div>
    );
  }
}

export default Rating;
