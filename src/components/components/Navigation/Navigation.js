import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
	return (
		<nav>
			<ul className="Navigation">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/posts">Blog</Link>
				</li>
				<li>
					<Link to="/create">Create a post </Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
