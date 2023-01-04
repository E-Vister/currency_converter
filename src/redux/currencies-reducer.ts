import {CurrencyType, ListType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from './store';
import {currenciesAPI} from "../api/api";

let initialState = {
    defaultCurrency: 'USD',
    firstCurrency: {
        key: 'USD',
        amount: 5,
        convert: {
            to: 'BYN',
            quote: 2.523431,
            result: 12.62
        }
    } as CurrencyType,
    secondCurrency: {
        key: 'BYN',
        amount: 5,
        convert: {
            to: 'USD',
            quote: 0.396286,
            result: 1.98
        }
    } as CurrencyType,
    list: undefined as undefined | ListType,
}

const currenciesReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case 'CC/CURRENCIES/UPDATE_CALC_FIELD': {
            return action.boxType === 'have' ? {
                ...state,
                firstCurrency: {
                    ...state.firstCurrency,
                    amount: action.amount,
                    convert: {
                        ...state.firstCurrency.convert,
                        result: Math.round((action.amount * state.firstCurrency.convert.quote) * 100) / 100
                    }
                },
            } : {
                ...state,
                firstCurrency: {
                    ...state.firstCurrency,
                    amount: Math.round((action.amount / state.firstCurrency.convert.quote) * 100) / 100,
                    convert: {
                        ...state.firstCurrency.convert,
                        result: action.amount
                    }
                }
            };
        }
        case 'CC/CURRENCIES/SWAP_CURRENCIES': {
            const {firstCurrency, secondCurrency} = state;
            return {
                ...state,
                firstCurrency: {
                    ...secondCurrency,
                    amount: firstCurrency.amount,
                    convert: {
                        ...secondCurrency.convert,
                        result: Math.round((firstCurrency.amount * state.secondCurrency.convert.quote) * 100) / 100
                    }
                },
                secondCurrency: {
                    ...firstCurrency
                }
            }
        }
        case "CC/CURRENCIES/SET_LIST": {
            return {
               ...state,
                list: action.list
            }
        }
        default:
            return state;
    }
}

export const actions = {
    updateCalcField: (amount: number, boxType: string) => ({type: 'CC/CURRENCIES/UPDATE_CALC_FIELD', amount, boxType} as const),
    swapCurrencies: () => ({type: 'CC/CURRENCIES/SWAP_CURRENCIES'} as const),
    setList: (list: ListType) => ({type: 'CC/CURRENCIES/SET_LIST', list} as const),
}

export const getList = (): ThunkType => async (dispatch) => {
    let list = await currenciesAPI.getList();
    dispatch(actions.setList(list));
    return list;
}

export default currenciesReducer;

export type InitialState = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>