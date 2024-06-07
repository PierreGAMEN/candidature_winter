'use client';

import styles from "./presentation.scss"
import {useState} from "react"

const Presentation = () => {

    const [color, setColor] = useState({
        blue: true, 
        orange: false
    });

    const handleColor = (color) => {
        if(color === "blue") {
            setColor({ blue: true, orange: false });
        } else if (color === "orange") {
            setColor({ blue: false, orange: true });
        }
    };

    return (
        <section id="presentation" className="container_presentation">
            <img 
                onClick={() => handleColor("blue")}
                src="https://assets-global.website-files.com/64e0b797e5ca48456ffda312/64e53e32d075b07cb03662b4_Groupe%201073.svg" 
                alt="decoration" 
            />
            <h2>
                Développeur <span className={color.blue ? "blue" : color.orange ? "orange" : ""}>full-stack</span>, je me suis spécialisé dans la réalisation du front. Je travaille régulièrement sur <span className={color.blue ? "blue" : color.orange ? "orange" : ""}>React</span>.
            </h2>
            <img 
                onClick={() => handleColor("orange")}
                src="https://assets-global.website-files.com/64e0b797e5ca48456ffda312/64e53e329f50c8d9b6f65add_Groupe%201074.svg" 
                alt="decoration" 
            />
        </section>
    )
}

export default Presentation