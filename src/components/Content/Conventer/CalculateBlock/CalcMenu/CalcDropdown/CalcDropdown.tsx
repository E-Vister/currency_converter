import * as React from "react";
import {Button, Dropdown, MenuProps, message} from "antd";
import {useState} from "react";
import {useTypedSelector} from "../../../../../../hooks/useTypedSelector";

type Props = {}

const CalcDropdown: React.FC<Props> = (props) => {
    // !!!!!!!!!!!!!!! currentCurrency !!!!!!!!!!!!!
    const [currentCurrency, setCurrentCurrency] = useState('USD');
    const currencies = useTypedSelector(state => state.currencies.list);

    const handleDropDownMenuClick: MenuProps['onClick'] = (e) => {
        setCurrentCurrency(e.key);
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