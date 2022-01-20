import React from "react";

export const PlanetCards = props => {

	return (
		<div className="card p-0 me-3 mb-4" style={{ minWidth: "18rem", maxWidth: "18rem", minHeight: "22rem" }}>
			<img
				src="https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/07/star-wars-death-star-earth.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body p-3">
				<h5 className="card-title text-center px-3 py-0">Planet</h5>
				<p className="card-text">Climate: Random</p>
				<p className="card-text">Gravity: Random</p>
				<p className="card-text">Population: Random</p>
				<button className="btn btn-outline-primary">Learn more!</button><button className="btn btn-outline-warning float-end"><i className="far fa-heart"></i></button>
			</div>
		</div>
	);
};

