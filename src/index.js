import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import WeatherApp from './containers/'
import './styles/index.less'

const target = document.querySelector('#root')

render(
    <Provider store={store()}>
        <WeatherApp />
    </Provider>,
    target
)