import React from 'react'
import './card.css'

const CardImg = ({name, url, size, children, ...props})=>(
    <img className={size} src={url} alt={name} {...props}/>

)

export default CardImg