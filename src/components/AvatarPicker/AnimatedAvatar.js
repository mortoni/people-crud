import React from 'react'
import { Box, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { CSSTransition } from 'react-transition-group'

const useStyles = makeStyles(theme => {
  return {
    picker: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
    optionEnter: {
      opacity: 0,
      transform: 'scale(0.9)',
    },
    optionEnterActive: {
      opacity: 1,
      transform: 'translateX(0)',
      transition: 'opacity 500ms, transform 500ms',
    },
    optionExit: {
      opacity: 1,
    },
    optionExitActive: {
      opacity: 0,
      transform: 'scale(0.9)',
      transition: 'opacity 500ms, transform 500ms',
    },
  }
})
function AnimatedAvatar({ option, handleAvatar, toggle }) {
  const classes = useStyles()

  return (
    <CSSTransition
      in={toggle}
      timeout={500}
      classNames={{
        enter: classes.optionEnter,
        enterActive: classes.optionEnterActive,
        exit: classes.optionExit,
        exitActive: classes.optionExitActive,
      }}
      unmountOnExit
    >
      <Box position="absolute" right={option.r} top={option.t} className={classes.picker} key={option.index}>
        <Avatar
          alt={option}
          src={`${process.env.PUBLIC_URL}/avatars/${option.index}.png`}
          onClick={() => handleAvatar(option.index)}
        />
      </Box>
    </CSSTransition>
  )
}

export default AnimatedAvatar
