export type ActionTypes = 'GET_DATA' | 'SET_ACTIVE_NAV' | 'SET_SECTION_REF'

export interface Action {
  type: ActionTypes
  payload?: any
}
