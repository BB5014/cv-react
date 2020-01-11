import React from "react";
import Experience from "./professionnalExperiences/Experience";

const ExperiencesList = ({ experiences, principalTitle }) => {
	return (
		<div className="proelement d-block flex-row mt-3">
			<h1 className="titlePro text-secondary text-uppercase text-center mb-3">
				{principalTitle}
			</h1>
			{experiences.map((experience, i) => (
				<Experience
					key={i}
					positionHeld={experience.positionHeld}
					positionHeld1={experience.positionHeld1}
					duration={experience.duration}
					business={experience.business}
					businessType={experience.businessType}
					city={experience.city}
					presentation={experience.presentation}
					titleProject={experience.titleProject}
					subTitleFront={experience.subTitleFront}
					subTitleBack={experience.subTitleBack}
					achievements={experience.achievements}
					achievements1={experience.achievements1}
					achievements2={experience.achievements2}
					achievements3={experience.achievements3}
					achievements4={experience.achievements4}
					achievements5={experience.achievements5}
					achievements6={experience.achievements6}
					achievementsB1={experience.achievementsB1}
					achievementsB2={experience.achievementsB2}
					achievementsB3={experience.achievementsB3}
				/>
			))}
		</div>
	);
};

export default ExperiencesList;
