import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import Grids from './components/Grids'
import Avatars from './components/Avatars'
import { PeopleContext } from '../Context'

function Results({ isGrid }) {
  const { people, searchTerm } = useContext(PeopleContext)
  // TODO case for when prop is an array of string
  const check = prop => {
    switch (typeof prop) {
      case 'string':
        return prop.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      default:
        return false
    }
  }

  const filteredPeople = () => {
    const results = []
    people.forEach(person => {
      for (var key in person) {
        const found = results.find(r => r.cpf === person.cpf)
        if (check(person[key]) && !found) {
          results.push(person)
        }
      }
    })
    return results
  }

  const newPeople = searchTerm.length > 0 ? filteredPeople() : people

  return (
    <Grid container>
      {isGrid && <Grids people={newPeople} />}

      {!isGrid && <Avatars people={newPeople} />}
    </Grid>
  )
}

export default Results
