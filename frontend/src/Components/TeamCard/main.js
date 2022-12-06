import React from 'react'
import Styles from './main.css'
import Picture from '../../Shared/Images/picture.jpeg'

function main (params) {
  return (
    <div style={Styles} className='TeamCard'>
      <img src={Picture} alt={params.name} />
      <h1 className='TeamName'>{params.name}</h1>
      {params.designation}
    </div>
  )
}

export default main
