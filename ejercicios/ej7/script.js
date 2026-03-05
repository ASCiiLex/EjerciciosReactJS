// =====================================
// Script del ejercicio 7 (React)
// =====================================

function App() {

  // 1. Estado: longitud y resultado
  const [longitud, setLongitud] = React.useState("");
  const [resultado, setResultado] = React.useState("");

  // 2. Caracteres disponibles
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}";

  // 3. Generar contraseña (función pura)
  function generarPassword(n) {
    let pass = "";
    for (let i = 0; i < n; i++) {
      const index = Math.floor(Math.random() * caracteres.length);
      pass += caracteres[index];
    }
    return pass;
  }

  // 4. Generar con validaciones
  function generar() {
    const n = Number(longitud);

    if (!n) {
      setResultado("Error: introduce una longitud.");
      return;
    }

    if (n < 4) {
      setResultado("Error: la longitud mínima es 4.");
      return;
    }

    if (n > 50) {
      setResultado("Error: longitud demasiado grande (máx. 50).");
      return;
    }

    setResultado(generarPassword(n));
  }

  // 5. Render: input, botón y resultado
  return (
    <div>
      <input
        type="number"
        placeholder="Longitud de la contraseña"
        value={longitud}
        onChange={(e) => setLongitud(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && generar()}
      />

      <button onClick={generar}>Generar</button>

      <p>{resultado}</p>
    </div>
  );
}

// 6. componente en DOM
ReactDOM.createRoot(document.getElementById("root")).render(<App />);