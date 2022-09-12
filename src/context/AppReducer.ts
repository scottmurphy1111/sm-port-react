import {MutableRefObject, RefObject} from 'react'
import {AppData} from 'types/data'
import {StackOverflowData} from 'types/stack-overflow-data'

import {Action} from './ActionTypes'
import {AppState, initialState} from './AppContext'

type ReducerType = (state: AppState, action: Action) => AppState

export const AppReducer: ReducerType = (
  state: AppState = initialState,
  action: Action
) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        ...(action.payload as AppData),
      }
    case 'INTRO_ANIMATION_DONE':
      return {
        ...state,
        introAnimDone: action.payload as boolean,
      }
    case 'SET_ACTIVE_NAV':
      return {
        ...state,
        activeNav: action.payload as {value: string},
      }
    case 'SET_SECTION_REF':
      if (
        action.payload &&
        state.sectionRefs &&
        !state.sectionRefs.includes(action.payload as RefObject<HTMLDivElement>)
      ) {
        return {
          ...state,
          sectionRefs: [
            ...state.sectionRefs,
            action.payload as MutableRefObject<null>,
          ],
        }
      } else {
        return state
      }

    case 'GET_SO_DATA':
      return {
        ...state,
        soData: action.payload as StackOverflowData,
      }

    default:
      return state
  }
}
