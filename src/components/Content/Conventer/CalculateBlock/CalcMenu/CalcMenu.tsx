import * as React from "react";
import {useState} from "react";
import {Radio, RadioChangeEvent} from "antd";

type Props = {}

const CalcMenu: React.FC<Props> = (props) => {
    const options = [
        {label: 'USD', value: 'USD'},
        {label: 'BYN', value: 'BYN'},
        {label: 'UAH', value: 'UAH'},
    ];

    const [value, setValue] = useState('USD');
    const onChange = ({target: {value}}: RadioChangeEvent) => {
        console.log('radio1 checked', value);
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