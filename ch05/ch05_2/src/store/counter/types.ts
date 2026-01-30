import {Action} from 'redux'

export type State = number

export type SetCounterAction = Action<'@counter/setcounter'> & {
  payload: State
}

export type Actions = SetCounterAction
