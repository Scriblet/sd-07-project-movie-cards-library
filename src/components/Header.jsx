import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
      <h1 className='page-title' >{ this.props.title }</h1>
      </header>
    );
  }
}

Header.propTypes = { title: props.title };
Header.defaulProps = { title: 'Movie cards Library'};

export default Header;
