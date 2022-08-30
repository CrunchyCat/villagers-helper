/**
 * Asynchronously loads the component for CardsPage
 */

import { lazyLoad } from 'utils/loadable'
import { LoadingPage } from 'app/pages/LoadingPage'

export const CardsPage = lazyLoad(
  () => import('./index'),
  module => module.CardsPage,
  { fallback: <LoadingPage /> }
)
