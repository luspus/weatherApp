import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../src/reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export default function store(initialState={}) {
    return createStore(
        reducer,
        composeEnhancers(applyMiddleware(thunk))
    )
}
