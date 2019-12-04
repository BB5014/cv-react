import React from "react";

const Education = ({ qualification, degree1, degree2, degree3 }) => (
	<div className="w-25 d-flex flex-column m-3">
		<h4>{qualification.toUpperCase()}</h4>
		<ul>
			<li>{degree1}</li>
			<li>{degree2}</li>
			<li>{degree3}</li>
		</ul>	
	</div>
);
export default Education;
