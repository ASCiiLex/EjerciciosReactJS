// =====================================
// Script del ejercicio 2 (React)
// =====================================

function App() {

  // 1. Estado 
  const [contador, setContador] = React.useState(0);

  // 2. Función para actualizar texto
  function incrementar() {
    setContador(contador + 1);
  }

  function resetear() {
    setContador(0);
  }

  // 3. Texto + botones con eventos
  return (
    <div>
      <p>Clics: {contador}</p>

      <button onClick={incrementar}>Contar clics</button>
      <button onClick={resetear}>Reset</button>
    </div>
  );
}

// 4. Componente en DOM
ReactDOM.createRoot(document.getElementById("root")).render(<App />);