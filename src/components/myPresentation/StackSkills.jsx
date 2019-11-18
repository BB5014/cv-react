import React from 'react';

const Stacks = () => (
	<div className="w-25 d-flex flex-column m-3">
		<h4>STACK SKILLS</h4>
		<ul>
			<li>HTML 5, CSS 3, JS, ReactJs</li>
			<li>Bootstrap, Reactstrap</li>
			<li>NodeJs, Express, MySql, SQL, Mocha</li>
			<li>
				Linux, Ubuntu, Git, VsCode, GitHub
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
			<li>Trello</li>
		</ul>
	</div>
);
export default Stacks;