import React from 'react'
import './button.css'

const Button = ({ children, variant, size, ...props}) => (
  <button className={
    "btn" 
    + (variant === 'primary' ? ' btn-primary' : '')
    + (variant === 'paginate' ? ' btn-paginate' : '')
    + (size === 'small' ? ' btn-small' : '')
    + (size === 'large' ? ' btn-large' : '')

    }
    {...props}
  >
    {children}
  </button> 
)

export default Button