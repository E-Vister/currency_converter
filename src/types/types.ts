export type CurrencyType = {
    key: string,
    amount: number,
    convert: {
        to: string,
        quote: number,
        result: number
    }
}
export type ListType = Array<{ key: string, label: string }>

export type ResponseCurrenciesType = [
    CurrencyType,
    CurrencyType,
]

