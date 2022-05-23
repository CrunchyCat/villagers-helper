import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/NavBar'
import { Masthead } from './Masthead'
import { Features } from './Features'
import { PageWrapper } from 'app/components/PageWrapper'

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>villagers helper</title>
        <meta name="description" content="A helpful tool for villagers" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <Masthead />
        <Features />
      </PageWrapper>
    </>
  )
}
