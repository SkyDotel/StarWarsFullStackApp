import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img height="70" width="125" src="https://www.citypng.com/public/uploads/preview/-51608494584ia2sfbncsd.png"></img>
				</span>
			</Link>
			<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown"aria-expanded="false" data-bs-toggle="dropdown">Favorites</button>
					<div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenu2">
						<button className="dropdown-item" type="button">Action</button>
						<button className="dropdown-item" type="button">Another action</button>
						<button className="dropdown-item" type="button">Something else here</button>
  					</div>
			</div>
		</nav>
	);
};
