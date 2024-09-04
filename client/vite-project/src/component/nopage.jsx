import React from 'react'
import MyImage from '../assets/MyImage.png'

function Nopage() {
  return (
    <div>
      <h1>Sorry this is not found</h1>
      <img src={MyImage} alt="My Image" />
    </div>
  )
}
export default Nopage