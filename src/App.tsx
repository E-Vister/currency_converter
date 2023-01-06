import './App.scss';
import * as React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {Layout, Spin} from 'antd';
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {initializeApp} from "./redux/app-reducer";

const App: React.FC = () => {
    const {initialized} = useTypedSelector(state => state.app);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        if (!initialized) {
            dispatch(initializeApp());
        }
    })

    if (!initialized) {
        return <Spin size="large" style={{position: 'absolute', top: '50%', left: 0, right: 0, margin: 'auto'}}/>
    }

    return (
        <Layout className="layout App">
            <Header/>
            <Content/>
            <Footer/>
        </Layout>
    );
}

export default App;
