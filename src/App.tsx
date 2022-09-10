import {GlobalStyles} from 'Global.style'
import {useFetchAppData} from 'hooks/useFetchAppData'
import {useEffect} from 'react'

import {Portfolio} from './components/Portfolio/Portfolio'
import {BgImage} from './components/shared/BgImage'
import {Nav} from './components/shared/Nav/Nav'

const App = () => {
  useFetchAppData()

  const resetPage = () => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0)
    }
  }

  useEffect(() => {
    resetPage()
    console.log(
      '👋🏻 WELCOME TO MY PORTFOLIO! PLEASE MAKE YOURSELF AT HOME! 🏠 CLICK CONTACT TO GET IN TOUCH 🤙🏻📞'
    )
  }, [])

  return (
    <>
      <GlobalStyles />
      <Nav />
      <Portfolio />
      <BgImage />
    </>
  )
}

export default App
