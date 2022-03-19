import {useAppContext} from 'common/context/useAppContext'
import {GlobalStyles} from 'Global.style'
import {useEffect} from 'react'

import Portfolio from './components/Portfolio/Portfolio'
import BgImage from './components/shared/BgImage'
import Nav from './components/shared/Nav/Nav'
import data from './data/data.json'

const App = () => {
  const {dispatch} = useAppContext()
  const fetchAppData = () => Promise.resolve(data)

  useEffect(() => {
    fetchAppData().then(payload => {
      dispatch({
        type: 'GET_DATA',
        payload: payload,
      })
    })
  }, [])

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
    <>
      <GlobalStyles />
      <Nav />
      <Portfolio />
      <BgImage />
    </>
  )
}

export default App
