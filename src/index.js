import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './containers/app'
import './styles/index.less'

const target = document.querySelector('#root')

render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    target
)