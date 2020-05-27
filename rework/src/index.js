import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import {Provider as ReduxProvider} from 'react-redux'
import configureStore from './redux/configureStore'

const store = configureStore()

render(
    <ReduxProvider store = {store}>
        <Router>
            <App></App>
        </Router>
    </ReduxProvider>
    , document.getElementById('root')
)