import React from 'react'
import { Box, Grid, TextField, IconButton, Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

function MultipleInput({ list, key, onChange, CTAlabel, inputLabel }) {
  const handleDelete = i => {
    list.splice(i, 1)
    onChange(list)
  }

  const handleAdd = () => {
    list.push('')
    onChange(list)
  }

  const handleChange = (event, i) => {
    list[i] = event.target.value
    onChange(list)
  }

  return (
    <>
      {list &&
        list.map((email, i) => (
          <Grid container spacing={2} key={`${key}-email-${i}`}>
            <Grid xs={10} item>
              <TextField
                id="outlined-name"
                label={inputLabel}
                value={email}
                onChange={event => handleChange(event, i)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={2} item>
              <IconButton aria-label="delete" onClick={() => handleDelete(i)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
      <Box mt={2}>
        <Button variant="outlined" color="primary" href="#outlined-buttons" size="large" onClick={handleAdd}>
          {CTAlabel}
        </Button>
      </Box>
    </>
  )
}

export default MultipleInput
