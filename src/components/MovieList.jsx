import React from "react";

export class MovieList extends React.Component {
  render () {
  return <h1>{this.props.children}</h1>;
  }
}