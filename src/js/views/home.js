import React, {useContext} from "react";
import "../../styles/home.css";
import { PlanetCards } from "../component/Planetcards";
import { CharacterCards } from "../component/CharacterCards";
import { Context } from "../store/appContext";

export const Home = (props) => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid p-0 pb-4 m-0">
			<h1 className="mx-0 px-4 pb-2 pt-4 headers">Characters</h1>
			<div className="d-flex flex-row mx-auto" style={{ width: "90%", overflow: "auto" }}>
				{store.characters.map((c, i) => <CharacterCards data = {c} name="Boba Fett" gender="male" hair_color="black" eye_color="brown" img="https://cdn.theatlantic.com/thumbor/X5yED07xUA9IPve3TgInur6lhqE=/547x0:1953x1406/1080x1080/media/img/mt/2022/01/06_boba_fett_trailer_stills_uhd_t_r709_211010_8f3ddb41/original.jpg" key ={i}/>)}
			</div>
			<h1 className="mx-0 px-4 pb-2 pt-4 headers">Planets</h1>
			<div className="d-flex flex-row mx-auto mb-4" style={{ width: "90%", overflow: "auto" }}>
				{store.planets.map((c, i) => <PlanetCards data = {c} name="Tatooine" climate="arid" population="200000" img="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg" key={i}/>)}				
			</div>
		</div>
	);
};
