import "./card-list.styles.css";

import Card from "../card/card";
import { Monster } from "../../App";

type CardListProps = {
	monster: Monster[];
}

const CardList = ({ monster }: CardListProps) => (
	<div className="card-list">
		{monster.map((monster) => {
			return <Card monster={monster} key={monster.id} />;
		})}
	</div>
);

export default CardList;
