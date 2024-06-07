/* eslint-disable react/no-unescaped-entities */
import styles from "./steps.scss"
const Step = () => {
    return (
        <section id="step" className="container_step">
            <div className="container_step_title">
                <img src="https://assets-global.website-files.com/64e0b797e5ca48456ffda312/64e53e33ec4bbe1f75ccdfd2_Groupe%201080.svg" alt="eclair et flamme" />
                <h2>Un parcours pas à pas</h2>
<p>Après six mois de formation intensive et la réalisation de nombreux projets personnels, je me sens prêt techniquement. 
    <bold>Prêt à sauter à pied joint dans le grand bain !</bold></p>
<p>Durant cette période, j'ai consolidé mes compétences en HTML, CSS et JavaScript. 
    J'ai également exploré l'environnement back-end, notamment en utilisant Node, Express et PostgreSQL dans divers projets. 
    Cependant, ma véritable passion réside dans le développement front-end, où j'aime créer et donner vie aux éléments visuels.</p>
<p>Dans le cadre de ma spécialisation front-end, j'ai approfondi mes connaissances en <bold>React, Redux et Vite</bold>. 
Je suis convaincu que pour être un excellent développeur front-end, il est essentiel de comprendre également la partie back-end d'une application.</p>
            
            </div>
            
            <div className="container_footprint">
                <img className="footprint fp1" src="/footprint.png" />
                <img className="footprint fp2" src="/footprint.png" />
                <img className="footprint fp3" src="/footprint.png" />
                <img className="footprint fp4" src="/footprint.png" />
                <img className="footprint fp5" src="/footprint.png" />
                <img className="footprint fp6" src="/footprint.png" />
                <img className="footprint fp7" src="/footprint.png" />
                <img className="footprint fp8" src="/footprint.png" />
            </div>
        </section>
    )
}
export default Step;