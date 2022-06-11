/**
 * Asynchronously loads the component for NotFoundPage
 */

import * as React from 'react'
import { lazyLoad } from 'utils/loadable'
import { LoadingPage } from 'app/pages/LoadingPage'

export const NotFoundPage = lazyLoad(
  () => import('./index'),
  module => module.NotFoundPage,
  { fallback: <LoadingPage /> }
)
