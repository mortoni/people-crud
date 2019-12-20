import React, { useContext } from 'react'
import { DialogContext, PeopleContext } from '../Context'
import { Box, OutlinedInput, InputAdornment, Typography, Grid, Button, IconButton, Hidden } from '@material-ui/core'
import Search from '@material-ui/icons/Search'
import AppIcon from '@material-ui/icons/Apps'
import DehazeIcon from '@material-ui/icons/Dehaze'

function App({ isGrid, setGrid }) {
  const { dispatch } = useContext(DialogContext)
  const { peopleDispatch, searchTerm, setSearchTerm } = useContext(PeopleContext)

  const handleSearch = event => {
    const { value } = event.target

    setSearchTerm(value)
    peopleDispatch({ type: 'filter', term: value })
  }

  return (
    <form noValidate autoComplete="off">
      <Box my={4}>
        <Grid container justify="center" alignItems="center">
          <Hidden xsDown>
            <Grid sm={2} md={1} item>
              <Typography variant="h6">Search</Typography>
            </Grid>
          </Hidden>
          <Grid xs={7} sm={4} item>
            <OutlinedInput
              id="filled-adornment-password"
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              margin="dense"
              fullWidth
              endAdornment={
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid xs={3} sm={2} md={1} item>
            <Grid container justify="center">
              <Button
                variant="outlined"
                color="primary"
                href="#outlined-buttons"
                size="large"
                onClick={() => dispatch({ type: 'add' })}
              >
                Add
              </Button>
            </Grid>
          </Grid>
          <Grid xs={2} sm={1} item>
            <IconButton aria-label="delete" onClick={setGrid}>
              {isGrid ? <AppIcon /> : <DehazeIcon />}
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </form>
  )
}

export default App
