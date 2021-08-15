import React, { Fragment } from "react";
import Simplecounter from "./simplecounter.jsx";

const Home = () => {
	return (
		<Fragment classname="body_counter">
			<h1>Simple Counter</h1>
			<div className="counter_numbers offset-7">
				<div>
					<Simplecounter time={1000} next={0} />
				</div>
				<div>
					<Simplecounter time={100} next={0} />
				</div>
				<div>
					<Simplecounter time={10} next={0} />
				</div>
				<div>
					<Simplecounter time={1} next={0} />
				</div>
			</div>
		</Fragment>
	);
};
export default Home;
