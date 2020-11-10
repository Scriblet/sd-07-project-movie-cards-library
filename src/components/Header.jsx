// implement Header component here
// Iniciando o projeto 🚀"
import React, { Component } from 'react';
import '../App.css';// tem que colocar ../ por causa da localização do arquivo


class Header extends Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header;
