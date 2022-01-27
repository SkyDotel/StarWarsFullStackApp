const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters:[],
			planets:[],
			images: {
				"/PlanetsDetails/0" : "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg",
				"/CharacterDetails/0": "https://mcdn.wallpapersafari.com/medium/23/16/wYTO9j.jpg"
			},
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
				if (favorite.isFavorite === true) {
					favorite.isFavorite = false;
					setStore({favorites : store.favorites.filter(favoriteItem => favoriteItem.uid + favoriteItem.name !== favorite.uid + favorite.name)})
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
			loadCharacters: async () => {
				const response = await fetch('https://swapi.dev/api/people');
				if (response.status === 200) {
					const payload = await response.json();
					const myNewCharacters = payload.results.map((people, i) => {
						people["details"] = "/CharacterDetails/",
						people["isFavorite"] = false;
						people["uid"] = i
						return people;
					})
					setStore({characters: myNewCharacters});
					console.log (payload.results);
				}
			},
			loadPlanets: async () => {
				const response = await fetch('https://swapi.dev/api/planets');
				if (response.status === 200) {
					const payload = await response.json();
					const myNewPlanets = payload.results.map((planets, i) => {
						planets.details = "/PlanetsDetails/",
						planets.isFavorite = false;
						planets.uid = i
						return planets;
					})
					setStore({planets: myNewPlanets});
					console.log (myNewPlanets);
				}
			},
		}
	};
};

export default getState;
