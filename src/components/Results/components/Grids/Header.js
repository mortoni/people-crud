import React from 'react'
import { Grid, Box, Hidden } from '@material-ui/core'

function Header() {
  return (
    <Hidden xsDown>
      <Box width="100%" mb={2}>
        <Grid container>
          <Grid xs={1} item />
          <Grid xs={2} item>
            NOME
          </Grid>
          <Grid xs={2} item>
            CPF
          </Grid>
          <Grid xs={1} item>
            CEP
          </Grid>
          <Grid xs={2} item>
            END
          </Grid>
          <Grid xs={1} item>
            TEL
          </Grid>
          <Grid xs={2} item>
            EMAIL
          </Grid>
        </Grid>
      </Box>
    </Hidden>
  )
}

export default Header
