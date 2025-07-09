import { useState } from "react";
import styles from "../app/page.module.css";

const Tabs = ({ planet }) => {
  const [activeTab, setActiveTab] = useState("masa");

  const renderContent = () => {
    switch (activeTab) {
      case "masa":
        return <p>{planet.masa}</p>;
      case "distancia":
        return <p>{planet.distancia}</p>;
      case "temperatura":
        return <p>{planet.temperatura}</p>;
      default:
        return null;
    }
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.tabButtons}>
        <button onClick={() => setActiveTab("masa")} className={activeTab === "masa" ? styles.active : ""}>Masa</button>
        <button onClick={() => setActiveTab("distancia")} className={activeTab === "distancia" ? styles.active : ""}>Distancia al Sol</button>
        <button onClick={() => setActiveTab("temperatura")} className={activeTab === "temperatura" ? styles.active : ""}>Temperatura</button>
      </div>
      <div className={styles.tabContent}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Tabs;
