import * as React from "react";
import CalcInputBox from "./CalcInputBox/CalcInputBox";

type Props = {}

const CalculateBlock: React.FC<Props> = (props) => {
    return (
        <div>
            Title
            Menu
            <CalcInputBox/>
        </div>
    );
}

export default CalculateBlock;