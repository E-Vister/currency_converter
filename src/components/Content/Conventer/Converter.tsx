import * as React from "react";
import CalculateBlock from "./CalculateBlock/CalculateBlock";
import scss from './Converter.module.scss'

type Props = {}

const Converter: React.FC<Props> = (props) => {
    return (
        <div className={scss.container}>
            <CalculateBlock type={'have'}/>
            <div className={scss.center}><div className={scss.reverse}/></div>
            <CalculateBlock type={'get'}/>
        </div>

    );
}

export default Converter;