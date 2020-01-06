import React from "react";


const Identity = ({ firstName, name, job, photo, presentation }) => {
	return (
		<div className="myIdentity border border-warning">
			<h1 className="border border-danger d-flex justify-content-center">{job}</h1>
			<h2 className="d-flex justify-content-center">
				{firstName} {name}
			</h2>

			<img
				className="w-25 m-auto p-2 d-flex justify-content-center"
				alt="myPhoto"
				src={photo}
			/>

			<p className="identity text-white">{presentation}</p>

			<hr className="w-100 " />
		</div>
	);
}

export default Identity;
