import React from "react";

const CenterInterest = ({
	titleInterest,
	pictoTravel,
	pictoSwimming,
	pictoBeach,
	pictoReading
}) => (
	<div className="myInterest container-fluid">
		<div className="row">
			<div className="p-0">
				<h4>{titleInterest}</h4>
				<div className="d-flex flex-row mt-3">
					<a
						className="nav-link px-0 pr-1"
						href="http://www.tentationsaustrales.com/"
					>
						<img alt="voyage" src={pictoTravel} className="p-0" />
					</a>
					<a
						className="nav-link pr-0"
						href="https://www.oceania-club.fr/"
					>
						<img alt="sport" src={pictoSwimming} className="pl-0" />
					</a>
					<a
						className="nav-link pr-2"
						href="https://www.voyageavecnous.fr/image-plage-paradisiaque/"
					>
						<img alt="plage" src={pictoBeach} className="p-0" />
					</a>
					<a
						className="nav-link pl-1"
						href="https://fr.ebook-gratuit.co/"
					>
						<img
							alt="lecture"
							src={pictoReading}
							className="p-0"
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
);
export default CenterInterest;
