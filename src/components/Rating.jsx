import React from 'react';

class Rating extends React.Component {
  render() {
    const properties = this.props;
    const element = <span className="rating">{ properties.rating }</span>;
    return element;
  }
}

export default Rating;
