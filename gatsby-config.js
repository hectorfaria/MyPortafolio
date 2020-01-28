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
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#faf9f9',
				theme_color: '#faf9f9',
				display: 'minimal-ui',
				icon: 'src/images/favicon.png' // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-sass`,
		'gatsby-plugin-offline',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-robots-txt',
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-143261968-1',
				head: true
			}
		}
	]
};
