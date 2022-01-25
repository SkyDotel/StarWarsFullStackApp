import React from "react";
import "../../styles/home.css";
import { PlanetCards } from "../component/Planetcards";
import { CharacterCards } from "../component/CharacterCards";


export const Home = (props) => {

	return (
		<div className="container-fluid p-0 pb-4 m-0">
			<h1 className="mx-0 px-4 pb-2 pt-4 headers">Characters</h1>
			<div className="d-flex flex-row mx-auto" style={{ width: "90%", overflow: "auto" }}>
				<CharacterCards favorites={props.favorites} addFavorite = {props.addFavorite}/>
				<CharacterCards/>
				<CharacterCards/>
				<CharacterCards/>
				<CharacterCards/>
				<CharacterCards/>
				<CharacterCards/>
				<CharacterCards/>
				
			</div>
			<h1 className="mx-0 px-4 pb-2 pt-4 headers">Planets</h1>
			<div className="d-flex flex-row mx-auto mb-4" style={{ width: "90%", overflow: "auto" }}>
				<PlanetCards/>
				<PlanetCards/>
				<PlanetCards/>
				<PlanetCards/>
				<PlanetCards/>
				<PlanetCards/>
				<PlanetCards/>
				<PlanetCards/>
				<PlanetCards/>
				<PlanetCards/>
				<PlanetCards/>
				<PlanetCards/>
				
			</div>
		</div>
	);
};
