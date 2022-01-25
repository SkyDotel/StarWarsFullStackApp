import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
	const {favorites} = props;
	

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 ms-3 h1">
					<img height="70" width="125" src="https://www.citypng.com/public/uploads/preview/-51608494584ia2sfbncsd.png"></img>
				</span>
			</Link>
			<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle me-5" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false" data-bs-toggle="dropdown">Favorites <span className="badge bg-secondary">{favorites.length}</span></button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenu2">
						<ul id="favoritelist">
							{favorites.map((fav, i) => {
								if (favorites.length < 1) {
									return (
									<li className="list-group-item-action dropdown-item" key="0">(empty)</li>
									)
								} else {
									return (
										<li className="list-group-item-action dropdown-item list-items" key={i}>
											{fav.name}{" "}									
											 <span className="favoriteDelete" onClick={() => props.deleteContact(fav)}>
												<i className="fas fa-trash"></i></span>
										</li>
								)
							}})}
						</ul>
  					</div>
			</div>
		</nav>
	);
};
