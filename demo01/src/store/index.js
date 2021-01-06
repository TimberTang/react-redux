import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas'

const sageMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}) : compose
const enhancer = composeEnhancers(applyMiddleware(sageMiddleware))

const store = createStore(
  reducer,
  enhancer
)

sageMiddleware.run(mySagas)

export default store