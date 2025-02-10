import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button style={{backgroundColor: 'blue', color: 'green', height: '30px', width: '100%'}} onClick={() => onClick(text)}>{text}</button>
  )
}
export default Button;