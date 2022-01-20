import propTypes from "prop-types";
import React from "react";

export const CharacterCards = props => {

	return (
		<div className="card p-0 me-3 mb-4" style={{ minWidth: "18rem", maxWidth: "18rem", minHeight: "22rem" }}>
			<img
				src="https://cdn.theatlantic.com/thumbor/X5yED07xUA9IPve3TgInur6lhqE=/547x0:1953x1406/1080x1080/media/img/mt/2022/01/06_boba_fett_trailer_stills_uhd_t_r709_211010_8f3ddb41/original.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body p-3">
				<h5 className="card-title text-center px-3 py-0">Random</h5>
				<p className="card-text">Gender: Random</p>
				<p className="card-text">Hair Color: Random</p>
				<p className="card-text">Eye Color: Random</p>
				<button className="btn btn-outline-primary">Learn more!</button> <button className="btn btn-outline-warning float-end"><i className="far fa-heart"></i></button>
			</div>
		</div>
	);
};


