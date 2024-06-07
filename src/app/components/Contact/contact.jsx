/* eslint-disable react/no-unescaped-entities */

import styles from "./contact.scss"
const Contact = () => {
    return(
    <section id="contact" className="container_contact">
        <div className="left">
            <h2>Vous souhaitez que <span>l'on se rencontre</span> et ça c'est génial !</h2>
            <img 
            src="https://assets-global.website-files.com/64e0b797e5ca48456ffda312/64e53e33ed3f89d6f0e09454_Groupe%201082.svg" 
            alt="Homme qui pense à la planète et femme qui tient la planète dans ses bras" />
            <button>Je souhaite en découvrir davantage</button>
        </div>
        <div className="right">
            <h2>Vous préférez <span>ignorer</span> les 5 dernières minutes et ça c'est dommage</h2>
            <img 
            src="https://assets-global.website-files.com/64e0b797e5ca48456ffda312/64e53e339f50c8d9b6f65d10_Groupe%201081.svg" 
            alt="Femme qui étudie des courbes et homme qui réfléchit sur un ordinateur" />
            <button>On passe a la candidature suivante</button>

        </div>

    </section>)
}

export default Contact;