import React from "react";

const Identity = ({ firstName, name, job, photo, presentation }) => {
	return (
		<div className="myIdentity">
			<h1 className="d-flex justify-content-center">{job}</h1>
			<h2 className="d-flex justify-content-center">
				{firstName} {name}
			</h2>

			<img
				className="w-25 m-auto p-2 d-flex justify-content-center"
				alt="myPhoto"
				src={photo}
			/>

			<p className="identity">{presentation}</p>

			<hr className="w-100 " />
		</div>
	);
}

export default Identity;
