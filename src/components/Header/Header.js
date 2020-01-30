import React, { Component } from 'react';
import sgithub from '../../images/SVG/github.svg';
import sattac from '../../images/SVG/cv.png';
import './header.scss';
import '../common-styles.scss';
import { withPrefix } from 'gatsby';

const backgroundColor =
	localStorage.getItem('retro') === 'true'
		? '#008080'
		: 'linear-gradient(-45deg, var(--color-graphql), var(--color-second), var(--color-react), var(--color-node))';

export default class Header extends Component {
	state = {
		retro: false,
		backgroundColor: backgroundColor
	};

	componentDidMount() {
		if (localStorage.getItem('retro') === null ) {
			localStorage.setItem('retro', false);
		}
		const bodyElt = document.querySelector('body');
		bodyElt.style.background = backgroundColor;
		bodyElt.style.backgroundSize = '400% 400%';
	}

	componentDidUpdate(prevProps) {
		const { backgroundColor } = this.state;

		if (prevProps.backgroundColor !== backgroundColor) {
			const bodyElt = document.querySelector('body');
			bodyElt.style.background = backgroundColor;
			bodyElt.style.backgroundSize = '400% 400%';
		}
	}

	toggleRetro() {
		const { retro } = this.state;
		this.setState({ retro: !retro });
		localStorage.setItem('retro', retro);
        this.setState({
			backgroundColor: retro
				? '#008080'
				: 'linear-gradient(-45deg, var(--color-graphql), var(--color-second), var(--color-react), var(--color-node))'
		});
    }

	renderRetro() {
		return (
			<>
				<header className="bar">
					<h1>Hector Faria - Portafolio - Software Developer</h1>
					<div className="buttons">
						<a className="minimize" />
						<a className="maximize" />
						<a className="close" />
					</div>
				</header>
				<nav class="menu">
					<ul>
						<li>
							<button onClick={() => this.toggleRetro()}>Normal Mode</button>
						</li>
						<li>
							<a href="https://github.com/yardiewizardie" target="_blank" rel="noopener noreferrer">
								Github
							</a>
						</li>
						<li>
							<a rel="noopener noreferrer" href={withPrefix('/cv.pdf')} target="_blank">
								CV
							</a>
						</li>
					</ul>
				</nav>
			</>
		);
	}

	render() {
		if (localStorage.getItem('retro') === 'true') {
			return this.renderRetro();
		}

		return (
			<header className="header">
				<button onClick={() => this.toggleRetro()}>Retro Mode</button>
				<h1 className="header__main-title rainbow">Hector Faria</h1>
				<h6 className="header__sub-title">Software Developer</h6>
				<nav className="user-nav">
					<a href="https://github.com/yardiewizardie">
						<img src={sgithub} className="user-nav__git" alt="Github" />
						<div className="user-nav__linktext">GitHub</div>
					</a>
					<a rel="noopener noreferrer" href={withPrefix('/cv.pdf')} target="_blank">
						<img src={sattac} className="user-nav__attac" alt="CV" />
						<div className="user-nav__linktext">CV</div>
					</a>
				</nav>
			</header>
		);
	}
}
