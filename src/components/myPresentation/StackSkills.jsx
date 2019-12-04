import React from 'react';

const Stacks = ({ stack, languages, librairies, backEnd, tools}) => (
	<div className="w-25 d-flex flex-column m-3">
		<h4>{stack.toUpperCase()}</h4>
		<ul>
			<li>{languages}</li>
			<li>{librairies}</li>
			<li>{backEnd}</li>
			<li>
				{tools}
				<a
					className="nav-link"
					href="https://github.com/BB5014?tab=repositories"
				>
					<img
						alt="github"
						src="../assets/github.png"
						className="pl-2"
					/>
				</a>
			</li>
		</ul>
	</div>
);
export default Stacks;