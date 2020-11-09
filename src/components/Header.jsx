import React from 'react';
import propTypes from 'prop-types';
import '../styles/components/header.css';

class Header extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <header className="header">
        <h1>{title}</h1>
      </header>
    );
  }
}

Header.propTypes = { title: propTypes.string };

Header.defaultProps = { title: 'Movie Cards Library' };

export default Header;
