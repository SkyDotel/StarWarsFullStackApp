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
					id: 1
				},
				{
					name: "Boba Fett",
					birth_year: "32 BBY",
					gender: "male",
					height: "183",
					skin_color: "tan",
					eye_color: "brown",
					hair_color: "black",
					id: 1
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
					id: 2
				},
				{
					name: "Tatooine",
					climate: "arid",
					population: "120000",
					orbital_period: "304",
					rotation_period: "23",
					diameter: "10465",
					id: 2
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			addFavorites: (favorite) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color

				//reset the global store
				setStore({favorites : store.favorites.concat(favorite)});
			},
			removeFavorites: (i) => {
				//get the store
				const {favorites} = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color

				//reset the global store
				setStore({favorites : favorites.filter((f, j) => j !== i)});
			}
		}
	};
};

export default getState;
