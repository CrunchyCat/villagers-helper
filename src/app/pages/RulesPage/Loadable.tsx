/**
 * Asynchronously loads the component for RulesPage
 */

import { lazyLoad } from 'utils/loadable'
import { LoadingPage } from 'app/pages/LoadingPage'

export const RulesPage = lazyLoad(
  () => import('./index'),
  module => module.RulesPage,
  { fallback: <LoadingPage /> }
)
