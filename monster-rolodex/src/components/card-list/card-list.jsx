import "./card-list.styles.css";

import Card from "../card/card";

const CardList = ({ monster }) => (
	<div className="card-list">
		{monster.map((monster) => {
			return <Card monster={monster} key={monster.id} />;
		})}
	</div>
);

export default CardList;
