import React from 'react'
import './button.css'

const Button = ({
  className,
  title,
  bgColor = '#fff',
  icon,
  style,
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      className={`button ${className ? className : ''}`}
      style={{ backgroundColor: bgColor && bgColor, ...style }}
    >
      {icon && <img src={icon} style={{marginRight: title && title.length && "10px"}} alt="icon"/>}
      {title && title}
    </button>
  )
}

export default Button
