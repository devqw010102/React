import {Action} from 'redux'

export type State = boolean

export type SetLoadingAction = Action<'@loading/setLoadingAction'> & {
  payload: State
}
export type Actions = SetLoadingAction
