// implement Header component here

import React from 'react';

class Header extends React.Component {
    render() {
    return <div className = 'movie-card-header'>{this.props.title}</div>
    }
}

export default Header;