import React from 'react'
import './card.css'

const CardContent = ({ variant, children }) =>
    <div className={
        "card-content"
        + (variant === 'card-content-overlay' ? ' card-content-overlay' : '')
    }

    >
    
    {children}

    </div>

export default CardContent
