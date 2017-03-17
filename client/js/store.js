import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import CheeseReducer from './reducers/cheese';
console.log(typeof CheeseReducer);

export default createStore(CheeseReducer, applyMiddleware(thunk));

