import * as React from "react";
import {Button, Dropdown, Layout, MenuProps, message} from 'antd';
import {useState} from "react";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

const FooterLayout = Layout.Footer;

type Props = {}

const HeaderDropdown: React.FC<Props> = (props) => {
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
        onClick: handleDropDownMenuClick,
    };

    return (
        <Dropdown menu={dropdownMenuProps} placement="bottom">
            <Button type="dashed" ghost>
                <span style={{width: '27px'}}>{currentCurrency}</span>
            </Button>
        </Dropdown>
    )
}

export default HeaderDropdown;