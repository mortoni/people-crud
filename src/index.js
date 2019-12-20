import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './components/Dashboard'
import * as serviceWorker from './serviceWorker'
import { PeopleContextProvider, DialogContextProvider } from './components/Context'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import theme from '../src/theme'

ReactDOM.render(
  <ThemeProvider theme={createMuiTheme(theme)}>
    <PeopleContextProvider>
      <DialogContextProvider>
        <Dashboard />
      </DialogContextProvider>
    </PeopleContextProvider>
  </ThemeProvider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
