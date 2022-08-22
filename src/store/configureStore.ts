import { configureStore, StoreEnhancer } from '@reduxjs/toolkit'
import { createInjectorsEnhancer } from 'redux-injectors'
import createSagaMiddleware from 'redux-saga'
import { createReducer } from './reducers'

export const configureAppStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const { run: runSaga } = sagaMiddleware

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga
    })
  ] as StoreEnhancer[]

  // Return store with middlewares and enhancers
  return configureStore({
    reducer: createReducer(),
    middleware: defaultMiddleware => [...defaultMiddleware(), sagaMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers
  })
}
