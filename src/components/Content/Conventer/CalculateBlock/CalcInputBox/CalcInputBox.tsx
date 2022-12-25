import * as React from "react";
import scss from './CalcInputBox.module.scss'

type Props = {
    // !!!!!!!!!!!!!!!! made typeof !!!!!!!!!!!!!11
    type: string,
    firstCurrency: {
        key: string,
        amount: number,
        convert: {
            to: string,
            quote: number,
            result: number
        }
    },

    secondCurrency: {
        key: string,
        amount: number,
        convert: {
            to: string,
            quote: number,
            result: number
        }
    }
}

const CalcInputBox: React.FC<Props> = (props) => {
    const [fC, sC] = [props.firstCurrency, props.secondCurrency];

    return (
        <div className={scss.container}>
            <input type="text"
                   maxLength={10}
                   value={(props.type === 'have') ? fC.amount : fC.convert.result}/>
            <div className={scss.rate}>
                {(props.type === 'have')
                ? `1 ${fC.key} = ${fC.convert.quote} ${fC.convert.to}`
                : `1 ${sC.key} = ${sC.convert.quote} ${sC.convert.to}`}
            </div>
        </div>

    );
}

export default CalcInputBox;