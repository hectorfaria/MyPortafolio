import React, { Component } from 'react';
import sgithub from '../../images/SVG/github.svg';
import sattac from '../../images/SVG/cv.png';
import './header.scss';
import '../common-styles.scss';
import { withPrefix } from 'gatsby';

export default class Header extends Component {
	state = {
		retro: localStorage.getItem('retro') || false
	};

	componentDidMount() {
		if (localStorage.getItem('retro') === null) {
			localStorage.setItem('retro', false);
		}
	}

	toggleRetro() {
		const { retro } = this.state;
		this.setState({ retro: !retro });
		localStorage.setItem('retro', retro);
	}

	render() {
		return (
			<header className="header">
				{/* <button onClick={() => this.toggleRetro()}>RETRO MODE</button> */}
				<h1 className="header__main-title rainbow">Hector Faria</h1>
				<h6 className="header__sub-title">Software Developer</h6>
				<nav className="user-nav">
					<a href="https://github.com/yardiewizardie">
						<img src={sgithub} className="user-nav__git" alt="Github" />
						<div className="user-nav__linktext">GitHub</div>
					</a>
					<a rel="noopener noreferrer" href={withPrefix('/cv.pdf')} target="_blank">
						<img src={sattac} className="user-nav__attac" alt="Mail Me!" />
						<div className="user-nav__linktext">CV</div>
					</a>
				</nav>
			</header>
		);
	}
}
