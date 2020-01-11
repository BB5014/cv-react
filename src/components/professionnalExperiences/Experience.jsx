import React from "react";

const Experience = ({
	positionHeld,
	duration,
	business,
	businessType,
	city,
	presentation,
	titleProject,
	subTitleFront,
	subTitleBack,
	achievements,
	achievementsB1,
	achievementsB2,
	achievementsB3,
	achievements1,
	achievements2,
	achievements3,
	achievements4,
	achievements5,
	achievements6,
	positionHeld1
}) => {
	return (
		<div>
			<h3 className="text-capitalize nowrap">
				<strong>{positionHeld} </strong>
				<small className="text-capitalize font-italic">
					{duration}
				</small>
			</h3>
			<h4 className="text-secondary">
				{business} {businessType}
				{city}
			</h4>
			<p className="presentation">{presentation}</p>
			<h5>{titleProject}</h5>
			<h6>{subTitleFront}</h6>

			<p className="achievements">{achievements}</p>
			<p className="achievements">{achievements1}</p>
			<p className="achievements">{achievements2}</p>
			<p className="achievements">{achievements3}</p>

			<h6>{subTitleBack}</h6>
			<p>{achievementsB1}</p>
			<p>{achievementsB2}</p>
			<p>{achievementsB3}</p>

			<p className="achievements">{achievements4}</p>
			<p className="achievements">{achievements5}</p>
			<h6 className="text-capitalize nowrap">
				<strong>{positionHeld1} </strong>
			</h6>
			<p className="achievements">{achievements6}</p>
			<button> En savoir plus</button>
			{/* Hoist */}
			{/* 
			<h3 className="text-capitalize nowrap">
				<strong>Manager Equipes de 8 à 12 collaborateurs(rices)</strong>
				<small className="text-capitalize font-italic">
					- Août 2005 - Juin 2018
				</small>
			</h3>
			<h4 className="text-secondary">
				Hoist Finance - Recouvrement de créances - Bayonne (64)
			</h4>
			<p>
				<strong>
					Participation à la création d'un nouveau service clients :
				</strong>
				élaboration de la nouvelle stratégie d'appels, réalisation des
				process et leur mises en production
			</p>
			<p>
				<strong>
					Organisation, pilotage et accompagnement des équipes
				</strong>
				dans un esprit de performance individuelle et COLLECTIVE, en
				privilégiant la qualité du discours, le respect des process
				internes
			</p>
			<p>
				<strong>Animation et mobilisation :</strong>
				création de challenges, briefing/debriefing
			</p>
			<p>
				<strong>Formation des collaborateurs/trices :</strong>
				process, déontologie, logiciels internes CERP, QUALCO
			</p>
			<p>
				<strong>Recrutement :</strong>
				définir les besoins, sélection des candidatures, entretiens
			</p>
			<p>
				<strong>Office Manager en relai avec le Siège Social</strong>
				élaboration de la nouvelle stratégie d'appels, réalisation des
				process et leur mises en production
			</p>
			<p>
				<strong>
					Conseillère clientèle sur plateforme téléphonique (2004 -
					2005) :
				</strong>
				Appels entrants/sortants pour établir des plans d'apurement -
				Objectif individuel
			</p> */}
			{/* Helianthal */}
			{/* <h3 className="text-capitalize nowrap">
				<strong>Hydrothérapeute </strong>
				<small className="text-capitalize font-italic">
					- 1996 - 2003
				</small>
			</h3>
			<h4 className="text-secondary">
				Hélianthal - Serge Blanco - Thalassothérapie - Hendaye /
				Saint-Jean-de-Luz (64)
			</h4>
			<p>
				Prise en charge du patient et réalisations des soins selon
				prescriptions médicales
			</p> */}
		</div>
	);
};

export default Experience;
