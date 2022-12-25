import CalcInputBox from "./CalcInputBox/CalcInputBox";
import scss from './CalculateBlock.module.scss'
import * as React from 'react';
import CalcMenu from "./CalcMenu/CalcMenu";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

type Props = {
    type: string
}

const CalculateBlock: React.FC<Props> = (props) => {
    const {firstCurrency: fC, secondCurrency: sC} = useTypedSelector(state => state.currencies)

    return (
        <div className={scss.container}>
            <div className={scss.title}>{props.type === 'have' ? 'I have' : 'I will get'}</div>
            <CalcMenu currencyKey={props.type === 'have' ? fC.key : sC.key}/>
            <CalcInputBox type={props.type} firstCurrency={fC} secondCurrency={sC}/>
        </div>
    );
}

export default CalculateBlock;