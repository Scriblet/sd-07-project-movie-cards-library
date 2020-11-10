import React from 'react';

export default class Rating extends React.Component {
  render() {
    const properties = this.props;
    return <span className="rating">{ properties.rating }</span>;
  }
}
