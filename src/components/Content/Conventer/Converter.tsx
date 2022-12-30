import * as React from "react";
import CalculateBlock from "./CalculateBlock/CalculateBlock";
import scss from './Converter.module.scss'
import {useDispatch} from "react-redux";
import {actions} from "../../../redux/currencies-reducer";

type Props = {}

const Converter: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const {swapCurrencies} = actions;

    return (
        <div className={scss.container}>
            <CalculateBlock type={'have'}/>
            <div className={scss.center}>
                <div className={scss.reverse} onClick={() => (dispatch(swapCurrencies()))}/>
            </div>
            <CalculateBlock type={'get'}/>
        </div>

    );
}

export default Converter;