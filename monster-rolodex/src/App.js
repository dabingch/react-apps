import { Component } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	onSearchChange = (e) => {
		const searchString = e.target.value.toLowerCase();

		this.setState({ searchField: searchString });
	};

	render() {
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField)
		);

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
	}
}

export default App;
