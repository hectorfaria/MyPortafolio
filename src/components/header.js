import React from 'react';
import sgithub from '../images/SVG/github.svg';
import sattac from '../images/SVG/attachment.svg';

export default () => {
	return (
		<header className="header">
			<div className="title">
				<h1 className="main-title rainbow">Hector Faria</h1>
				<h6 className="sub-title">Front-End Developer</h6>
			</div>
			<nav className="user-nav">
				<a href="https://github.com/yardiewizardie">
					<img src={sgithub} className="user-nav__git" alt="Github" />
                    <div className="user-nav__linktext">GitHub</div>
				</a>
				<a href="mailto:hector_faria@hotmail.com">
					<img src={sattac} className="user-nav__attac" alt="Mail Me!" />
                    <div className="user-nav__linktext">Contact</div>
                </a>
			</nav>
		</header>
	);
};
