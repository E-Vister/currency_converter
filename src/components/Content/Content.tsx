// @ts-ignore
import {Route, Routes} from 'react-router-dom';
import Conventer from "./Conventer/Conventer";
import CurrenciesList from "./CurrenciesList/CurrenciesList";
import scss from './Content.module.scss'
import * as React from "react";
import {Layout, theme} from 'antd';

const ContentLayout = Layout.Content;

type Props = {

}

const Content: React.FC<Props> = (props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <ContentLayout style={{ padding: '0 50px', marginTop: 79}}>
            <div className="site-layout-content" style={{ background: colorBgContainer, height: '75vh'}}>
                <Routes>
                    <Route path={'/*'}
                           element={<Conventer/>}/>
                    <Route path={'/conventer/*'}
                           element={<Conventer/>}/>
                    <Route path={'/currency/*'}
                           element={<CurrenciesList/>}/>
                </Routes>
            </div>
        </ContentLayout>
    );
}

export default Content;