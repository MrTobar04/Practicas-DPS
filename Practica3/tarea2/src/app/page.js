"use client";
import { useState } from "react";
import salesData from "../data/sales.json";
import SalesChart from "@/components/SalesChart";
import YearSelector from "@/components/YearSelector";
import styles from "../app/page.module.css";

export default function Home() {
  // Obtén la lista única de años disponibles en el JSON
  const years = [...new Set(salesData.map((item) => item.year))].sort();
  const [year, setYear] = useState(years[0]);

  // Filtra los datos por año seleccionado
  const filteredData = salesData.filter((item) => item.year === year);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Ventas mensuales</h1>

      <YearSelector years={years} year={year} setYear={setYear} />

      <SalesChart data={filteredData} />
    </main>
  );
}
