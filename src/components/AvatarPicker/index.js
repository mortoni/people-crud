import React, { useState } from 'react'
import { Box, Avatar, Fab } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { makeStyles } from '@material-ui/styles'
import AnimatedAvatar from './AnimatedAvatar'

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
function AvatarPicker({ nome, avatarIndex, handleAvatar }) {
  const [avatar, setAvatar] = useState(null)
  const [toggle, setToggle] = useState(false)
  const classes = useStyles()
  const options = [
    { index: '1', r: '-10px', t: '-45px' },
    { index: '2', r: '25px', t: '-75px' },
    { index: '3', r: '74px', t: '-80px' },
    { index: '4', r: '117px', t: '-60px' },
  ]

  const getAvatar = () => {
    if (avatarIndex) {
      return `${process.env.PUBLIC_URL}/avatars/${avatarIndex}.png`
    } else if (avatar) {
      return `${process.env.PUBLIC_URL}/avatars/${avatar}.png`
    }
    return null
  }

  const handleChooseAvatar = index => {
    setAvatar(index)
    handleAvatar(index)
    setToggle(false)
  }

  return (
    <Box display="flex" justifyContent="center">
      <Box position="relative" onClick={() => setToggle(!toggle)}>
        <Avatar alt={nome} src={getAvatar()} className={classes.avatar} />

        <Box position="absolute" top="38px" right="-20px">
          <Fab color="secondary" aria-label="edit" size="small">
            <EditIcon />
          </Fab>
          {options.map((option, index) => (
            <AnimatedAvatar
              option={option}
              index={index}
              handleAvatar={handleChooseAvatar}
              toggle={toggle}
              key={option.index}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default AvatarPicker
