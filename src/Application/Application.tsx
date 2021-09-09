import React from 'react'
import Router from '~Router'
import GlobalStyle from './Styles/Style'
import theme from './Styles/theme'
import { ThemeProvider } from './Styles/themed-components'
import Provider from './Provider'

const Application = () =>
  <>
  <Provider>
    <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
  </Provider>
  </>

export default Application
