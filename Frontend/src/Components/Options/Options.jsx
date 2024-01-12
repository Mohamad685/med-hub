import React from "react";
import "./Options.css";
function OptionsBox({ margin }) {
	const optionStyle = {
		margin: margin,
	};
	return (
		<div style={optionStyle} className="options-box">
			<a href="">Create Patient Profile</a>
			<a href="">Patients List</a>
			<a href="">Live Chat</a>
			<a href="">Send Email</a>
			<a href="">Notifications</a>
		</div>
	);
}

export default OptionsBox;
