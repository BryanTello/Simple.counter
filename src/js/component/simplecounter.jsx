import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Simplecounter = props => {
	const [myCounter, setmyCounter] = useState(props.next);

	useEffect(() => {
		setInterval(() => {
			setmyCounter(myCounter => myCounter + 1);
		}, 1000 * props.time);
	}, []);

	return (
		<div className="counter_div">
			<span>{myCounter % 10}</span>
		</div>
	);
};
export default Simplecounter;

Simplecounter.propTypes = {
	time: PropTypes.number,
	next: PropTypes.number
};
