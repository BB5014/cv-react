import React, { Component } from "react";
import "./App.css";
import Candidate from "./components/Candidate";
import ExperiencesList from "./components/ExperiencesList";
import experiences from "./datas/experienceDatas";



class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="App d-flex flex-row ">
					<div className="container-fluid col-lg-3 col-sm-6 col-xs-12">
						<Candidate />
					</div>
					<div className="container-fluid col-lg-9 col-sm-6 col-xs-12">
						<ExperiencesList
							experiences={experiences}
							principalTitle="Expérience Professionnelle"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
