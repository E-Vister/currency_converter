import * as React from "react";
import {useEffect, useState} from "react";
import {Radio, RadioChangeEvent} from "antd";
import CalcDropdown from "./CalcDropdown/CalcDropdown";

type Props = {
    currencyKey: string
}

const CalcMenu: React.FC<Props> = (props) => {
    const [value, setValue] = useState(props.currencyKey);

    useEffect(() => {
        setValue(props.currencyKey);
    }, [props.currencyKey]);

    const defaultOptions = [
        {label: 'USD', value: 'USD'},
        {label: 'EUR', value: 'EUR'},
        {label: 'BYN', value: 'BYN'},
    ];

    const options = defaultOptions.find(i => i.value === props.currencyKey)
        ? [...defaultOptions, {label: 'UAH', value: 'UAH'}, {label: <CalcDropdown/>, value: 'menu'}]
        : [...defaultOptions, {label: props.currencyKey, value: props.currencyKey}, {label: <CalcDropdown/>, value: 'menu'}];
    const onChange = ({target: {value}}: RadioChangeEvent) => {
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