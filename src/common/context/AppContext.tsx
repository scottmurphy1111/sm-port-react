import {createContext, Dispatch, ReactNode, RefObject, useReducer} from 'react'
import {
  AboutData,
  ContactData,
  HomeData,
  NavData,
  ProjectsData,
  SkillsData,
  TestimonialsData,
} from 'types/data'
import {NavItemType} from 'types/nav-item'

import {Action} from './ActionTypes'
import reducer from './reducer'

export interface AppState {
  nav: NavData
  home: HomeData
  skills: SkillsData
  projects: ProjectsData
  about: AboutData
  testimonials: TestimonialsData
  contact: ContactData
  activeNav: NavItemType
  sectionRefs: RefObject<HTMLDivElement>[]
  introAnimDone: boolean
}

export const initialState: AppState = {
  nav: {navItems: []},
  home: {name: '', position: '', subHeadingA: '', subHeadingB: ''},
  skills: {title: '', skillset: []},
  projects: {title: '', projectsItems: []},
  about: {title: '', aboutItems: []},
  testimonials: {title: '', testimonialsItems: []},
  contact: {title: '', socials: []},
  activeNav: {value: 'home'},
  sectionRefs: [],
  introAnimDone: false,
} as AppState

export const AppContext = createContext<{
  state: AppState
  dispatch: Dispatch<Action>
}>({
  state: initialState,
  dispatch: () => {},
})

export const AppContextProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}
