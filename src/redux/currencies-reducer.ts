type InitialStateType = {
    defaultCurrency: string,
    firstCurrency: string,

}

let initialState = {

}

const currenciesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default currenciesReducer;