import styles from "./page.module.css";
import Form from "@/components/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <div>
          <p>Gestión de Lista de Compras</p>
          <Form />
        </div>
      </div>
    </main>
  );
}
