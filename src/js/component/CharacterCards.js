import propTypes from "prop-types";
import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";

export const CharacterCards = (props) => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card p-0 me-3 mb-4" style={{ minWidth: "18rem", maxWidth: "18rem", minHeight: "22rem" }}>
			<img
				src={props.img}
				className="card-img-top"
			/>
			<div className="card-body p-3">
				<h5 className="card-title text-center px-3 py-0">{props.name}</h5>
				<p className="card-text">Gender: {props.gender}</p>
				<p className="card-text">Hair Color: {props.hair_color}</p>
				<p className="card-text">Eye Color: {props.eye_color}</p>
				<button className="btn btn-outline-primary">Learn more!</button> <button className="btn btn-outline-warning float-end favorites" onClick={() => actions.addFavorites(props.data)}><i className="far fa-heart"></i></button>
			</div>
		</div>
	);
	CharacterCards.propTypes = {
		id: PropTypes.number,
		img: PropTypes.string,
		name: PropTypes.string,
		gender: PropTypes.string,
		hair_color: PropTypes.string,
		eye_color: PropTypes.string,
	}
};


