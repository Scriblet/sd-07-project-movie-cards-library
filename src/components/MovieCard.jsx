import React from "react";

export class MovieCard extends React.Component {
  render () {
  return <h1>{this.props.children}</h1>;
  }
}