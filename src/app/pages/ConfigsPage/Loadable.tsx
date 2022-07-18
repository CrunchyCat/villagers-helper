/**
 * Asynchronously loads the component for ConfigsPage
 */

import * as React from 'react'
import { lazyLoad } from 'utils/loadable'
import { LoadingPage } from 'app/pages/LoadingPage'

export const ConfigsPage = lazyLoad(
  () => import('./index'),
  module => module.ConfigsPage,
  { fallback: <LoadingPage /> }
)
