"use client";
import { useState } from "react";
import planets from "../data/planets.json";
import Slider from "@/components/Slider";
import Tabs from "@/components/Tabs";
import styles from "../app/page.module.css";

export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <main className={styles.main}>
      <h1>Sistema Solar</h1>
      <Slider planets={planets} onPlanetClick={setSelectedPlanet} />
      {selectedPlanet && (
        <div className={styles.tabsContainer}>
          <h2>{selectedPlanet.nombre}</h2>
          <Tabs planet={selectedPlanet} />
        </div>
      )}
    </main>
  );
}
