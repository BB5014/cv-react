import React from "react";

const ProfessionalElement = () => (
	<div className="proelement d-block flex-row mt-3">
		<h1 className="titlePro text-secondary text-uppercase text-center mb-3">
			Expérience professionnelle
		</h1>
		<h3 className="text-capitalize nowrap">
			<strong>Stagiaire Développeur Web </strong>
			<small className="text-capitalize font-italic">
				- septembre 2019
			</small>
		</h3>
		<h4 className="text-secondary">
			ProHealthTribe - Cours d'Ostéopathie en ligne - Bidart (64)
		</h4>
		<p>
			Start Up nouvellement créée, qui a l'objectif de proposer des des
			cours en ligne d'Ostéopathie pour les professionnels de la santé.
		</p>
		<p>
			Mon rôle : créer une landing page en Front End avec HTML 5, CSS 3 et
			Bootstrap
		</p>
		<h3 className="text-capitalize nowrap">
			<strong>Formation Développeur Web & Mobile </strong>
			<small className="text-capitalize font-italic">
				- de mi- Décembre 2018 à fin Juillet 2019
			</small>
		</h3>

		{/* Formation */}
		<h4 className="text-secondary">Wild Code School - Bidart (64)</h4>
		<h5>Parcours</h5>
		<p>
			J'ai intégré cette école après une pré-sélection qui demandait de
			créer un site web. Totalement novice, en toute autonomie, j'ai
			appris par le biais de cours en ligne HTML5, CSS3 pour réaliser ce
			site sur le thème du cirque, en anglais, suivant des directives
			demandées. Cette étape validée, j'ai été sélectionnée pour passer un
			entretien technique et de motivation qui m'ont conduit à intégrer
			l'école.
		</p>
		<div className="description-list">
			Déroulé de la formation
			<ul className="list-formation">
				<li className="list-items">
					2 mois d'apprentissage en ligne pour appréhender les
					fondamentaux de la programmation et des algorythmes.
				</li>
				<li>4.5 mois en présentiel pour apprendre JS, ReactJS</li>
			</ul>
		</div>
		<button>En savoir plus</button>

		{/* Hoist */}

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
			privilégiant la qualité du discours, le respect des process internes
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
				Conseillère clientèle sur plateforme téléphonique (2004 - 2005)
				:
			</strong>
			Appels entrants/sortants pour établir des plans d'apurement -
			Objectif individuel
		</p>

		{/* Helianthal */}

		<h3 className="text-capitalize nowrap">
			<strong>Hydrothérapeute </strong>
			<small className="text-capitalize font-italic">
				- 1996 - 2003
			</small>
		</h3>
		<h4 className="text-secondary">
			Thalassothérapie Hélianthal - Serge Blanco - Hendaye / Saint-Jean-de-Luz (64)
		</h4>
		<p>
			Prise en charge du patient et réalisations des soins selon prescriptions médicales
		</p>
	</div>
);

export default ProfessionalElement;
