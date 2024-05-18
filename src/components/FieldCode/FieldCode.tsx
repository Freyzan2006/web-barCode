

import css from "./FieldCode.module.css";

interface IProps {
    changeInput: (text: string) => void;
    placeholder: string;
    type?: string;
}


const FieldCode: React.FC<IProps> = ({ placeholder, type, changeInput }) => {
    return (
        <input className = { css.FieldCode } placeholder = { placeholder } type={ type } onChange = { (e) => changeInput(e.target.value) } />
    )
}

export default FieldCode;