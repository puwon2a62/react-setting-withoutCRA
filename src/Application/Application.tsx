import React from 'react'
import Router from '~Router'
import GlobalStyle from './Styles/Style'
import theme from './Styles/theme'
import { ThemeProvider } from './Styles/themed-components'

const Application = () =>
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>

export default Application
