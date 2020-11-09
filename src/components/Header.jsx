// implement Header component here
import propTypes from 'prop-types';
import React from 'react';

class Header extends React.Component {
  render() {
    return <div className="movie-card-header">{this.props.title}</div>;
  }
}

Header.propTypes = { title: propTypes.string };

export default Header;
