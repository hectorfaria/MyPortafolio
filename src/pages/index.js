import React, { Component } from 'react';
import Layout from '../components/Layout';
import { graphql, StaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import nodeicon from '../images/SVG/node.svg';
import gatsbyicon from '../images/SVG/gatsby.svg';
import graphqlicon from '../images/SVG/graphql.svg';
import reacticon from '../images/SVG/react.svg';
import sassicon from '../images/SVG/sass.svg';
import tsicon from '../images/SVG/typescript.svg';
import reduxicon from '../images/SVG/redux.svg';
import deleteicon from '../images/SVG/delete.png';
import stackicon from '../images/SVG/stack.svg';
import dockericon from '../images/SVG/docker.svg';
import ethericon from '../images/SVG/ethereum.svg';
import goicon from '../images/SVG/go.svg';
import jesticon from '../images/SVG/jest.svg';
import nexticon from '../images/SVG/next-dot-js.svg';
import travisicon from '../images/SVG/travisci.svg';
import ProjectContainer from '../components/ProjectContainer';
import StackItem from '../components/StackItem';
import './index.scss';

class IndexPage extends Component {
	state = {
		fullSizeProjects: false
	};

	render() {
		const { fullSizeProjects } = this.state;
		return (
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
							<meta property="og:locale" content="en" />
							<meta property="og:url" content="http://hectorfaria.us/" />
							<meta property="og:site_name" content="Hector Faria" />
							<meta property="og:image" content="https://i.imgur.com/eJimocb.png" />
						</Helmet>
						<main className={localStorage.getItem('retro') ? 'review review-retro' : 'review'}>
							<div className="code-container">
								<StackItem alt="react" icon={reacticon} name="React.js" />
								<StackItem alt="redux" icon={reduxicon} name="Redux" />
								<StackItem alt="sass" icon={sassicon} name="Sass" />
								<StackItem alt="typescript" icon={tsicon} name="TypeScript" />
								<StackItem alt="node" icon={nodeicon} name="Node.js" />
								<StackItem alt="gatsby" icon={gatsbyicon} name="Gatsby" />
								<StackItem alt="graphql" icon={graphqlicon} name="GraphQL" />
								<StackItem alt="docker" icon={dockericon} name="Docker" />
								<StackItem alt="ether" icon={ethericon} name="Solidity" />
								<StackItem alt="go" icon={goicon} name="Golang" />
								<StackItem alt="jest" icon={jesticon} name="Jest" />
								<StackItem alt="next" icon={nexticon} name="Next.js" />
								<StackItem alt="travis" icon={travisicon} name="TravisCI" />
							</div>
							<div className="code-container__contact">
								Interested in working with me?{' '}
								<a
									className="contact rainbow"
									href="&#77;&#97;&#105;&#108;&#84;&#79;&#58;&#104;&#101;&#99;&#116;&#111;&#114;&#95;&#102;&#97;&#114;&#105;&#97;&#64;&#104;&#111;&#116;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
								>
									Contact me
								</a>
							</div>
							<div className="detail">
								<div
									className={fullSizeProjects ? 'info-projects full-info-projects' : 'info-projects'}
								>
									<div className="info-projects__title">Projects</div>
									<ProjectContainer
										name="Kamina"
										description="Webpage travel agency about Colombian nature and Travel packages (Only the
                                    inplementation of React.js and Redux)."
										link="https://www.kamina.co"
										stacks={[ 'React', 'Redux', 'Redux Form' ]}
									/>
									<ProjectContainer
										name="Norge Nature"
										description="Webpage travel agency about Norwegian destinations and interesting places."
										link="http://nature-norge.surge.sh/"
										stacks={[ 'React', 'BEM', 'Redux', 'Sass' ]}
									/>
									<ProjectContainer
										name="Sudookie Movies"
										description="Personal project of watching movies together with friends."
										link="https://github.com/yardiewizardie/DookieServerSide"
										
										stacks={[ 'React', 'Mongo', 'Node.js', 'Express', 'Redux', 'Sass' ]}
									/>
									<ProjectContainer
										name="Fictive"
										description="Social Media app to connect Tumblr users."
										link="http://fictive-frontend.surge.sh/"
										stacks={[ 'React', 'BEM', 'Redux', 'Sass', 'Material UI' ]}
									/>
								</div>
								<button
									className={fullSizeProjects ? 'expand-button expand-hide' : 'expand-button'}
									onClick={() => this.setState({ fullSizeProjects: !fullSizeProjects })}
								>
									{fullSizeProjects ? (
										<img style={{ height: '20px' }} src={stackicon} alt="S" />
									) : (
										<img style={{ height: '20px' }} src={deleteicon} alt="X" />
									)}
								</button>
								<div className={fullSizeProjects ? 'hide' : 'info-container'}>
									<div className="info-container__title">Experience</div>
									<div className="info-container__box">
										<div className="info-container__subtitle">
											<h3>Full time Freelancer</h3>
											<span>Present</span>
										</div>
										<ul className="info-container__container">
											<li>Attending clients with their needs and working together with them.</li>
											<li>
												Implementing UX/UI sketchs into a maintenable, reusable code and fast
												Webpage
											</li>
											<li>Converting HTML/CSS/JS pages into Robust React.js applications</li>
											<li>Making Applications from scratch</li>
											<li>
												Connecting Applications to different End-points in a clean way, reusable
												way
											</li>
											<li>Testing Applications with Jest and Enzyme</li>
										</ul>
										<div className="info-container__subtitle">
											<h3>Front End Dev - Intelli-next C.A</h3>
											<span>Feb 2018 - Dec 2018</span>
										</div>
										<ul className="info-container__container">
											<li>Building the Front End of a PWA (Progressive Web Application) </li>
											<li>
												Usage of React.js and known libraries such as React Router, React Helmet
											</li>
											<li>Usage of Webpack 4 for bundling files and code splitting</li>
											<li>Usage of Redux for state container</li>
											<li>Unit and Integration Testing with Jest and Enzyme</li>
											<li>Using CSS Preprocessors like Post-CSS and Sass</li>
										</ul>
									</div>
								</div>
							</div>
						</main>
					</Layout>
				)}
			/>
		);
	}
}

export default IndexPage;
