/* eslint-disable react/no-unescaped-entities */
"use client";

import styles from "./details.scss"
import SectionDetail from "./sectionDetail/SectionDetail"
import {useState, useEffect} from "react"

const Details = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Fonction pour mettre à jour l'état en fonction de la taille de la fenêtre
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 960); // Modifier la taille selon vos besoins
        };
    
        // Appeler handleResize une fois au montage pour initialiser l'état
        handleResize();
    
        // Ajouter l'événement de redimensionnement
        window.addEventListener("resize", handleResize);
    
        // Nettoyer l'événement de redimensionnement lors du démontage du composant
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return(
    <main className="container_details">
        <SectionDetail 
            title="Une pierre brut, ça vous tente"
            number="https://assets-global.website-files.com/64e0b797e5ca48456ffda312/64e53e29d075b07cb0365a13_Groupe%20803.svg"
            text="Après une formation fullstack, je suis à la recherche de la première entreprise qui me fera confiance. L'occasion pour vous de tailler dans le marbre votre vision du clean clode. Ma curiosité et ma soif d'apprentissage me permettront de m'intégrer rapidement à votre entreprise."
            image="https://assets-global.website-files.com/64e0b797e5ca48456ffda312/65081b2e9323df393eee66c4_illustration_mobiliser_autrement.svg"
            alt="Deux personnes se tapant dans la main"
        />
        <SectionDetail 
            title="Engagé pour l'avenir"
            number="https://assets-global.website-files.com/64e0b797e5ca48456ffda312/64e53e296577c822f0d2d9e2_Groupe%20804.svg"
            text="Affirmer que je milite activement dans une ONG pour la défense des animaux ne serait pas exact. Cependant, il est vrai que je suis toujours resté implicitement engagé pour la nature. Passionné par les sports de montagne depuis mon plus jeune âge, la montagne est mon terrain de jeu. J'ai appris à l'observer et à l'écoute je souhaite donc la voir préservée. Travailler dans une entreprise qui favorise la préservation de l'environnement est une vrai plus pour moi."
            image="https://assets-global.website-files.com/64e0b797e5ca48456ffda312/65081bc2d8ab2afe46cecabd_recommandation%20de%20solutions%20sans%20kwh.svg"
            right={isMobile ? "true" : "false"}
            alt="Maison avec energie renouvelable"
        />
       
        <SectionDetail 
            title="Mon expérience d'hier au service de celle d'aujourd'hui et de demain"
            number="https://assets-global.website-files.com/64e0b797e5ca48456ffda312/64e53e27a50073e657b564b8_Groupe%20487.svg"
            text="Avant de me lancer dans le développement web, j'ai travaillé pendant près de dix ans chez Decathlon,commençant en tant que vendeur, puis responsable de rayon sur une petite équipe, puis une grande équipe (20 personnes) pour terminer sur des postes de direction (responsable exploitation, responsable des services). Cette période m'a permis de développer des compétences en gestion d'équipe, en résolution de problèmes et en gestion de projet, qui peuvent être des atouts précieux pour un développeur web"
            image="https://assets-global.website-files.com/64e0b797e5ca48456ffda312/64e53e33d619ceba41c82f12_Groupe%201079.svg"
            alt="Homme avec plante dans la main"
        />
    </main>)
}

export default Details