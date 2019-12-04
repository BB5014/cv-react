import React from "react";

const Contact = ({title, linkedin}) => (
	<div className="w-25 d-flex flex-column m-3">
		<h4>{title.toUpperCase()}</h4>
		<a
			className="nav-link"
			href="https://www.linkedin.com/in/nathalie-balotte/"
		>
			<img alt="linkedin" src={linkedin} className="pl-2" />
		</a>
	</div>
);
export default Contact;