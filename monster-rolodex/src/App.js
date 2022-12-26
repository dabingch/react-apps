import { useState, useEffect } from "react";

import "./App.css";

import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

const App = () => {
	const [searchField, setSearchField] = useState("");
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField)
		);

		setFilteredMonsters(newFilteredMonsters);
	}, [searchField, monsters]);

	const onSearchChange = (e) => {
		const searchString = e.target.value.toLowerCase();

		setSearchField(searchString);
	};

	return (
		<div className="App">
			<h1 className="app-title">Monster Rolodex</h1>
			<SearchBox
				onChangeHandler={onSearchChange}
				placeholder="Search Monster"
				className="search-box"
			/>
			<CardList monster={filteredMonsters} />
		</div>
	);
};

export default App;
