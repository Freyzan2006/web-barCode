
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

    const pointControll = (index: number) => setIsScene(index);

    return (
        <div className = { css.content } style = { { width: w, height: h } }>
            <div className = { css.Carusel }>
                <button className = { css.next } onClick = { next }><FaArrowAltCircleLeft /></button>
                { Scene }
                <button className = { css.back } onClick = { backe }><FaArrowAltCircleRight /></button>
            </div>
            <div className = { css.positionScene }>
                {
                    listScene.map((_, index) => (
                        
                        <div onClick = { () => pointControll(index) } className = { isScene == index ? css.point : css.point__action } key = { index }></div>
                    ))
                }
            </div>
        </div>
    )
}

export default Carusel;