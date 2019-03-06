import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from "react-router-dom";
import store from './store'
import App from './containers/App'
import './styles/index.less'

const target = document.querySelector('#root')

render(
    <Provider store={store()}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>,
    target
)
