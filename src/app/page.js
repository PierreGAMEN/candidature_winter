import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/Header/header.jsx";
import Hero from "./components/Hero/hero";
import Details from "./components/Details/Details"
import Presentation from "./components/Presentation/presentation";
import Promotion from "./components/Promotion/promotion";
import Step from "./components/Steps/steps";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

export default function Home() {
  return (
    <>
    <div className="container_header_hero">
      <Header />
      <Hero />
    </div>
    <main> 
    <Presentation />
    <Details />
    <Promotion />
    <Step />
    <Contact />
    </main>
    <Footer />
 
    </>
  );
}
