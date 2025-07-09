import { useState } from "react";
import Counter from "../components/Counter";
import TemperatureConverter from "../components/TemperatureConverter";

export default function Dashboard() {
  const [tab, setTab] = useState("contador");

  return (
    <div style={{ padding: 20 }}>
      <h2>Bienvenido 👋</h2>
      <div>
        <button onClick={() => setTab("contador")}>Contador</button>
        <button onClick={() => setTab("temperatura")}>Conversor</button>
      </div>
      <hr />
      {tab === "contador" && <Counter />}
      {tab === "temperatura" && <TemperatureConverter />}
    </div>
  );
}