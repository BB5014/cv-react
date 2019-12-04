import React from "react";

const Soft = ({ soft, soft1, soft2, soft3, soft4, soft5 }) => (
	<div className="w-25 d-flex flex-column m-3">
		<h4>{soft.toUpperCase()}</h4>
		<ul>
			<li>{soft1}</li>
			<li>{soft2}</li>
			<li>{soft3}</li>
			<li>{soft4}</li>
			<li>{soft5}</li>
		</ul>
	</div>
);
export default Soft;
