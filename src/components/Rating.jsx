import React from "react";

class Rating extends React.Component {
	render() {
		const rating = this.props.rating;
		return (
			<div className='movie-card-rating'>
				<div className='rating'>{rating}</div>
			</div>
		);
	}
}

export default Rating;
