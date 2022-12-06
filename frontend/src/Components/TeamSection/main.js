import React from 'react'
import Styles from './main.css'
import TeamCard from '../TeamCard/main'
import Data from './dummy_data.json'

function main () {
  return (
    <div id="AboutUs" style={Styles}>
      <div className='TeamDescription'>
        <div className='TeamHeading'>Our Team</div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
        delectus.
      </div>
      <div className="TeamSection">
        {Data.people.map(Person => {
          return (
            <TeamCard
              name={Person.Name}
              designation={Person.Designation}
              picture={Person.Picture}
            />
          )
        })}
      </div>
    </div>
  )
}

export default main
