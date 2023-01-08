import {BaseThunkType, InferActionsTypes} from "./store";
import {getList, getTable} from "./currencies-reducer";

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case 'CC/APP/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const actions = {
    initializedSuccess: () => ({type: 'CC/APP/INITIALIZED_SUCCESS'} as const)
}

export const initializeApp = (): ThunkType => async (dispatch) => {
    let listPromise = await dispatch(getList());
    let tablePromise = await dispatch(getTable('USD'));

    Promise.all([listPromise, tablePromise])
        .then(() => {
            dispatch(actions.initializedSuccess());
        });
}


export default appReducer;

export type InitialState = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>