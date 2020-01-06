import React, { Component } from "react";
import "./App.css";
import Candidate from "./components/Candidate";
import ProfessionalElement from "./components/professionnalExperiences/ProfessionnalElement";


class App extends Component {
	render() {
		return (
			<div className="container-fluid">

				<div className="App d-flex flex-row ">
					<div className="container-fluid col-lg-3 col-sm-6 col-xs-12">

				<Candidate />
					</div>
					<div className="container-fluid col-lg-9 col-sm-6 col-xs-12">

				<ProfessionalElement />
					</div>
			</div>
			</div>
		);
	}
}

export default App;
