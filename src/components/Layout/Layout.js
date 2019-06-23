import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../Header'
import './layout.scss'

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                />
                <div className="container">
                    <Header />
                    <div className="container__content">{children}</div>
                </div>
            </>
        )}
    />
)

export default Layout
