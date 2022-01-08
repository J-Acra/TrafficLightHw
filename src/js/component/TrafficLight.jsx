import React from "react";
import { useState } from "react";

const TrafficLight = () => {
	const [blight, setBright] = useState("");
	const lightArray = [0, 1, 2];
	return (
		<div className="bigDiv">
			<button className="changeLight">Change</button>
			<div className="stem"></div>
			<div className="lightHousing">
				<div
					onClick={() => setBright("brightRed")}
					className={`red light ${hColor == "red" && "selected"}
					${blight == "brightRed" && "redBright"}`}></div>
				<div
					onClick={() => setBright("brightYellow")}
					className={`yellow light ${hColor == "yellow" && "selected"}
					${blight == "brightYellow" && "yellowBright"}`}></div>
				<div
					onClick={() => setBright("brightGreen")}
					className={`green light ${hColor == "green" && "selected"}
					${blight == "brightGreen" && "greenBright"}`}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
