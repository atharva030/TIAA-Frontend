import React from 'react'
import './loader.css'
import loaderGif from './774.gif'
function Spinner() {
  return (
    <div className="loader-style">
    <img src={loaderGif} alt='Loader'/>
  </div>
  )
}

export default Spinner