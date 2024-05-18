
import React, { useState } from "react";
import css from "./Carusel.module.css";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";



interface IProps {
    w?: number;
    h?: number;
    listScene: React.ReactNode[];
}

const Carusel: React.FC<IProps> = ({ w, h, listScene }) => {
    
    
    let [ isScene, setIsScene ] = useState<number>(0);
    
    let Scene = listScene[isScene];

    const next = () => {
        if (isScene == listScene.length - 1) setIsScene(0)
        else setIsScene(++isScene);
    }

    const backe = () => {
        if (isScene == listScene.length - 1) setIsScene(0)
        else setIsScene(++isScene);
    }

    return (
        <div className = { css.Carusel } style = { { width: w, height: h } }>
            <button className = { css.next } onClick = { next }><FaArrowAltCircleLeft /></button>
            { Scene }
            <button className = { css.back } onClick = { backe }><FaArrowAltCircleRight /></button>
        </div>
    )
}

export default Carusel;