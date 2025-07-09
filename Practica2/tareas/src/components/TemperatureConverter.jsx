import { useState } from "react";

export default function TemperatureConverter() {
  const [temp, setTemp] = useState("");
  const [tipo, setTipo] = useState("CtoF");
  const [resultado, setResultado] = useState(null);

  const convertir = () => {
    const val = parseFloat(temp);
    if (isNaN(val)) {
      setResultado("Valor inválido");
      return;
    }

    if (tipo === "CtoF") {
      setResultado(`${(val * 9) / 5 + 32} °F`);
    } else {
      setResultado(`${((val - 32) * 5) / 9} °C`);
    }
  };

  return (
    <div>
      <h3>Conversor de Temperatura</h3>
      <input
        type="number"
        placeholder="Temperatura"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="CtoF">Celsius a Fahrenheit</option>
        <option value="FtoC">Fahrenheit a Celsius</option>
      </select>
      <button onClick={convertir}>Convertir</button>
      {resultado && <p>Resultado: {resultado}</p>}
    </div>
  );
}