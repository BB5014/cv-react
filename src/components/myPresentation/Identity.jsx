import React from "react";

const Identity = ({ firstName, name, job, photo, presentation }) => {
	return (
		<div className="w-25 d-flex flex-column m-3 p-3">
			<h1 className="d-flex justify-content-center">
				{firstName} {name.toUpperCase()}
			</h1>
			<h3 className="d-flex justify-content-center">{job}</h3>

			<img
				className="w-25 m-auto p-2 d-flex justify-content-center"
				alt="myPhoto"
				src={photo}
			/>

			<p>
			{presentation}
			</p>

			<hr className="w-100 " />
		</div>
	);
}

export default Identity;
