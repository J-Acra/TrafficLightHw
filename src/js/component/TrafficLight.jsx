import React from "react";
import { useState, useEffect } from "react";

const TrafficLight = () => {
	const [count, setCount] = useState(0);
	const lightArray = ["brightRed", "brightYellow", "brightGreen"];
	useEffect(() => {
		const interval = setInterval(() => {
			setCount((unicorn) => changeLight(unicorn));
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	function changeLight(omicron) {
		console.log("count is " + omicron);
		if (omicron < lightArray.length) {
			if (omicron == lightArray.length - 1) {
				return 0;
			} else {
				return omicron + 1;
			}
		} else {
			return 0;
		}
	}

	return (
		<div className="bigDiv">
			<button onClick={() => changeLight()} className="changeLight">
				Change
			</button>
			<div className="stem"></div>
			<div className="lightHousing">
				<div
					className={`red light ${
						lightArray[count] == "brightRed" && "redBright"
					}`}></div>
				<div
					className={`yellow light ${
						lightArray[count] == "brightYellow" && "yellowBright"
					}`}></div>
				<div
					className={`green light ${
						lightArray[count] == "brightGreen" && "greenBright"
					}`}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
