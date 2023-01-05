import * as React from "react";
import {Button, Dropdown, MenuProps, message} from "antd";
import {useState} from "react";
import {useTypedSelector} from "../../../../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {convert} from "../../../../../../redux/currencies-reducer";

type Props = {
    type: string
}

const CalcDropdown: React.FC<Props> = (props) => {
    const [currentCurrency, setCurrentCurrency] = useState('USD');
    const currencies = useTypedSelector(state => state.currencies.list);
    const {firstCurrency, secondCurrency} = useTypedSelector(state => state.currencies)
    const dispatch = useDispatch<any>();

    const handleDropDownMenuClick: MenuProps['onClick'] = (e) => {
        setCurrentCurrency(e.key);
        if (props.type === 'have') {
            dispatch(convert(e.key, secondCurrency.key, firstCurrency.amount, props.type));
        } else {
            dispatch(convert(e.key, firstCurrency.key, secondCurrency.amount, props.type));
        }
        message.info(`You chose ${e.key}.`);
    }


    const dropdownItems: MenuProps['items'] = currencies;

    const dropdownMenuProps = {
        items: dropdownItems,
        selectable: true,
        arrow: true,
        onClick: handleDropDownMenuClick
    };

    return (
        <Dropdown menu={dropdownMenuProps} placement="bottom" >
                <span style={{display: 'block'}}>{'▼'}</span>
        </Dropdown>
    )
}

export default CalcDropdown;