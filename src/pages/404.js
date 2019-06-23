import React from 'react'
import Layout from '../components/Layout'
import '../components/common-styles.scss'
import './404.scss'
import { Link } from 'gatsby'

export default () => (
    <Layout>
        <h6 className="nofound-title rainbow">
            <Link to="/">Country Roads... Take me Home </Link>
        </h6>   
    </Layout>
)