import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/Header/header.jsx";
import Hero from "./components/Hero/hero";
import Presentation from "./components/Presentation/presentation";

export default function Home() {
  return (
    <>
    <div className="container_header_hero">
      <Header />
      <Hero />
    </div>
    <Presentation />
 
    <main>

    </main>
    </>
  );
}
