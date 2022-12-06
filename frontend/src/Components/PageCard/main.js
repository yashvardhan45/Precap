import React from 'react'
import Styles from './main.css'

function main (params) {
  return (
    <div style={Styles} className='Cards'>
      <a href={params.link} target='_blank' rel="noreferrer">
        <img src={params.icon} alt={params.Heading}/>
        <h1>{params.heading}</h1>
        {params.description}
      </a>
    </div>
  )
}

export default main
