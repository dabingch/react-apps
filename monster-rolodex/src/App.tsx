import { useState, useEffect, ChangeEvent } from "react";

import { getData } from "./utils/data.utils";

import "./App.css";

import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

export type Monster = {
	id: string;
	name: string;
	email: string;
}

const App = () => {
	const [searchField, setSearchField] = useState("");
	const [monsters, setMonsters] = useState<Monster[]>([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	useEffect(() => {

		const fetchUsers = async () => {
			const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users");
			setMonsters(users);
		}

		fetchUsers()
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField)
		);

		setFilteredMonsters(newFilteredMonsters);
	}, [searchField, monsters]);

	const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
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
