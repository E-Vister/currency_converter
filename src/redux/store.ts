import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import currenciesReducer from "./currencies-reducer";

let reducers = combineReducers({
    currencies: currenciesReducer
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof reducers>
export default store;