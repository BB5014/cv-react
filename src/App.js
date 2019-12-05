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
		<div className="App w-25 d-flex flex-column flex-fill m-3 p-3">
			<Identity
				firstName="Nathalie"
				name="Balotte"
				job="Développeur Web"
				photo="../../assets/myphoto.png"
				presentation="	En reconversion professionnelle, j'ai décidé de suivre la
				formation intensive de la Wild Code School à Bidart, pour
				devenir Développeur(se) Web & mobile. Après 5 mois
				d'apprentissage intensif, je cherche un poste pour vous apportez mes
				compétences."
			/>
			<Stacks
				stack="Stack Skills"
				languages="HTML 5, CSS 3, JS, ReactJs"
				librairies="Bootstrap, Reactstrap"
				backEnd="NodeJs, Express, MySql, SQL, Mocha"
				tools="Linux, Ubuntu, Git, VsCode, GitHub, Trello"
			/>
			<Soft
				soft="Soft Skills"
				soft1="Enthousiaste, optimiste"
				soft2="Capacité d'adaptation"
				soft3="Persévérante, tenace"
				soft4="Rigoureuse"
				soft5="Patiente, à l'écoute"
			/>
			<Education
				qualification="Education"
				degree1="Titre Professionnel Web & Mobile RNCP Niv III en préparation"
				degree2="DEUG Psychologie Générale"
				degree3="Baccalauréat Techniques Administratives"
			/>
			<CenterInterest
				interest="Center Interest"
				picto1="../../assets/voyage.png"
				picto2="../../assets/natation.png"
				picto3="../../assets/plage.png"
				picto4="../../assets/lecture.png"
			/>
			<Contact title="Contact" linkedin="../../assets/linkedin.png" />
		</div>
  );
}

export default App;
