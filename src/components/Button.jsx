import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text, onClick, customStyle}) => {

  const defaultStyle = {
    backgroundColor: 'blue',
    color: 'green', 
    height: '30px',
    width: '100%',
    textAlign: 'center',
    lineHeight: '9px'
  }
const style = {...defaultStyle, ...customStyle}

  return (
    <button style={style} onClick={() => onClick(text)}>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  customStyle:PropTypes.object,
}
Button.defaultProps = {
  customStyle: {}
}
export default Button;