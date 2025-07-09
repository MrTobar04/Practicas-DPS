import styles from "../app/page.module.css";

const PlanetCard = ({ planet, onClick }) => {
  return (
    <div className={styles.planetCard} onClick={() => onClick(planet)}>
      <img src={planet.imagen} alt={planet.nombre} className={styles.planetImage} />
      <p>{planet.nombre}</p>
    </div>
  );
};

export default PlanetCard;
