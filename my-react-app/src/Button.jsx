import React from 'react'

const Button = () => {
  const handleClick = (e) => e.target.textContent = "ah la vie"
  return (
    <button onClick={(e) => handleClick(e)}> Click Me </button>
  )
}

export default Button