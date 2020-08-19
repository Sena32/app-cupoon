import React from 'react'
import './card.css'

const CardAction = ({variant, children }) => 

    <div className={
        "card--actions"
        + (variant === 'card--actions-overlay' ? ' card--actions-overlay' : '')
        }
    >
    
    { children }
    
    </div>

export default CardAction
