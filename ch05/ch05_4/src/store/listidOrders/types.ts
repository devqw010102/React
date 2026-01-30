import type {UUID} from '../commonTypes'
import {Action} from 'redux'
export * from '../commonTypes'

export type State = UUID[]

export type SetListidOrders = Action<'@listidOrders/set'> & {
  payload: State
}

export type AddListidToOrders = Action<'@listidOrders/add'> & {
  payload: UUID
}
export type RemoveListidFromOrders = Action<'@listidOrders/remove'> & {
  payload: UUID
}

export type Actions = SetListidOrders | AddListidToOrders | RemoveListidFromOrders
