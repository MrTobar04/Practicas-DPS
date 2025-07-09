"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const toFloat = (val) => parseFloat(val) || 0;

  const sumar = () => {
    const resultadoSuma = toFloat(numero1) + toFloat(numero2);
    setResultado(`Resultado de la suma: ${resultadoSuma}`);
  };

  const restar = () => {
    const resultadoResta = toFloat(numero1) - toFloat(numero2);
    setResultado(`Resultado de la resta: ${resultadoResta}`);
  };

  const multiplicar = () => {
    const resultadoMult = toFloat(numero1) * toFloat(numero2);
    setResultado(`Resultado de la multiplicación: ${resultadoMult}`);
  };

  const dividir = () => {
    const divisor = toFloat(numero2);
    if (divisor === 0) {
      setResultado("Error: No se puede dividir por cero");
    } else {
      const resultadoDiv = toFloat(numero1) / divisor;
      setResultado(`Resultado de la división: ${resultadoDiv}`);
    }
  };

  const potenciar = () => {
    const resultadoPot = Math.pow(toFloat(numero1), toFloat(numero2));
    setResultado(`Resultado de la potenciación: ${resultadoPot}`);
  };

  const raizCuadrada = () => {
    const raiz1 = Math.sqrt(toFloat(numero1));
    const raiz2 = Math.sqrt(toFloat(numero2));
    setResultado(
      `Raíz cuadrada de Número 1: ${raiz1} | Raíz cuadrada de Número 2: ${raiz2}`
    );
  };

  return (
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 1:</label>
          <input
            className={styles.inputnum}
            type="number"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
          />
        </div>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 2:</label>
          <input
            className={styles.inputnum}
            type="number"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />
        </div>
        <div>
          <button className={styles.button} onClick={sumar}>Sumar</button>
          <button className={styles.button} onClick={restar}>Restar</button>
          <button className={styles.button} onClick={multiplicar}>Multiplicar</button>
          <button className={styles.button} onClick={dividir}>Dividir</button>
          <button className={styles.button} onClick={potenciar}>Potenciación</button>
          <button className={styles.button} onClick={raizCuadrada}>Raíz Cuadrada</button>
        </div>
        {resultado && <div className={styles.resultado}>{resultado}</div>}
      </div>
    </main>
  );
}
