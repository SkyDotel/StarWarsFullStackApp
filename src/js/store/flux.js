const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters:[
				{
					name: "Boba Fett",
					birth_year: "32 BBY",
					gender: "male",
					height: "183",
					skin_color: "tan",
					eye_color: "brown",
					hair_color: "black",
					uid: 1,
					detail: "/CharacterDetails/",
					isFavorite: false,
				},
				{
					name: "Boba Fett",
					birth_year: "32 BBY",
					gender: "male",
					height: "183",
					skin_color: "tan",
					eye_color: "brown",
					hair_color: "black",
					uid: 2,
					detail: "/CharacterDetails/",
					isFavorite: false,
				},
				{
					name: "Boba Fett",
					birth_year: "32 BBY",
					gender: "male",
					height: "183",
					skin_color: "tan",
					eye_color: "brown",
					hair_color: "black",
					uid: 3,
					detail: "/CharacterDetails/",
					isFavorite: false,
				},
				{
					name: "Boba Fett",
					birth_year: "32 BBY",
					gender: "male",
					height: "183",
					skin_color: "tan",
					eye_color: "brown",
					hair_color: "black",
					uid: 4,
					detail: "/CharacterDetails/",
					isFavorite: false,
				},
				{
					name: "Boba Fett",
					birth_year: "32 BBY",
					gender: "male",
					height: "183",
					skin_color: "tan",
					eye_color: "brown",
					hair_color: "black",
					uid: 5,
					detail: "/CharacterDetails/",
					isFavorite: false,
				},
				{
					name: "Boba Fett",
					birth_year: "32 BBY",
					gender: "male",
					height: "183",
					skin_color: "tan",
					eye_color: "brown",
					hair_color: "black",
					uid: 6,
					detail: "/CharacterDetails/",
					isFavorite: false,
				},
				{
					name: "Boba Fett",
					birth_year: "32 BBY",
					gender: "male",
					height: "183",
					skin_color: "tan",
					eye_color: "brown",
					hair_color: "black",
					uid: 7,
					detail: "/CharacterDetails/",
					isFavorite: false,
				},
				{
					name: "Boba Fett",
					birth_year: "32 BBY",
					gender: "male",
					height: "183",
					skin_color: "tan",
					eye_color: "brown",
					hair_color: "black",
					uid: 8,
					detail: "/CharacterDetails/",
					isFavorite: false,
				}
			],
			planets:[
				{
					name: "Tatooine",
					climate: "arid",
					population: "120000",
					orbital_period: "304",
					rotation_period: "23",
					diameter: "10465",
					uid: 1,
					detail: "/PlanetDetails/",
					isFavorite: false,
				},
				{
					name: "Tatooine",
					climate: "arid",
					population: "120000",
					orbital_period: "304",
					rotation_period: "23",
					diameter: "10465",
					uid: 2,
					detail: "/PlanetDetails/",
					isFavorite: false,
				},
				{
					name: "Tatooine",
					climate: "arid",
					population: "120000",
					orbital_period: "304",
					rotation_period: "23",
					diameter: "10465",
					uid: 3,
					detail: "/PlanetDetails/",
					isFavorite: false,
				},
				{
					name: "Tatooine",
					climate: "arid",
					population: "120000",
					orbital_period: "304",
					rotation_period: "23",
					diameter: "10465",
					uid: 4,
					detail: "/PlanetDetails/",
					isFavorite: false,
				},
				{
					name: "Tatooine",
					climate: "arid",
					population: "120000",
					orbital_period: "304",
					rotation_period: "23",
					diameter: "10465",
					uid: 5,
					detail: "/PlanetDetails/",
					isFavorite: false,
				},
				{
					name: "Tatooine",
					climate: "arid",
					population: "120000",
					orbital_period: "304",
					rotation_period: "23",
					diameter: "10465",
					uid: 6,
					detail: "/PlanetDetails/",
					isFavorite: false,
				},
				{
					name: "Tatooine",
					climate: "arid",
					population: "120000",
					orbital_period: "304",
					rotation_period: "23",
					diameter: "10465",
					uid: 7,
					detail: "/PlanetDetails/",
					isFavorite: false,
				},
				{
					name: "Tatooine",
					climate: "arid",
					population: "120000",
					orbital_period: "304",
					rotation_period: "23",
					diameter: "10465",
					uid: 8,
					detail: "/PlanetDetails/",
					isFavorite: false,
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/*
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			addFavorites: (favorite, i) => { 
				const store = getStore();
				if (favorite.isFavorite === true) {
					favorite.isFavorite = false;
					getActions().removeFavorites(i)
				} else {
					favorite.isFavorite = true;
					setStore({favorites : store.favorites.concat(favorite)});
				}
			},
			removeFavorites: (i) => {
				const {favorites} = getStore();
				let newFavorites = favorites.map((item, index) => {
					if (index === i) {
						item["isFavorite"] = false;
						return item
					} else {
						return item; 
					}	
				})
				setStore({favorites : newFavorites.filter((f, indexToDelete) => indexToDelete !== i)});
			},

		}
	};
};

export default getState;
