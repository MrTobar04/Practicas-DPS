"use client";
import { useState } from "react";
import styles from "../app/page.module.css";
import languages from "../data/languages.json";
import LanguageCard from "@/components/LanguageCard";
import Modal from "@/components/Modal";

export default function Home() {
  const [selectedLang, setSelectedLang] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (language) => {
    setSelectedLang(language);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedLang(null);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Lenguajes de Programación</h1>
      <div className={styles.grid}>
        {languages.map((lang) => (
          <LanguageCard key={lang.id} language={lang} onOpenModal={handleOpenModal} />
        ))}
      </div>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <h2>{selectedLang.nombre}</h2>
          <p>{selectedLang.descripcion}</p>
        </Modal>
      )}
    </main>
  );
}
