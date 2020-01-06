import React from 'react';

const Stacks = ({ titleStack, pictoGitHub, languages, librairies, backEnd, tools }) => (
	<div className="stackSkills d-flex flex-column">
		<h4 className="d-flex">
			{titleStack}
			<a
				className="nav-link ml-3 p-0"
				href="https://github.com/BB5014?tab=repositories"
			>
				<img alt="github" src={pictoGitHub}/>
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