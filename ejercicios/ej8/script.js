// =====================================
// Script del ejercicio 8 (React)
// =====================================

function App() {

  // 1. Estado: texto del textarea
  const [texto, setTexto] = React.useState("");

  // 2. Cálculo de caracteres (sin espacios ni saltos)
  const numCaracteres = texto.replace(/\s/g, "").length;

  // 3. Cálculo de palabras
  const textoTrim = texto.trim();
  const numPalabras = textoTrim === "" ? 0 : textoTrim.split(/\s+/).length;

  // 4. Render: textarea + contadores
  return (
    <div>
      <textarea
        rows="6"
        placeholder="Escribe tu texto aquí..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      ></textarea>

      <p>Palabras: {numPalabras}</p>
      <p>Caracteres: {numCaracteres}</p>
    </div>
  );
}

// 5. componente en DOM
ReactDOM.createRoot(document.getElementById("root")).render(<App />);