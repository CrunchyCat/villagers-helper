import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/NavBar'
import { Masthead } from './Masthead'

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>villagers helper</title>
        <meta name="description" content="A helpful tool for villagers" />
      </Helmet>
      <NavBar />
      <Masthead />
    </>
  )
}
