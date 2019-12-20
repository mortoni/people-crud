import React, { useState, useContext } from 'react'
import { DialogContext, PeopleContext } from '../../../Context'
import { Grid, Box, Avatar, IconButton, Hidden, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles(theme => {
  return {
    row: {
      '&:hover': {
        cursor: 'pointer',
        boxShadow:
          '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
      },
    },
    avatar: {
      border: `4px solid ${theme.palette.secondary.main}`,
    },
  }
})
function Grids({ person }) {
  const classes = useStyles()
  const avatar = `${process.env.PUBLIC_URL}/avatars/${person.avatar}.png`
  const [selected, setSelected] = useState(null)
  const { dispatch } = useContext(DialogContext)
  const { peopleDispatch } = useContext(PeopleContext)

  return (
    <Box
      width="100%"
      py={2}
      className={classes.row}
      onMouseOver={() => setSelected(person.cpf)}
      onMouseLeave={() => setSelected(null)}
    >
      <Grid container alignItems="center" justify="space-evenly">
        <Grid xs={1} item>
          <Grid container justify="center">
            <Avatar alt={person.nome} src={avatar} className={classes.avatar} />
          </Grid>
        </Grid>
        <Grid xs={2} item>
          <Typography noWrap>{person.nome}</Typography>
        </Grid>
        <Hidden xsDown>
          <Grid xs={2} item>
            <Typography noWrap>{person.cpf}</Typography>
          </Grid>
          <Grid xs={1} item>
            <Typography noWrap>{person.cep}</Typography>
          </Grid>
        </Hidden>
        <Grid xs={2} item>
          <Typography noWrap>{person.end}</Typography>
        </Grid>
        <Hidden xsDown>
          <Grid md={1} item>
            <Grid container>
              {person.tels.map(tel => (
                <Grid xs={12} item key={`${tel}-${person.id}`}>
                  <Typography noWrap>{tel}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Hidden>
        <Grid xs={2} md={1} item>
          <Grid container>
            {person.emails.map(email => (
              <Grid xs={12} item key={`${email}-${person.id}`}>
                <Typography noWrap>{email}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid md={2} item>
            <Grid container justify="center">
              {selected === person.cpf && (
                <>
                  <IconButton aria-label="edit" onClick={() => dispatch({ type: 'edit', payload: person })}>
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" onClick={() => peopleDispatch({ type: 'delete', payload: person })}>
                    <DeleteIcon />
                  </IconButton>
                </>
              )}
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  )
}

export default Grids
