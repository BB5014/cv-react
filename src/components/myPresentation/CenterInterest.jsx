import React from "react";

const CenterInterest = ({interest, picto1, picto2, picto3, picto4}) => (
	<div className="w-25 d-flex flex-column m-3">
		<h4>{interest.toUpperCase()}</h4>
		<div className="d-flex flex-row mt-3">
			<a className="nav-link" href="http://www.tentationsaustrales.com/">
				<img alt="voyage" src={picto1} className="pl-2" />
			</a>
			<a className="nav-link" href="https://www.oceania-club.fr/">
				<img
					alt="sport"
					src={picto2}
					className="pl-2"
				/>
			</a>
			<a
				className="nav-link"
				href="https://www.voyageavecnous.fr/image-plage-paradisiaque/"
			>
				<img alt="plage" src={picto3} className="pl-2" />
			</a>
			<a className="nav-link" href="https://fr.ebook-gratuit.co/">
				<img
					alt="lecture"
					src={picto4}
					className="pl-2"
				/>
			</a>
		</div>
	</div>
);
export default CenterInterest;
