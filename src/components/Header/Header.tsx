import scss from './Header.module.scss';
import * as React from "react";
import {Layout} from 'antd';
import HeaderMenu from "./HeaderMenu/HeaderMenu";

const HeaderLayout = Layout.Header;

type Props = {}

const Header: React.FC<Props> = (props) => {
    return (
        <HeaderLayout className={scss.header} style={{position: 'fixed', zIndex: 1, width: '100%'}}>
            <div className={scss.logo}/>
            <HeaderMenu/>
        </HeaderLayout>
    );
}

export default Header;