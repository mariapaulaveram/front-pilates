import { useState } from "react";
import styles from "../styles/Home.module.css";
import HomeCarousel from '../componentes/HomeCarousel';
import Clases from "../componentes/Clases";

const Home = () => {
  
  return (
    <main id="home">
      {/* Hero Section */}
       {/* <HomeCarousel />*/}
      <div id="pilates-home" className={styles.home}>
      <section className={styles.hero}>
        <HomeCarousel />
        <h1>Bienvenidos a Pilates Studio</h1>
        <p>Consultá los horarios disponibles. Para reservar, iniciá sesión.</p>
      </section>

      {/* Presentación */}
      <section className={styles.presentacion}>
        <Clases />
       
      </section>

      </div>
    </main>
  );
};

export default Home;
