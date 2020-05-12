import {createStore,applyMiddleware,compose} from 'redux';
//import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState ={};
const middleware=[thunk];
const store =createStore(rootReducer,initialState,compose(applyMiddleware(...middleware),
window._REDUX_DEVTOOLS_EXTENSION_
? window._REDUX_DEVTOOLS_EXTENSION_()
: f => f));

const store1=createStore(rootReducer,initialState,compose(applyMiddleware(...middleware),
window._REDUX_DEVTOOLS_EXTENSION_
? window._REDUX_DEVTOOLS_EXTENSION_()
: f => f));


export default store;