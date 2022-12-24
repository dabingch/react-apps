import { Component } from "react";

import "./App.css";

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

	render() {
		const filteredMonsters = this.state.monsters.filter((monster) =>
			monster.name.toLowerCase().includes(this.state.searchField)
		);

		return (
			<div className="App">
				<input
					type="search"
					className="search-box"
					placeholder="Search Monster"
					onChange={(e) => {
						const searchString = e.target.value.toLowerCase();

						this.setState({ searchField: searchString });
					}}
				/>
				{filteredMonsters.map((monster) => {
					return <h1 key={monster.id}>{monster.name}</h1>;
				})}
			</div>
		);
	}
}

export default App;
