import {GlobalStyles} from 'Global.style'
import React, {createContext, useEffect} from 'react'

import Portfolio from './components/Portfolio/Portfolio'
import BgImage from './components/shared/BgImage'
import Nav from './components/shared/Nav/Nav'
import data from './data/data.json'

export const appData = {
  home: data.panels.home,
  skills: data.panels.skills,
  projects: data.panels.projects,
  about: data.panels.about,
  testimonials: data.panels.testimonials,
  contact: data.panels.contact,
}

export const AppContext = createContext(appData)

const App = () => {
  const resetPage = () => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0)
    }
  }

  useEffect(() => {
    resetPage()
    console.log('WELCOME TO MY SITE, PLEASE MAKE YOURSELF AT HOME!')
  }, [])

  return (
    <AppContext.Provider value={appData}>
      <GlobalStyles />
      <Nav />
      <Portfolio />
      <BgImage />
    </AppContext.Provider>
  )
}

export default App
