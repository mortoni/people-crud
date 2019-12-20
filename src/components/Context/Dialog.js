import React, { useReducer, createContext } from 'react'
import { defaultPerson } from './People'

const initialState = {
  isOpen: false,
  isAdd: true,
}

export const DialogContext = createContext(initialState)

const reducer = (dialog, action) => {
  switch (action.type) {
    case 'add':
      return { ...initialState, isOpen: true, ...defaultPerson }
    case 'edit':
      return { ...action.payload, isOpen: true, isAdd: false }
    case 'close':
      return { ...initialState }
    default:
      return dialog
  }
}

export const DialogContextProvider = ({ children }) => {
  const [dialog, dispatch] = useReducer(reducer, initialState)
  const value = { dialog, dispatch }

  return <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
}

export const DialogContexConsumer = DialogContext.Consumer
