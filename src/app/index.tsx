import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from 'styles/global-styles'

import { HomePage } from './pages/HomePage/Loadable'
import { NotFoundPage } from './pages/NotFoundPage/Loadable'
import { useTranslation } from 'react-i18next'

export function App() {
  const { i18n } = useTranslation()
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - villagers helper"
        defaultTitle="villagers helper"
        htmlAttributes={{ lang: i18n.language }}
      ></Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  )
}
