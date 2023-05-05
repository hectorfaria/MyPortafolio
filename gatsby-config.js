/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
		title: 'Hector Faria - Portafolio',
		titleTemplate: 'Hector Faria - Portafolio',
		description:
			"Hi!, My name is Hector Faria, I'm a self-taught developer, this is my portafolio that has a collection of projects I have done, my experience and stack.",
		url: 'https://hectorfaria.info',
		image: 'src/images/favicon.png',
		twitterUsername: '@hideoncookie',
		siteUrl: 'https://hectorfaria.com'
	},
  plugins: [
    `gatsby-plugin-sass`,
		'gatsby-plugin-offline',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-robots-txt',
    'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
  ],
}
