import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import reducer from '../src/reducers/index'

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
    thunk,
  //  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

export default function store(initialState={}) {
    return createStore(
        reducer,
        applyMiddleware(thunk)
    );
}