import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./views/Dashboard";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {!isAuthenticated ? (
        <Login onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <Dashboard />
      )}
    </>
  );
}