import {Action, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import currenciesReducer from "./currencies-reducer";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    app: appReducer,
    currencies: currenciesReducer,
});

export type RootState = ReturnType<typeof reducers>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, RootState, unknown, A>

const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;