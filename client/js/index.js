import 'babel-polyfill';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import CheeseList from './components/cheese-list';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
        <Provider store={store}>
            <CheeseList />
        </Provider>,
        document.getElementById('app')
    )
);


