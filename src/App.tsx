import './App.scss';
import * as React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {Layout} from 'antd';

const App: React.FC = () => {
    return (
        <Layout className="layout App">
            <Header/>
            <Content/>
            <Footer/>
        </Layout>
    );
}

export default App;
