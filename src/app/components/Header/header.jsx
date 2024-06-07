'use client';
import styles from "./header.scss"
import Image from "next/image";
import {useState, useEffect} from "react"

const Header = () => {

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

      const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

   
    return (
        <div className="container_header">
    <header>
        <Image 
            src="https://assets-global.website-files.com/64e0b797e5ca48456ffda312/64e53e31ae1bb84723005843_Groupe%201007.svg"
            alt="Logo de Winter"
            height={30}
            width={30}
            className="header_image"
        />
        {!isMobile && (
            <nav>
            <a href="#presentation" className="header_link">Une pierre brut</a>
            <a href="#step" className="header_link">Pas à pas</a> 
            <a href="#contact" className="header_link">Faites un test</a>  
            </nav>
        )}
        {isMobile && (
            <div className="burger_menu_container">
            <div className="burger_menu_icon" onClick={toggleMenu}>
                <div className={`line ${isOpen ? "open" : ""}`}></div>
                <div className={`line ${isOpen ? "open" : ""}`}></div>
                <div className={`line ${isOpen ? "open" : ""}`}></div>
            </div>
            {isOpen && (
                <nav className="menu">
                    <a onClick={toggleMenu} href="#presentation" className="header_link">Une pierre brut</a>
                    <a onClick={toggleMenu} href="#step" className="header_link">Pas à pas</a> 
                    <a onClick={toggleMenu} href="#contact" className="header_link">Faites un test</a>  
                </nav>
            )}
            </div>
        )}
    </header>
    </div>
        
    )
}

export default Header