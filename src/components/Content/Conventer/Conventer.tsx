import * as React from "react";
import CalculateBlock from "./CalculateBlock/CalculateBlock";

type Props = {}

const Conventer: React.FC<Props> = (props) => {
    return (
        <div>
            <CalculateBlock/>
            ReverseButton
            <CalculateBlock/>
        </div>

    );
}

export default Conventer;