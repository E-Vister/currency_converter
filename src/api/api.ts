import axios from 'axios';
import {CurrencyType, ResponseCurrenciesType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/',
    headers: {
        'Access-Control-Allow-Credentials': true,
    }
});

export const currenciesAPI = {
    getList() {
        return instance.get('currencies')
            .then((res) => {
                return res.data;
            });
    },
    convert(from: string, to: string, amount: number) {
        const firstCurrency = instance.post('convert', {from: from, to: to, amount})
            .then((res) => {
                return res.data;
            });
        const secondCurrency = instance.post('convert', {from: to, to: from, amount})
            .then((res) => {
                return res.data;
            });

        return Promise.all([firstCurrency, secondCurrency]).then((val) => {
            return val;
        });
    },
    getTable(source: string) {
        return instance.get(`table/${source}`)
            .then((res) => {
                return res.data;
            })
    }
}