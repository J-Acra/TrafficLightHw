import React from "react";
import { useState, useEffect } from "react";

const TrafficLight = () => {
	const [blight, setBright] = useState("");
	const [count, setCount] = useState(0);
	const lightArray = ["brightRed", "brightYellow", "brightGreen"];
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		changeLight();
	// 	}, 1000);
	// 	return () => clearInterval(interval);
	// }, []);
	function changeLight() {
		setBright(lightArray[count]);
		if (count < lightArray.length) {
			if (count == lightArray.length - 1) {
				setCount(0);
			} else {
				setCount(count + 1);
			}
		} else {
			setCount(0);
		}
		console.log("count is " + count);
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
						blight == "brightRed" && "redBright"
					}`}></div>
				<div
					className={`yellow light ${
						blight == "brightYellow" && "yellowBright"
					}`}></div>
				<div
					className={`green light ${
						blight == "brightGreen" && "greenBright"
					}`}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
