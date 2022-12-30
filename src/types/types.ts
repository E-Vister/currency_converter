export type CurrencyType = {
    key: string,
    amount: number,
    convert: {
        to: string,
        quote: number,
        result: number
    }
}

