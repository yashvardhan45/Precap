import React from 'react'
import Styles from './main.css'
import Card from '../PageCard/main'
import Instagram from '../.././Shared/Images/instagram.png'
import Discord from '../.././Shared/Images/discord.png'
import Blog from '../.././Shared/Images/blog.png'

function main () {
  return (
    <div id="SectionCards">
      <div className='description' style={Styles}>
        <h1>
          {/* Text describing page cards goes here */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ab,
          dolorum repellendus officiis modi officia omnis repudiandae natus
          distinctio molestias qui reprehenderit repellat! Minus, vero!
        </h1>
      </div>
      <div className='CardsSection'>
        <Card
          icon={Instagram}
          heading='Social Media'
          description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus a quod maiores tenetur animi fugit dolores odit temporibus dignissimos ex harum, quae recusandae? Quasi maxime neque blanditiis aspernatur illum rem minima cum inventore distinctio, ab quos fuga deserunt. A aut assumenda sunt officiis. Provident maiores eveniet dolorem ad facere qui.'
          link='https://www.google.com'
        />
        <Card
          icon={Discord}
          heading='Discord'
          description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus a quod maiores tenetur animi fugit dolores odit temporibus dignissimos ex harum, quae recusandae? Quasi maxime neque blanditiis aspernatur illum rem minima cum inventore distinctio, ab quos fuga deserunt. A aut assumenda sunt officiis. Provident maiores eveniet dolorem ad facere qui.'
          link='https://www.google.com'
        />
        <Card
          icon={Blog}
          heading='Blog'
          description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus a quod maiores tenetur animi fugit dolores odit temporibus dignissimos ex harum, quae recusandae? Quasi maxime neque blanditiis aspernatur illum rem minima cum inventore distinctio, ab quos fuga deserunt. A aut assumenda sunt officiis. Provident maiores eveniet dolorem ad facere qui.'
          link='https://www.google.com'
        />
      </div>
    </div>
  )
}

export default main
