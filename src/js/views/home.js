import React from "react";
import "../../styles/home.css";
import { PlanetCards } from "../component/Planetcards";
import { CharacterCards } from "../component/CharacterCards";

export const Home = () => {

	return (
		<div className="container-fluid p-0 pb-4 m-0 bg-dark bg-opacity-75">
			<h1 className="mx-0 px-4 pb-2 pt-4 text-white">Characters</h1>
			<div className="d-flex flex-row mx-auto" style={{ width: "90%", overflow: "auto" }}>
				<CharacterCards/>
				<CharacterCards/>
				<CharacterCards/>
				<CharacterCards/>
				<CharacterCards/>
				<CharacterCards/>
				<CharacterCards/>
				<CharacterCards/>
				
			</div>
			<h1 className="mx-0 px-4 pb-2 pt-4 text-white">Planets</h1>
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
