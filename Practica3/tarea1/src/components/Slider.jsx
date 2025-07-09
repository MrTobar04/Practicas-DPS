import PlanetCard from "./PlanetCard";
import styles from "../app/page.module.css";

const Slider = ({ planets, onPlanetClick }) => {
  return (
    <div className={styles.slider}>
      {planets.map((planet) => (
        <PlanetCard key={planet.id} planet={planet} onClick={onPlanetClick} />
      ))}
    </div>
  );
};

export default Slider;
