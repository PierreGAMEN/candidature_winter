/* eslint-disable react/no-unescaped-entities */
import styles from "./promotion.scss"

const Promotion = () => {

    return (
        <section className="container_promotion">
            <div className="container_promotion_text">
                <h2>C'est l'instant promo</h2>
                <p>Connectez-vous sur mon site et découvrez en un peu plus sur mon parcours, ma personnalité, mes projets...</p>
                <button><a href="https://pierre-gamen.netlify.app/">Découvrir l'application</a></button>
            </div>
            <div>
            <img src="https://pierre-gamen.netlify.app/photoPg.png" alt="" />
            </div>
 
        </section>
    )
}

export default Promotion;