import * as React from "react";
import scss from './CalcInputBox.module.scss'

type Props = {}

const CalcInputBox: React.FC<Props> = (props) => {
    return (
        <div className={scss.container}>
            <input type="text" maxLength={10}/>
            <div className={scss.rate}>1 USD = 2.6256 BYN</div>
        </div>

    );
}

export default CalcInputBox;