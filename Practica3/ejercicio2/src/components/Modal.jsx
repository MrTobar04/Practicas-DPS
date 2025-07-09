import styles from "../app/page.module.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.modalClose} onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
