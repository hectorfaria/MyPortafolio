import React from 'react';
import Layout from '../components/layout';
import Typed from 'react-typed';
import { graphql, StaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';
import nodeicon from '../images/SVG/node.svg';
import gatsbyicon from '../images/SVG/gatsby.svg';
import graphqlicon from '../images/SVG/graphql.svg';
import reacticon from '../images/SVG/react.svg';
import mongoicon from '../images/SVG/mongodb.svg';
import sassicon from '../images/SVG/sass.svg';
import tsicon from '../images/SVG/typescript.svg';
import reduxicon from '../images/SVG/redux.svg';

const IndexPage = () => (
	<StaticQuery
		query={graphql`
			query {
				imageOne: file(relativePath: { eq: "1.png" }) {
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid
						}
					}
				}
				imageTwo: file(relativePath: { eq: "2.png" }) {
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid
						}
					}
				}
				imageThree: file(relativePath: { eq: "3.png" }) {
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid
						}
					}
				}
				imageFour: file(relativePath: { eq: "4.png" }) {
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		`}
		render={(data) => (
			<Layout>
				<Helmet>
				<html lang="en" />
				<meta name="theme-color" content="#ffffff" />
	<meta
					property="og:description"
					content="Hi!, My name is Hector Faria, I'm a self-taught developer, this is my portafolio that has a collection of projects I have done, my experience and stack."
				/>
				<meta property='og:locale' content='en' />
				<meta property='og:url' content="http://hectorfaria.us/" />
				<meta property="og:site_name" content="Hector Faria" />
	<meta property="og:image" content="https://i.imgur.com/eJimocb.png" />
				</Helmet>
				<main className="review">
					<div className="code-container">
						<span>
							Hi!, My name is <b>Hector Faria, </b>
							<Typed
								strings={[
									'and I am a Front-End Developer',
									'I am in love with JavaScript',
									'I like learning new tecnologies',
									'I would like to help you',
									'I have a fascination for CSS',
									'I work with people around the globe'
								]}
								typeSpeed={50}
								backSpeed={40}
								loop
							/>
						</span>
					</div>
					<div className="code-container__contact">
						Interested in working with me?{' '}
						<a href="mailto:hector_faria@hotmail.com" className="contact rainbow">
							Contact me
						</a>
					</div>
					<div className="detail">
						<div className="info-projects">
							<div className="info-projects__title">Projects</div>
							<div className="info-projects__project">
								<h2 className="info-projects__subtitle">Kamina</h2>
								<span className="name">
									Webpage travel agency about Colombian nature and Travel packages (Only the
									inplementation of React.js and Redux).
								</span>
								<a
									className="info-projects__blur"
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.kamina.co/"
								>
									<Img className="info-projects__img" fluid={data.imageFour.childImageSharp.fluid} />
								</a>
								<div className="info-projects__list">
									<ul className="name">React</ul>
									<ul className="name">Redux</ul>
									<ul className="name">Redux Form</ul>
								</div>
							</div>
							<div className="info-projects__project">
								<h2 className="info-projects__subtitle">Norge Nature</h2>
								<span className="name">
									Webpage travel agency about Norwegian destinations and interesting places.
								</span>
								<a
									className="info-projects__blur"
									target="_blank"
									rel="noopener noreferrer"
									href="http://nature-norge.surge.sh/"
								>
									<Img className="info-projects__img" fluid={data.imageOne.childImageSharp.fluid} />
								</a>
								<div className="info-projects__list">
									<ul className="name">React</ul>
									<ul className="name">BEM</ul>
									<ul className="name">Redux</ul>
									<ul className="name">Sass</ul>
								</div>
							</div>
							<div className="info-projects__project">
								<h2 className="info-projects__subtitle">Sudookie Movies</h2>
								<span className="name">Personal project of watching movies together with friends.</span>
								<a
									className="info-projects__blur"
									target="_blank"
									rel="noopener noreferrer"
									href="https://github.com/yardiewizardie/DookieServerSide"
								>
									<Img className="info-projects__img" fluid={data.imageTwo.childImageSharp.fluid} />
								</a>
								<div className="info-projects__list">
									<ul className="name">React</ul>
									<ul className="name">MongoDB</ul>
									<ul className="name">Node.JS</ul>
									<ul className="name">Express</ul>
									<ul className="name">React</ul>
									<ul className="name">Redux</ul>
									<ul className="name">Sass</ul>
								</div>
							</div>
							<div className="info-projects__project">
								<h2 className="info-projects__subtitle">Fictive</h2>
								<span className="name">Social Media app to connect Tumblr users.</span>
								<a
									className="info-projects__blur"
									target="_blank"
									rel="noopener noreferrer"
									href="http://fictive-frontend.surge.sh/"
								>
									<Img className="info-projects__img" fluid={data.imageThree.childImageSharp.fluid} />
								</a>
								<div className="info-projects__list">
									<ul className="name">React</ul>
									<ul className="name">BEM</ul>
									<ul className="name">Redux</ul>
									<ul className="name">Sass</ul>
									<ul className="name">Material UI</ul>
								</div>
							</div>
						</div>
						<div className="info-container">
							<div className="info-container__title">Experience</div>

							<div style={{ marginTop: '5vh' }}>
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										margin: '12px',
										color: 'white',
										fontSize: '12px'
									}}
								>
									<h3>Full time Freelancer</h3>
									<span style={{ fontSize: '12px' }}>Present</span>
								</div>
								<ul style={{ margin: '30px', fontSize: '12px' }}>
									<li>Attending clients for their needs</li>
									<li>Implementing UX/UI into a maintenable, reusable code</li>
									<li>Converting HTML/CSS/JS pages into Robust React.js applications</li>
									<li>Making Applications from scratch</li>
									<li>
										Connecting Applications to different End-points in a clean way, reusable way
									</li>
									<li>Testing Applications with Jest and Enzyme</li>
								</ul>
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										margin: '12px',
										color: 'white'
									}}
								>
									<h3>Front End Dev - Intelli-next C.A</h3>
									<span style={{ fontSize: '10px' }}>Feb 2018 - Dec 2018</span>
								</div>
								<ul style={{ margin: '30px', fontSize: '12px' }}>
									<li>Building the Front End of a PWA (Progressive Web Application) </li>
									<li>Usage of React.js and known libraries such as React Router, React Helmet</li>
									<li>Usage of Webpack 4 for bundling files and code splitting</li>
									<li>Usage of Redux for state container</li>
									<li>Unit and Integration Testing with Jest and Enzyme</li>
									<li>Using CSS Preprocessors like Post-CSS and Sass</li>
								</ul>
							</div>
							<div className="info-container__title">My Stack</div>
							<div className="info-container__stacks">
								<div className="info-container__stacks--item">
									<img src={nodeicon} className="side-nav__icon" alt="" />
									<h3 style={{ color: 'white' }}>Node.js</h3>
								</div>
								<div className="info-container__stacks--item">
									<img src={gatsbyicon} className="side-nav__icon" alt="" />
									<h3 style={{ color: 'white' }}>Gatsby</h3>
								</div>
								<div className="info-container__stacks--item">
									<img src={graphqlicon} className="side-nav__icon" alt="" />
									<h3 style={{ color: 'white' }}>GrahpQL</h3>
								</div>
								<div className="info-container__stacks--item">
									<img src={mongoicon} className="side-nav__icon" alt="" />
									<h3 style={{ color: 'white' }}>MongoDB</h3>
								</div>
							</div>
							<div className="info-container__stacks">
								<div className="info-container__stacks--item">
									<img src={reacticon} className="side-nav__icon" alt="" />
									<h3 style={{ color: 'white' }}>React.js</h3>
								</div>
								<div className="info-container__stacks--item">
									<img src={reduxicon} className="side-nav__icon" alt="" />
									<h3 style={{ color: 'white' }}>Redux</h3>
								</div>
								<div className="info-container__stacks--item">
									<img src={sassicon} className="side-nav__icon" alt="" />
									<h3 style={{ color: 'white' }}>Sass</h3>
								</div>
								<div className="info-container__stacks--item">
									<img src={tsicon} className="side-nav__icon" alt="" />
									<h3 style={{ color: 'white' }}>TypeScript</h3>
								</div>
							</div>
						</div>
					</div>
				</main>
			</Layout>
		)}
	/>
);

export default IndexPage;
