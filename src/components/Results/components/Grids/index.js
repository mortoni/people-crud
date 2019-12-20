import React from 'react'
import Header from './Header'
import Person from './Person'

function Grids({ people }) {
  return (
    <>
      <Header />

      {people.map(person => (
        <Person person={person} key={person.id} />
      ))}
    </>
  )
}

export default Grids
