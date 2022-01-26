import React, {useState, useContext} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { PlanetDetails } from "./views/PlanetDetails";
import { CharacterDetails } from "./views/CharacterDetails";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Context } from "./store/appContext";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const [ favorites, setFavorites ] = useState([]);
	const { store, actions } = useContext(Context);
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar favorites={favorites}/>
					<Switch>
						<Route exact path="/">
							<Home favorites={favorites} />
						</Route>
						<Route exact path="/CharacterDetails/:theuid">
							<CharacterDetails />
						</Route>
						<Route exact path="/PlanetDetails/:theuid">
							<PlanetDetails />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
