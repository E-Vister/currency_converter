import {Route, Routes} from 'react-router-dom';
import Conventer from "./Conventer/Conventer";
import CurrenciesList from "./CurrenciesList/CurrenciesList";
import scss from './Content.module.scss'

const Content = (props) => {
    return (
        <div className={scss.container}>
            <Routes>
                <Route path={'/*'}
                       element={<Conventer/>}/>
                <Route path={'/conventer/*'}
                       element={<Conventer/>}/>
                <Route path={'/currency/*'}
                       element={<CurrenciesList/>}/>
            </Routes>
        </div>
    );
}

export default Content;