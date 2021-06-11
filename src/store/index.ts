import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

const stores = createStore(reducer, compose(applyMiddleware(thunk)));

export default stores;
