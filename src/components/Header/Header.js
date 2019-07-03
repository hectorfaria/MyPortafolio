import React from 'react'
import sgithub from '../../images/SVG/github.svg'
import sattac from '../../images/SVG/cv.png'
import './header.scss'
import '../common-styles.scss'

export default () => {
    return (
        <header className="header">
            <h1 className="header__main-title rainbow">Hector Faria</h1>
            <h6 className="header__sub-title">Software Developer</h6>
            <nav className="user-nav">
                <a href="https://github.com/yardiewizardie">
                    <img src={sgithub} className="user-nav__git" alt="Github" />
                    <div className="user-nav__linktext">GitHub</div>
                </a>
                <a href="mailto:hector_faria@hotmail.com">
                    <img src={sattac} className="user-nav__attac" alt="Mail Me!" />
                    <div className="user-nav__linktext">CV</div>
                </a>
            </nav>
        </header>
    )
}
