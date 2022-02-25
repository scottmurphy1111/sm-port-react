import {useContext} from 'react'

import {Action} from './ActionTypes'
import {AppContext, AppState} from './AppContext'

type ContextHook = () => {
  state: AppState
  dispatch: (action: Action) => void
}

export const useAppContext: ContextHook = () => {
  const {state, dispatch} = useContext(AppContext)
  return {state, dispatch}
}
