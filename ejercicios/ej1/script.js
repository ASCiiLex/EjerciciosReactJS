// ===============================
// Script del ejercicio 1 (React)
// ===============================

function App() {

  // 1. Función pura
  function generarColorAleatorio() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  // 2. Manipulación del DOM (cambiar color)
  function cambiarColorFondo() {
    const color = generarColorAleatorio();
    document.body.style.backgroundColor = color;
  }

  // 3. Botón
  return (
    <button onClick={cambiarColorFondo}>
      Cambiar color
    </button>
  );
}

// 4. Componente en DOM
ReactDOM.createRoot(document.getElementById("root")).render(<App />);