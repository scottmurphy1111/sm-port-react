import {useAppContext} from 'common/context/useAppContext'
import {useEffect, useState} from 'react'
import {fromEvent} from 'rxjs'
import {map, tap} from 'rxjs/operators'

export const useMonitorScrolling = () => {
  const [, setHomeOffset] = useState(0)
  const [skillsOffset, setSkillsOffset] = useState(0)
  const [projectsOffset, setProjectsOffset] = useState(0)
  const [aboutOffset, setAboutOffset] = useState(0)
  const [isAbout, setIsAbout] = useState(false)
  const [testimonialsOffset, setTestimonialsOffset] = useState(0)
  const [contactOffset, setContactOffset] = useState(0)
  const {state, dispatch} = useAppContext()

  const getCurrentOffset = (pageOffset: number) => {
    console.log(pageOffset)
    if (contactOffset <= pageOffset) {
      dispatch({type: 'SET_ACTIVE_NAV', payload: {value: 'contact'}})
    } else if (testimonialsOffset <= pageOffset && contactOffset > pageOffset) {
      dispatch({type: 'SET_ACTIVE_NAV', payload: {value: 'testimonials'}})
    } else if (aboutOffset <= pageOffset && testimonialsOffset > pageOffset) {
      dispatch({type: 'SET_ACTIVE_NAV', payload: {value: 'about'}})
      setIsAbout(true)
    } else if (projectsOffset <= pageOffset && aboutOffset > pageOffset) {
      dispatch({type: 'SET_ACTIVE_NAV', payload: {value: 'projects'}})
    } else if (skillsOffset <= pageOffset && projectsOffset > pageOffset) {
      dispatch({type: 'SET_ACTIVE_NAV', payload: {value: 'skills'}})
    } else {
      dispatch({type: 'SET_ACTIVE_NAV', payload: {value: 'home'}})
    }
  }

  // Observable to monitor scrolling offsets
  const monitorScrolling$ = () =>
    fromEvent(window, 'scroll').pipe(
      map(() => window.pageYOffset),
      tap(value => {
        getCurrentOffset(value)
      })
    )

  useEffect(() => {
    // subscribe to observable to monitor scrolling offsets
    const subscription = monitorScrolling$().subscribe()
    return () => subscription.unsubscribe()
  }, [state])

  return {
    setHomeOffset,
    setSkillsOffset,
    setProjectsOffset,
    setAboutOffset,
    setTestimonialsOffset,
    setContactOffset,
    isAbout,
  }
}
