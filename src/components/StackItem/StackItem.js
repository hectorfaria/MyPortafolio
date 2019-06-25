import React from 'react'
import './stackitem.scss'

export default ({ alt, icon, name }) => (
    <div className="stackitem">
        <img className="stackitem__icon" src={icon} alt={alt} />
        <h3 className="stackitem__name">{name}</h3>
    </div>
)
