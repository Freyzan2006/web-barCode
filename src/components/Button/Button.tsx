
import css from "./Button.module.css";

interface IProps {
    lable: string;
    isDisabledBtn: boolean;
    inputState: string;

    callback: (inputState: string) => void
}

const Button: React.FC<IProps> = ({ lable ,isDisabledBtn, inputState, callback }) => {
    return (
        <button className = { css.button } disabled = { isDisabledBtn } onClick = { () => callback(inputState) }>{ lable }</button>
    )
}

export default Button;