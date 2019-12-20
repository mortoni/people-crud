import React, { useContext, useState, useEffect } from 'react'
import {
  Grid,
  Dialog,
  DialogTitle,
  TextField,
  Box,
  Button,
  InputAdornment,
  DialogActions,
  Typography,
  IconButton,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { DialogContext, PeopleContext } from '../Context'
import Visibility from '@material-ui/icons/Visibility'
import { MultipleInput } from '../Form'
import AvatarPicker from '../AvatarPicker'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/styles'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => {
  return {
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  }
})

function Modal() {
  const theme = useTheme()
  const classes = useStyles()
  const isSmall = useMediaQuery(theme.breakpoints.down('xs'))
  const { dialog, dispatch } = useContext(DialogContext)
  const { peopleDispatch } = useContext(PeopleContext)
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [cep, setCep] = useState('')
  const [end, setEnd] = useState('')
  const [tels, setTel] = useState([])
  const [emails, setEmail] = useState([])
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    setNome(dialog.nome)
    setCpf(dialog.cpf)
    setCep(dialog.cep)
    setEnd(dialog.end)
    setTel(dialog.tels)
    setEmail(dialog.emails)
    setAvatar(dialog.avatar)
  }, [dialog.cep, dialog.cpf, dialog.emails, dialog.end, dialog.nome, dialog.tels, dialog.avatar])

  if (!dialog.isOpen) {
    return null
  }

  const handleAction = () => {
    const payload = {
      nome,
      cpf,
      end,
      cep,
      tels,
      emails,
      avatar,
    }

    peopleDispatch({ type: dialog.isAdd ? 'add' : 'edit', payload })
    dispatch({ type: 'close' })
  }

  return (
    <Dialog
      onClose={() => dispatch({ type: 'close' })}
      aria-labelledby="simple-dialog-title"
      open={dialog.isOpen}
      maxWidth="md"
      fullWidth
      fullScreen={isSmall}
    >
      <DialogTitle id="simple-dialog-title">
        <Typography variant="h6">{dialog.isAdd ? 'Incluir' : 'Alterar'} Cliente</Typography>
        <IconButton aria-label="close" className={classes.closeButton} onClick={() => dispatch({ type: 'close' })}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <AvatarPicker nome={nome} avatarIndex={avatar} handleAvatar={setAvatar} />

      <Box m={4}>
        <form noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nome"
                value={nome}
                onChange={event => setNome(event.target.value)}
                variant="outlined"
                fullWidth
                endAdornment={
                  <InputAdornment position="end">
                    <Visibility />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="CPF"
                value={cpf}
                onChange={event => setCpf(event.target.value)}
                variant="outlined"
                fullWidth
                disabled={!dialog.isAdd}
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                label="Endereço"
                value={end}
                onChange={event => setEnd(event.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                label="CEP"
                value={cep}
                onChange={event => setCep(event.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MultipleInput
                list={tels}
                key={nome}
                onChange={newTels => setTel([...newTels])}
                CTAlabel="Adicionar Telefone"
                inputLabel="Telefone"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MultipleInput
                list={emails}
                key={nome}
                onChange={newEmails => setEmail([...newEmails])}
                CTAlabel="Adicionar Email"
                inputLabel="Email"
              />
            </Grid>
          </Grid>
        </form>
      </Box>

      <DialogActions>
        <Button onClick={handleAction} color="primary">
          {dialog.isAdd ? 'Adicionar' : 'Salvar'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal
