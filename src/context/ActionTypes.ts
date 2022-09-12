import {MutableRefObject, RefObject} from 'react'
import {AppData} from 'types/data'
import {StackOverflowData} from 'types/stack-overflow-data'

export type ActionTypes =
  | 'GET_DATA'
  | 'SET_ACTIVE_NAV'
  | 'SET_SECTION_REF'
  | 'INTRO_ANIMATION_DONE'
  | 'GET_SO_DATA'

export interface Action {
  type: ActionTypes
  payload:
    | StackOverflowData
    | MutableRefObject<null>
    | {value: string}
    | AppData
    | RefObject<HTMLDivElement>
    | boolean
}
