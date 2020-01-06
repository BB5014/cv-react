import React from "react";

const Education = ({ titleQualification, degree1, degree2, degree3 }) => (
	<div className="myEducation">
		<h4>{titleQualification}</h4>
		<ul>
			<li>{degree1}</li>
			<li>{degree2}</li>
			<li>{degree3}</li>
		</ul>	
	</div>
);
export default Education;
