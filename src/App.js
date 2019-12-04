import React from 'react';
import './App.css';
import Identity from './components/myPresentation/Identity';
import Stacks from './components/myPresentation/StackSkills';
import Soft from './components/myPresentation/SoftSkills';
import Education from './components/myPresentation/Education';
import CenterInterest from './components/myPresentation/CenterInterest';
import Contact from './components/myPresentation/Contact';

function App() {
  return (
		<div className="App d-flex flex-column flex-fill border-blue">
			<Identity
				firstName="Nathalie"
				name="Balotte"
				job="Développeuse Web Junior"
				photo="../../assets/myphoto.png"
				presentation="	En reconvesion professionnelle, j'ai décidé de suivre la
				formation intensive de la Wild Code School de Bidart, pour
				devenir Développeuse Web & mobile. Après 5 mois intensifs
				d'apprentissage, je cherche un poste pour vous apportez mes
				compétences."
			/>
			<Stacks />
			<Soft />
			<Education />
			<CenterInterest />
			<Contact />
		</div>
  );
}

export default App;
