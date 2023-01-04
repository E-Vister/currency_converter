import {BaseThunkType, InferActionsTypes} from "./store";
import {getList} from "./currencies-reducer";

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
    let listPromise = dispatch(getList());

    Promise.all([listPromise])
        .then(() => {
            dispatch(actions.initializedSuccess());
        });
}


export default appReducer;

export type InitialState = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>