import React, {useState} from "react";
import {Menu, MenuProps} from "antd";
import {useNavigate} from "react-router-dom";
import HeaderDropdown from "./HeaderDropdown/HeaderDropdown";

type Props = {}

const HeaderMenu: React.FC<Props> = (props) => {
    const [currentPage, setCurrentPage] = useState('converter');

    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        if (e.key !== 'default-currency') {
            navigate(e.key);
            setCurrentPage(e.key);
        }
    };

    const headerItems: MenuProps['items'] = [
        {
            label: (
                <HeaderDropdown/>
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