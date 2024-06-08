/* eslint-disable react/no-unescaped-entities */
"use client";
import styles from "./contact.scss"
import {useState} from "react"
const Contact = () => {

        const [contactChoice, setContactChoice] = useState({
            discover: false,
            ignore: false
        })

        const handleChangeChoice = (choice) => {
            if (choice === "discover") {
                setContactChoice({
                    discover: true,
                    ignore: false
                });
            } else if (choice === "ignore") {
                setContactChoice({
                    discover: false,
                    ignore: true
                });
            }
        };


    return(
    <section id="contact" className="container_contact">
        <div className="left">
            <h2>Vous souhaitez que <span>l'on se rencontre</span> et ça c'est génial !</h2>
            {!contactChoice.discover && <><img 
            src="https://assets-global.website-files.com/64e0b797e5ca48456ffda312/64e53e33ed3f89d6f0e09454_Groupe%201082.svg" 
            alt="Homme qui pense à la planète et femme qui tient la planète dans ses bras" />
            <button onClick={() => handleChangeChoice("discover")}>Je souhaite en découvrir davantage</button></>}
            {contactChoice.discover && <>
                <p>Super ! J'ai hâte de vous rencontrer, voici mes coordonnées</p>
                <p>Email : pierre.gamen@gmail.com</p>
                <p>Tel : 0673607777</p>
            </>
            }
        </div>
        <div className="right">
            <h2>Vous préférez <span>ignorer</span> les 5 dernières minutes et ça c'est dommage</h2>
            {!contactChoice.ignore && <><img 
            src="https://assets-global.website-files.com/64e0b797e5ca48456ffda312/64e53e339f50c8d9b6f65d10_Groupe%201081.svg" 
            alt="Femme qui étudie des courbes et homme qui réfléchit sur un ordinateur" />
            <button onClick={() => handleChangeChoice("ignore")} >On passe à la candidature suivante</button></>}
            {contactChoice.ignore && <>
                <p>Ah ! L'application a remarqué que vous aviez fait un "miss click". Pas de problème, on réajuste le tir, voilà mes coordonnées pour me contacter</p>
                <p>Email : pierre.gamen@gmail.com</p>
                <p>Tel : 0673607777</p>
            </>
            }
        </div>

    </section>)
}

export default Contact;