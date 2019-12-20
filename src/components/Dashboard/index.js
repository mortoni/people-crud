import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import Header from '../Header'
import Search from '../Search'
import Results from '../Results'
import Dialog from '../Dialog'

function App() {
  const [isGrid, setGrid] = useState(true)

  return (
    <>
      <Grid container>
        <Grid xs={12} item>
          <Header />
        </Grid>

        <Grid xs={12} item>
          <Search isGrid={isGrid} setGrid={() => setGrid(!isGrid)} />
        </Grid>

        <Grid xs={12} item>
          <Results isGrid={isGrid} />
        </Grid>
      </Grid>

      <Dialog />
    </>
  )
}

export default App
