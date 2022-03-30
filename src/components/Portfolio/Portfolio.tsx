import {useAppContext} from 'common/context/useAppContext'
import {useEffect, useState} from 'react'
import {BehaviorSubject, fromEvent} from 'rxjs'
import {map, tap} from 'rxjs/operators'

import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Testimonials from './Testimonials/Testimonials'

const Portfolio = () => {
  const [homeOffset, setHomeOffset] = useState(0)
  const [skillsOffset, setSkillsOffset] = useState(0)
  const [projectsOffset, setProjectsOffset] = useState(0)
  const [aboutOffset, setAboutOffset] = useState(0)
  const [isAbout, setIsAbout] = useState(false)
  const [testimonialsOffset, setTestimonialsOffset] = useState(0)
  const [contactOffset, setContactOffset] = useState(0)

  const {state, dispatch} = useAppContext()

  console.log(`homeOffset =  ${homeOffset}`)
  console.log(`skillsOffset =  ${skillsOffset}`)
  console.log(`projectsOffset =  ${projectsOffset}`)
  console.log(`aboutOffset =  ${aboutOffset}`)
  console.log(`testimonialsOffset =  ${testimonialsOffset}`)
  console.log(`contactOffset =  ${contactOffset}`)

  const getCurrentOffset = (pageOffset: number) => {
    console.log(pageOffset)
    if (contactOffset < pageOffset) {
      dispatch({type: 'SET_ACTIVE_NAV', payload: {value: 'contact'}})
    } else if (testimonialsOffset < pageOffset && contactOffset > pageOffset) {
      dispatch({type: 'SET_ACTIVE_NAV', payload: {value: 'testimonials'}})
    } else if (aboutOffset < pageOffset && testimonialsOffset > pageOffset) {
      dispatch({type: 'SET_ACTIVE_NAV', payload: {value: 'about'}})
      setIsAbout(true)
    } else if (projectsOffset < pageOffset && aboutOffset > pageOffset) {
      dispatch({type: 'SET_ACTIVE_NAV', payload: {value: 'projects'}})
    } else if (skillsOffset < pageOffset && projectsOffset > pageOffset) {
      dispatch({type: 'SET_ACTIVE_NAV', payload: {value: 'skills'}})
    } else {
      dispatch({type: 'SET_ACTIVE_NAV', payload: {value: 'home'}})
    }
  }

  const bgOverlay$ = new BehaviorSubject<Element | null>(null)

  const monitorScrolling$ = () =>
    fromEvent(window, 'scroll').pipe(
      map(() => window.pageYOffset),
      tap(value => {
        bgOverlay$.next(document.querySelector('.bg-overlay'))
        getCurrentOffset(value)
      })
    )

  useEffect(() => {
    const subscription = monitorScrolling$().subscribe()
    return () => subscription.unsubscribe()
  }, [state])

  return (
    <>
      <Home setHomeOffset={setHomeOffset} />
      <Skills setSkillsOffset={setSkillsOffset} />
      <Projects setProjectsOffset={setProjectsOffset} />
      <About setAboutOffset={setAboutOffset} isAbout={isAbout} />
      <Testimonials setTestimonialsOffset={setTestimonialsOffset} />
      <Contact setContactOffset={setContactOffset} />
    </>
  )
}

export default Portfolio
