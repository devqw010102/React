import {configureStore} from '@reduxjs/toolkit'
import {rootReducer} from './rootReducer'
import {useMemo} from 'react'
import logger from 'redux-logger'

const useLogger = process.env.NODE_ENV !== 'production'

const initializeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
      const middlewares = getDefaultMiddleware()
      return useLogger ? middlewares.concat(logger as any) : middlewares
    }
  })
  return store
}
export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
