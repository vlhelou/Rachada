import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import { applyMiddleware, createStore } from 'redux'

import { Provider } from 'react-redux'
import promise from 'redux-promise'


import * as serviceWorker from './serviceWorker';
import Rotas from './routes'
import rootReducer from './Reducers/reducers';

const store = applyMiddleware(promise)(createStore)(rootReducer)
// const store = createStore(rootReducer, applyMiddleware(promise))



ReactDOM.render(
    <Provider store={store}>
        <Rotas>
        </Rotas>


    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
