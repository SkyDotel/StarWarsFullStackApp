import PropTypes from "prop-types";
import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";

import { Link, useParams } from "react-router-dom";



export const PlanetCards = (props) => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card p-0 me-3 mb-4" style={{ minWidth: "18rem", maxWidth: "18rem", minHeight: "22rem" }}>
			<img
				src={props.img}
				className="card-img-top"
			/>
			<div className="card-body p-3">
				<h5 className="card-title text-center px-3 py-0">{props.name}</h5>
				<p className="card-text">Climate: {props.climate}</p>
				<p className="card-text">Population: {props.population}</p>
				<Link to="/PlanetDetails/1"><button className="btn btn-outline-primary">Learn more!</button></Link> 
				<button className="btn btn-outline-warning float-end favorites" onClick={() => actions.addFavorites(props.data)}><i className="far fa-heart"></i></button>
			</div>
		</div>
	);


};
	PlanetCards.propTypes = {
		id: PropTypes.number,
		img: PropTypes.string,
		name: PropTypes.string,
		population: PropTypes.string,
		terrain: PropTypes.string,
		climate: PropTypes.string
	}
