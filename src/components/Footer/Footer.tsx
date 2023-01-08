import * as React from "react";
import scss from './Footer.module.scss'
import {Layout} from 'antd';

const FooterLayout = Layout.Footer;

type Props = {}

const Footer: React.FC<Props> = (props) => {
    return (
        <FooterLayout style={{textAlign: 'center'}}>Currency Converter ©2022 Created by E-Vister</FooterLayout>
    )
}

export default Footer