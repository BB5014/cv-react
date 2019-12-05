import React from "react";

const Contact = ({title, linkedin}) => (
	<div className="contactMe">
		<h4>{title}</h4>
		<a
			className="nav-link"
			href="https://www.linkedin.com/in/nathalie-balotte/"
		>
			<img alt="linkedin" src={linkedin} className="ml-1" />
		</a>
	</div>
);
export default Contact;