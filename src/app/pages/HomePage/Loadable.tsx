/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable'
import { LoadingPage } from 'app/pages/LoadingPage'

export const HomePage = lazyLoad(
  () => import('./index'),
  module => module.HomePage,
  { fallback: <LoadingPage /> }
)
