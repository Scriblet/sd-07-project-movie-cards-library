import React from 'react';
// import PropTypes from 'prop-types';

export default class Rating extends React.Component {
  render() {
    const properties = this.props;
    return <span className="rating">{ properties.rating }</span>;
  }
}
