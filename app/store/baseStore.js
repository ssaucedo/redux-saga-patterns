import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import context from './Pattern1/store'
import uiStore from '../store/uiStore'
import rootSagas from '../sagas/rootSagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(combineReducers({uiStore, context}), compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
))

sagaMiddleware.run(rootSagas)

export default store