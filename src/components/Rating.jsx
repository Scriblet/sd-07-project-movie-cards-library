import React, { Component } from 'react';

class Rating extends Component {
    render() {
        return (
            <span>
                {this.props.rating}
            </span>
        );
    }
}

export default Rating;
