import * as React from "react";
import {useEffect, useState} from "react";
import {Radio, RadioChangeEvent} from "antd";
import CalcDropdown from "./CalcDropdown/CalcDropdown";
import {useDispatch} from "react-redux";
import {convert} from "../../../../../redux/currencies-reducer";
import {useTypedSelector} from "../../../../../hooks/useTypedSelector";

type Props = {
    currencyKey: string,
    type: string
}

const CalcMenu: React.FC<Props> = (props) => {
    const [value, setValue] = useState(props.currencyKey);
    const {firstCurrency, secondCurrency} = useTypedSelector(state => state.currencies)
    const dispatch = useDispatch<any>();

    useEffect(() => {
        setValue(props.currencyKey);
    }, [props.currencyKey]);

    const defaultOptions = [
        {label: 'USD', value: 'USD'},
        {label: 'EUR', value: 'EUR'},
        {label: 'BYN', value: 'BYN'},
    ];

    const options = defaultOptions.find(i => i.value === props.currencyKey)
        ? [...defaultOptions, {label: 'UAH', value: 'UAH'}, {label: <CalcDropdown type={props.type}/>, value: 'menu'}]
        : [...defaultOptions, {label: props.currencyKey, value: props.currencyKey}, {
            label: <CalcDropdown type={props.type}/>,
            value: 'menu'
        }];
    const onChange = ({target: {value}}: RadioChangeEvent) => {
        if (props.type === 'have') {
            dispatch(convert(value, secondCurrency.key, firstCurrency.amount, props.type));
        } else {
            dispatch(convert(value, firstCurrency.key, secondCurrency.amount, props.type));
        }
        setValue(value);
    };

    return (
        <Radio.Group options={options}
                     onChange={onChange}
                     value={value}
                     size="large"
                     optionType="button"
                     buttonStyle="solid"/>
    );
}

export default CalcMenu;