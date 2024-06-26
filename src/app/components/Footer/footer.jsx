import styles from "./footer.scss"

const Footer = () => {
    return(
    <footer className="footer">
        <img 
        src="https://assets-global.website-files.com/64e0b797e5ca48456ffda312/64e53e34eab4da497a5a78e1_Groupe%201083.svg" 
        alt="Flamme et décoration" />
        <div>
        <p>Site original : <a href="https://www.winter-energies.fr/">Winter Energie</a></p>
        <p>Réinterpreté par : Pierre GAMEN</p>
        <p>Site réalisé avec le FrameWork Next.js et déployé avec Vercel</p>
        </div>
        <img 
        src="https://assets-global.website-files.com/64e0b797e5ca48456ffda312/64e53e34eab4da497a5a78e1_Groupe%201083.svg" 
        alt="Flamme et décoration" />
    </footer>)
}

export default Footer;