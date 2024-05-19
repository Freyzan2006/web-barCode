import JsBarcode from "jsbarcode";
import { useEffect, useRef } from "react";

import css from "./BarCode.module.css";
import Button from "../Button/Button";

interface IProps {
    isDisabledBtn: boolean;
    inputState: string
}

const BarCode: React.FC<IProps> = ( { isDisabledBtn, inputState } ) => {
    const barCodeRef = useRef<HTMLImageElement>(null);
     

    useEffect(() => {
        barCodeRef.current?.focus();
    }, []);

    const createBarcode = (value: string) => JsBarcode(barCodeRef?.current, value);

    return (
        <div className = { css.barCode }>
            <h2 className =  { css.barCode__title }>Штрих-код</h2>
            <img id = "barcode" ref = { barCodeRef } />
            <Button callback = { createBarcode } lable = "Сгенерировать Штрих-код" isDisabledBtn = { isDisabledBtn } inputState = { inputState } /> 
        </div>
        
    )
}

export default BarCode;