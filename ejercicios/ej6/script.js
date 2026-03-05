// =====================================
// Script del ejercicio 6 (React)
// =====================================

function App() {

  // 1. Estado: segundos totales y referencia al intervalo
  const [segundos, setSegundos] = React.useState(0);
  const intervaloRef = React.useRef(null);

  // 2. Formatear tiempo
  function formatearTiempo(seg) {
    const h = String(Math.floor(seg / 3600)).padStart(2, "0");
    const m = String(Math.floor((seg % 3600) / 60)).padStart(2, "0");
    const s = String(seg % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  }

  // 3. Iniciar temporizador
  function iniciar() {
    if (intervaloRef.current) return; // evitar múltiples intervalos

    intervaloRef.current = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);
  }

  // 4. Pausar temporizador
  function pausar() {
    clearInterval(intervaloRef.current);
    intervaloRef.current = null;
  }

  // 5. Reiniciar temporizador
  function reiniciar() {
    clearInterval(intervaloRef.current);
    intervaloRef.current = null;
    setSegundos(0);
  }

  // 6. Render del temporizador y botones
  return (
    <div>
      <h2>{formatearTiempo(segundos)}</h2>

      <button onClick={iniciar}>Iniciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}

// 7. componente en DOM
ReactDOM.createRoot(document.getElementById("root")).render(<App />);