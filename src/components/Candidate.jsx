import React from "react";
import Identity from "./myPresentation/Identity";
import Stacks from "./myPresentation/StackSkills";
import Soft from "./myPresentation/SoftSkills";
import Education from "./myPresentation/Education";
import CenterInterest from "./myPresentation/CenterInterest";
import Contact from "./myPresentation/Contact";
import person from "../datas";

const Candidate = () => (
	<div className="candidate d-flex flex-column flex-fill m-3 p-3">
		<Identity
			firstName={person.firstName}
			name={person.name}
			job={person.job}
			photo={person.photo}
			presentation={person.presentation}
		/>
		<Stacks
			titleStack={person.titleStack}
			pictoGitHub={person.pictoGitHub}
			languages={person.languages}
			librairies={person.librairies}
			backEnd={person.backEnd}
			tools={person.tools}
		/>
		<Soft
			titleSoft={person.titleSoft}
			soft1={person.soft1}
			soft2={person.soft2}
			soft3={person.soft3}
			soft4={person.soft4}
			soft5={person.soft5}
		/>
		<Education
			titleQualification={person.qualification}
			degree1={person.degree1}
			degree2={person.degree2}
			degree3={person.degree3}
		/>
		<CenterInterest
			titleInterest={person.titleInterest}
			pictoTravel={person.pictoTravel}
			pictoSwimming={person.pictoSwimming}
			pictoBeach={person.pictoBeach}
			pictoReading={person.pictoReading}
		/>
		<Contact title={person.title} linkedin={person.linkedin} />
	</div>
);

export default Candidate;