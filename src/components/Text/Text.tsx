
import css from "./Text.module.css";

import Logo from "../../assets/logo.png";

interface IProps {
    style?: string;
    children: React.ReactNode;
}

const Text: React.FC<IProps> = ({ children, style }) => {
    return (
        <div className = { css.div }>
            <img src= { Logo } alt="Logo" width = { 25 } height = { 25 } />
            <p className = { css.div__text + " " + style }>
                { children }
            </p>
        </div>
    )
}

export default Text;