import React from 'react'
import { Box, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Image from '../Avatars/components/Image'

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
    },
    paper: {
      padding: theme.spacing(3, 2),
      margin: theme.spacing(2),
      position: 'relative',
      height: 350,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(7),
    },
    imageContainer: {
      top: '-86px',
    },
  }
})
function Avatars({ people }) {
  const classes = useStyles()

  return (
    <Box width="100%" display="flex">
      <Grid container justify="center">
        {people.map(person => (
          <Grid md={3} key={person.id}>
            <Paper className={classes.paper}>
              <Box position="absolute" className={classes.imageContainer}>
                <Image person={person} />
              </Box>

              <Box mt={2}>
                <Grid container spacing={2}>
                  <Grid xs={12} item>
                    <Typography>Nome: {person.nome}</Typography>
                  </Grid>
                  <Grid xs={12} item>
                    <Typography>CPF: {person.cpf}</Typography>
                  </Grid>
                  <Grid xs={12} item>
                    <Typography>Endereço: {person.end}</Typography>
                  </Grid>
                  <Grid xs={12} item>
                    <Typography>CEP: {person.cep}</Typography>
                  </Grid>
                  <Grid xs={12} item>
                    <Typography>Telefone: {person.tels.join(', ')}</Typography>
                  </Grid>
                  <Grid xs={12} item>
                    <Typography>Emai: {person.emails.join(', ')}</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Avatars
