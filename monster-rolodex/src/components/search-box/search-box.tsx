import { ChangeEventHandler, ChangeEvent } from "react";

import "./search-box.styles.css";

type SearchBoxProps = {
	className: string;
	placeholder?: string;
	// onChangeHandler: ChangeEventHandler<HTMLInputElement>;
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ onChangeHandler, placeholder, className }: SearchBoxProps) => (
	<input
		type="search"
		className={`search-box ${className}`}
		placeholder={placeholder}
		onChange={onChangeHandler}
	/>
);

export default SearchBox;
