/* eslint-disable no-case-declarations */
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
        ...action.payload,
      }
    case 'INTRO_ANIMATION_DONE':
      return {
        ...state,
        introAnimDone: true,
      }
    case 'SET_ACTIVE_NAV':
      return {
        ...state,
        activeNav: action.payload,
      }
    case 'SET_SECTION_REF':
      if (
        action.payload &&
        state.sectionRefs &&
        !state.sectionRefs.includes(action.payload)
      ) {
        return {
          ...state,
          sectionRefs: [...state.sectionRefs, action.payload],
        }
      } else {
        return state
      }

    default:
      return state
  }
}
