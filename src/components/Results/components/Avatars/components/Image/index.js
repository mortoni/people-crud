import React, { useState, useContext } from 'react'
import { Box, Avatar, Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { PeopleContext, DialogContext } from '../../../../../Context'

const useStyles = makeStyles(theme => {
  return {
    avatar: {
      width: theme.spacing(14),
      height: theme.spacing(14),
      '&:hover': {
        cursor: 'pointer',
        boxShadow:
          '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
      },
      border: `4px solid ${theme.palette.secondary.main}`,
    },
  }
})
function Image({ person }) {
  const classes = useStyles()
  const [selected, setSelected] = useState(false)
  const personAvatar = `${process.env.PUBLIC_URL}/avatars/${person.avatar}.png`
  const { peopleDispatch } = useContext(PeopleContext)
  const { dispatch } = useContext(DialogContext)

  return (
    <Box
      p={4}
      position="relative"
      onMouseOver={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
      key={person.id}
    >
      <Avatar alt={person.nome} src={personAvatar} className={classes.avatar} />

      {selected && (
        <>
          <Box position="absolute" top={0} right="20px">
            <Fab
              color="secondary"
              aria-label="edit"
              size="small"
              onClick={() => dispatch({ type: 'edit', payload: person })}
            >
              <EditIcon />
            </Fab>
          </Box>
          <Box position="absolute" top="38px" right="-10px">
            <Fab
              color="secondary"
              aria-label="delete"
              size="small"
              onClick={() => peopleDispatch({ type: 'delete', payload: person })}
            >
              <DeleteIcon />
            </Fab>
          </Box>
          <Box position="absolute" top="85px" right="-12px"></Box>
        </>
      )}
    </Box>
  )
}

export default Image
