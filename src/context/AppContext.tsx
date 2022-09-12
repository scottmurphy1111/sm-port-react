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
import {StackOverflowData} from 'types/stack-overflow-data'

import {Action} from './ActionTypes'
import {AppReducer} from './AppReducer'

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
  soData: StackOverflowData
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
  soData: {
    items: [
      {
        badge_counts: {
          bronze: 0,
          silver: 0,
          gold: 0,
        },
        reputation: 0,
      },
    ],
  },
} as AppState

export const AppContext = createContext<{
  state: AppState
  dispatch: Dispatch<Action>
}>({
  state: initialState,
  dispatch: () => {},
})

export const AppContextProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}
