import React from "react";

const Identity = () => (
	<div className="w-25 d-flex flex-column m-3 p-3">
		<h1 className="d-flex justify-content-center">Nathalie BALOTTE</h1>
		<h3 className="d-flex justify-content-center">
			Développeuse Web Junior
		</h3>

	
			<img
				alt="myPhoto"
				src="../assets/myphoto.png"
				className="w-25 m-auto p-2 d-flex justify-content-center"
			/>
		
		<p>
			En reconvesion professionnelle, j'ai décidé de suivre la formation
			intensive de la Wild Code School de Bidart, pour devenir
			Développeuse Web & mobile. Après 5 mois intensifs d'apprentissage,
			je cherche un poste pour vous apportez mes compétences.
		</p>

		<hr className="w-100 " />
	</div>
);

export default Identity;