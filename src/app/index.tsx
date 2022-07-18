import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from 'styles/global-styles'
import { useTranslation } from 'react-i18next'
import { HomePage } from './pages/HomePage/Loadable'
import { RulesPage } from './pages/RulesPage/Loadable'
import { ConfigsPage } from './pages/ConfigsPage/Loadable'
import { CardsPage } from './pages/CardsPage/Loadable'
import { SettingsPage } from './pages/SettingsPage/Loadable'
import { NotFoundPage } from './pages/NotFoundPage/Loadable'

export const App = () => {
  const { i18n } = useTranslation()
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - villagers helper"
        defaultTitle="villagers helper"
        htmlAttributes={{ lang: i18n.language }}
      ></Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="rules" element={<RulesPage />} />
        <Route path="configs" element={<ConfigsPage />} />
        <Route path="cards" element={<CardsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}
