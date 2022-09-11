export type ActionTypes =
  | 'GET_DATA'
  | 'SET_ACTIVE_NAV'
  | 'SET_SECTION_REF'
  | 'INTRO_ANIMATION_DONE'

export interface Action {
  type: ActionTypes
  payload?: any
}
