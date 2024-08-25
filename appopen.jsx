import React from 'react'
import "./App.css"
import Home1 from './page'

const Response = ({pop,pop2}) => {
  return (
    <div>
      <div id='div'>{pop2?<div id='pop'>{pop}</div>:"loading"}</div>
    </div>
  )
}

export default Response
