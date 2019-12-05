import React from 'react';

const Stacks = ({ stack, languages, librairies, backEnd, tools }) => (
	<div className="stackSkills">
		<h4 className="d-flex">
			{stack}
			<a
				className="nav-link ml-3 p-0"
				href="https://github.com/BB5014?tab=repositories"
			>
				<img alt="github" src="../assets/github.png"/>
			</a>
		</h4>
		<ul>
			<li>{languages}</li>
			<li>{librairies}</li>
			<li>{backEnd}</li>
			<li>{tools}</li>
		</ul>
	</div>
);
export default Stacks;