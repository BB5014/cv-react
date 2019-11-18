import React from "react";

const CenterInterest = () => (
	<div className="w-25 d-flex flex-column m-3">
		<h4>CENTER INTEREST</h4>
		<div className="d-flex flex-row mt-3">
			<a className="nav-link" href="http://www.tentationsaustrales.com/">
				<img alt="voyage" src="../assets/voyage.png" className="pl-2" />
			</a>
			<a className="nav-link" href="https://www.oceania-club.fr/">
				<img
					alt="sport"
					src="../assets/natation.png"
					className="pl-2"
				/>
			</a>
			<a
				className="nav-link"
				href="https://www.voyageavecnous.fr/image-plage-paradisiaque/"
			>
				<img alt="plage" src="../assets/plage.png" className="pl-2" />
			</a>
			<a className="nav-link" href="https://fr.ebook-gratuit.co/">
				<img
					alt="lecture"
					src="../assets/lecture.png"
					className="pl-2"
				/>
			</a>
		</div>
	</div>
);
export default CenterInterest;
