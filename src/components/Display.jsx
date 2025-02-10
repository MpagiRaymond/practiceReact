import React from 'react'

const Display = ({value}) => {
  return (
        <input type="text" style={{color: 'blue', width: '100%', height: '2rem', textAlign: 'right', padding: '0.5rem'}} value={value} readOnly/>
  )
}
export default Display;
