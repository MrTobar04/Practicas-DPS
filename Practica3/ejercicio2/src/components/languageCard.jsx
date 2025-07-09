import styles from "../app/page.module.css";

const LanguageCard = ({ language, onOpenModal }) => {
  return (
    <div className={styles.card}>
      <img src={language.imagen} alt={language.nombre} className={styles.image} />
      <h3>{language.nombre}</h3>
      <button onClick={() => onOpenModal(language)} className={styles.button}>
        Ver más
      </button>
    </div>
  );
};

export default LanguageCard;
