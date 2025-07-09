import { useState } from "react";

export default function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (usuario === "admin" && password === "1234") {
      onLogin();
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Usuario (admin)"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Contraseña (1234)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Iniciar Sesión</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}