import { useRef } from "react";
import QrCodelib from "qrcode";
import Button from "../Button/Button";

import css from "./QrCode.module.css";

interface IProps {
    isDisabledBtn: boolean
    inputState: string
}

const QrCode: React.FC<IProps> = ({ isDisabledBtn, inputState }) => {

    const qrCodeRef = useRef<HTMLCanvasElement>(null);


    const createQrCode = (value: string) => QrCodelib.toCanvas(qrCodeRef?.current, value);

    return (
        <div className = { css.QrCode }>
            <h2 className = { css.QrCode__title }>Qr-код</h2>
            <canvas width = { 0 } height = { 0 } id = "qrcode" ref = { qrCodeRef }></canvas>
            <Button callback = { createQrCode } lable = "Сгенерировать QR код" isDisabledBtn = { isDisabledBtn } inputState = { inputState } /> 
        </div>
    )
}

export default QrCode;