import {
  AboutData,
  AppData,
  ContactData,
  HomeData,
  NavData,
  ProjectsData,
  SkillsData,
  TestimonialsData,
} from 'models/data'
import {NavItemType} from 'models/nav-item'
import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react'

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
  sectionRefs: any
}

export const initialState: AppState = {
  nav: {},
  home: {},
  skills: {},
  projects: {},
  about: {},
  testimonials: {},
  contact: {},
  activeNav: {value: 'home'},
  sectionRefs: [],
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