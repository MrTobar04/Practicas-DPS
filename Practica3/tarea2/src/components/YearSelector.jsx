"use client";
import styles from "../app/page.module.css";

const YearSelector = ({ years, year, setYear }) => (
  <div className={styles.selector}>
    <label htmlFor="year">Año: </label>
    <select
      id="year"
      value={year}
      onChange={(e) => setYear(parseInt(e.target.value, 10))}
    >
      {years.map((y) => (
        <option key={y} value={y}>
          {y}
        </option>
      ))}
    </select>
  </div>
);

export default YearSelector;
