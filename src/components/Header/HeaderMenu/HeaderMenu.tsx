import React, {useState} from "react";
import {Button, Dropdown, Menu, MenuProps, message} from "antd";
import {useNavigate} from "react-router-dom";

type Props = {}

const HeaderMenu: React.FC<Props> = (props) => {
    const [currentPage, setCurrentPage] = useState('converter');
    const [currentCurrency, setCurrentCurrency] = useState('USD');
    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        if (e.key !== 'default-currency') {
            navigate(e.key);
            setCurrentPage(e.key);
        }
    };
    const handleDropDownMenuClick: MenuProps['onClick'] = (e) => {
        setCurrentCurrency(e.key);
        message.info(`You chose ${e.key}.`);
    }

    const dropdownItems: MenuProps['items'] = [
        {
            label: 'United States Dollar',
            key: 'USD'
        },
        {
            label: 'Ukrainian Hryvnia',
            key: 'UAH'
        },
        {
            label: 'Belarusian Ruble',
            key: 'BYN'
        }
    ];

    const dropdownMenuProps = {
        items: dropdownItems,
        onClick: handleDropDownMenuClick,
    };

    const headerItems: MenuProps['items'] = [
        {
            label: (
                <Dropdown menu={dropdownMenuProps} placement="bottom">
                    <Button type="dashed" ghost>
                        <span style={{width: '27px'}}>{currentCurrency}</span>
                    </Button>
                </Dropdown>
            ),
            key: 'default-currency',
        },
        {
            label: 'Converter',
            key: 'converter',
        },
        {
            label: 'Currencies',
            key: 'currency',
        },
    ];

    return (
        <Menu theme="dark"
              onClick={onClick}
              selectedKeys={[currentPage]}
              mode="horizontal"
              style={{lineHeight: '64px'}}
              items={headerItems}/>
    )
}

export default HeaderMenu;