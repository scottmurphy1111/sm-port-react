import {AppContext} from 'common/context/AppContext'
import {useAppContext} from 'common/context/useAppContext'
import React, {useCallback, useContext, useEffect, useState} from 'react'
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

  // const data = useContext(AppContext)
  const {state, dispatch} = useAppContext()

  const navElements = Array.from(document.querySelectorAll('[data-nav]'))
  const keys = navElements.map(item => {
    return item.textContent ? item.textContent.toLowerCase() : 'home'
  })

  const navItems = navElements.reduce(
    (acc: Record<string, any>, item: any, index) => {
      acc[keys[index]] = item
      return acc
    },
    {}
  )

  const setActive = (active: any) => {
    navElements.forEach((item: any) => {
      return item.dataset.nav === active
        ? (item.dataset.active = true)
        : (item.dataset.active = false)
    })
  }

  // let skillsFadeItems: any = []
  // let projectsFadeItems: any = []
  // let aboutFadeItems: any = []
  // let testimonialsFadeItems: any = []
  // let contactFadeItems: any = []

  // useEffect(() => {
  //   if (data) {
  //     skillsFadeItems = document.querySelectorAll('.skills .fade-item')
  //     projectsFadeItems = document.querySelectorAll('.projects .fade-item')
  //     aboutFadeItems = document.querySelectorAll('.about .fade-item')
  //     testimonialsFadeItems = document.querySelectorAll(
  //       '.testimonials-section .fade-item'
  //     )
  //     contactFadeItems = document.querySelectorAll('.contact .fade-item')
  //   }
  // }, [data])

  // const fadeInItems = (fadeableItems: any) => {
  //   // console.log(fadeableItems)
  //   // console.log(testimonialsFadeItems)
  //   fadeableItems.forEach((element: any, index: number) => {
  //     element.style.opacity = 1
  //     element.style.transitionDelay = `${index * 0.05}s`
  //     element.style.transform = 'translate(0)'
  //   })
  // }

  const getCurrentOffset = (pageOffset: any) => {
    if (homeOffset < pageOffset && skillsOffset > pageOffset) {
      dispatch({type: 'SET_ACTIVE_NAV', payload: {value: 'home'}})
    } else if (skillsOffset < pageOffset && projectsOffset > pageOffset) {
      dispatch({type: 'SET_ACTIVE_NAV', payload: {value: 'skills'}})
      // fadeInItems(skillsFadeItems)
    } else if (projectsOffset < pageOffset && aboutOffset > pageOffset) {
      dispatch({type: 'SET_ACTIVE_NAV', payload: {value: 'projects'}})
      // fadeInItems(projectsFadeItems)
    } else if (aboutOffset < pageOffset && testimonialsOffset > pageOffset) {
      dispatch({type: 'SET_ACTIVE_NAV', payload: {value: 'about'}})
      // fadeInItems(aboutFadeItems)
      setIsAbout(true)
    } else if (testimonialsOffset < pageOffset && contactOffset > pageOffset) {
      dispatch({type: 'SET_ACTIVE_NAV', payload: {value: 'testimonials'}})
      // fadeInItems(testimonialsFadeItems)
    } else {
      dispatch({type: 'SET_ACTIVE_NAV', payload: {value: 'contact'}})
      // fadeInItems(contactFadeItems)
    }

    // setActive(navItems.active)
  }

  const bgOverlay$ = new BehaviorSubject<any>(null)

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
  })

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
