import axios from 'axios';

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
    }
}