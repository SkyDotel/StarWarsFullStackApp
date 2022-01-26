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
			addFavorites: (favorite) => {
				const store = getStore();
				favorite.isFavorite = true;
				console.log(favorite.isFavorite)
				setStore({favorites : store.favorites.concat(favorite)});
			},
			removeFavorites: (fav, i) => {
				const {favorites} = getStore();
				setStore({favorites : favorites.filter((f, j) => j !== i)});
			},
		// 	toggleOff: (favOn) => {
		// 		const {favorites} = getStore();
				
		// 	}
		}
	};
};

export default getState;
