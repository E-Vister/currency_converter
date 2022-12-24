import CalcInputBox from "./CalcInputBox/CalcInputBox";
import scss from './CalculateBlock.module.scss'
import * as React from 'react';
import CalcMenu from "./CalcMenu/CalcMenu";

type Props = {
    type: string
}

const CalculateBlock: React.FC<Props> = (props) => {
    return (
        <div className={scss.container}>
            <div className={scss.title}>{props.type === 'have' ? 'I have' : 'I will get'}</div>
            <CalcMenu/>
            <CalcInputBox/>
        </div>
    );
}

export default CalculateBlock;