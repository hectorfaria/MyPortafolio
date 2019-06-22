import React from 'react';
import info from '../images/SVG/info.svg';
import stacks from '../images/SVG/elasticstack.svg';
import { Link } from 'gatsby';

// This has to be seriously refactor to a simple code. WIP

export default () => {
	return (
		<nav className="sidebar">
			<ul className="side-nav">
				<Link to="/" className="side-nav__link" activeClassName="selected">
					<li className="side-nav__item side-nav__item--info">
						<img src={info} className="side-nav__icon" alt="" />

						<span>Home</span>
					</li>
				</Link>
				<Link to="/react" className="side-nav__link" activeClassName="selected">
					<li className="side-nav__item">
						<img src={stacks} className="side-nav__icon" alt="" />
						<span>Stacks</span>
					</li>
				</Link>
			</ul>
		</nav>
	);
};
