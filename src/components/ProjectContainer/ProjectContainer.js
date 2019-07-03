import React from 'react'
import Img from 'gatsby-image'
import './projectcontainer.scss'

export default ({name, description, link, img, stacks}) => (
    <div className="info-projects__project">
        <h2 className="info-projects__subtitle">{name}</h2>
        <span className="name">{description}</span>
        <a className="info-projects__blur" target="_blank" rel="noopener noreferrer" href={link}>
            <Img className="info-projects__img" fluid={img} /> 
        </a>
        <div className="info-projects__list">
            {stacks.map((name, index) =>  <ul key={index} className="stack">{name}</ul>)} 
        </div>
    </div>
)
