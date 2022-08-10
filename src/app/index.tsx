import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from 'styles/global-styles'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { selectOverlay } from 'app/components/Overlay/slice/selectors'
import { useOverlaySlice } from 'app/components/Overlay/slice'
import { HomePage } from 'app/pages/HomePage/Loadable'
import { RulesPage } from 'app/pages/RulesPage/Loadable'
import { ConfigsPage } from 'app/pages/ConfigsPage/Loadable'
import { CardsPage } from 'app/pages/CardsPage/Loadable'
import { SettingsPage } from 'app/pages/SettingsPage/Loadable'
import { NotFoundPage } from 'app/pages/NotFoundPage/Loadable'
import { Backdrop } from 'app/components/Overlay/components/Backdrop'
import { SideDrawer } from 'app/components/Overlay/components/SideDrawer'
import { CardModal } from './components/Overlay/components/CardModal'
import { Villager } from 'data/card/cards'

export const App = () => {
  const { i18n } = useTranslation()
  const overlayState = useSelector(selectOverlay)
  const { actions } = useOverlaySlice()
  const dispatch = useDispatch()

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - vilrs"
        defaultTitle="vilrs"
        htmlAttributes={{ lang: i18n.language }}
      ></Helmet>
      <Backdrop
        show={overlayState.showBackdrop}
        clickClose={() => dispatch(actions.closeAll())}
      />
      <SideDrawer
        show={overlayState.showDrawer}
        clickClose={() => dispatch(actions.toggleSideDrawer(false))}
      />
      <CardModal
        show={overlayState.showCardModal}
        cardID={overlayState.cardModalCard}
        clickClose={() => dispatch(actions.toggleCardModal(false))}
        clickChange={(id: Villager) => dispatch(actions.setCardModal(id))}
      />
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
