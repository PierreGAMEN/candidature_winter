/* eslint-disable react/no-unescaped-entities */

import styles from "./hero.scss"
import Image from "next/image";

const Hero = () => {

   
    return (
        <section className="container_hero">
            <div className="hero">
                <Image 
                    src="https://assets-global.website-files.com/64e0b797e5ca48456ffda312/64e53e29bdb612633c37fd91_Groupe%20813.svg"
                    alt="Energie renouvelable"
                    height={100}
                    width={100}
                    className="hero_image"
                />
                <h1>Vous cherchez un candidat motivé, très motivé, ultra motivé.</h1>
                <p>Eh bien ne cherchez plus, vous l'avez trouvé !</p>
                <br/>
                <div className="hero_seemore">
                <a href="https://pierre-gamen.netlify.app/">En savoir plus</a>
                {/* <img className="material-symbols-rounded">arrow_circle_right</img> */}
                </div>
            </div>
                <Image 
                    src="https://assets-global.website-files.com/64e0b797e5ca48456ffda312/64e53e34455193ce3c85a539_Groupe%201131.svg"
                    alt="Energie renouvelable"
                    height={600}
                    width={600}
                    className="hero_image"
                />
        </section>
        
    )
}

export default Hero