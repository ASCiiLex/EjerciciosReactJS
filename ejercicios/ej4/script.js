// =====================================
// Script del ejercicio 4 (React)
// =====================================

function App() {

  // 1. Estado: texto del filtro
  const [filtro, setFiltro] = React.useState("");

  // 2. Lista predefinida
  const animales = ["Perro", "Gato", "Pez", "Tortuga", "Hamster"];

  // 3. Función pura
  const animalesFiltrados = animales.filter(animal =>
    animal.toLowerCase().includes(filtro.toLowerCase())
  );

  // 4. Manejo de tecla Escape
  function manejarTeclas(e) {
    if (e.key === "Escape") {
      setFiltro("");
    }
  }

  // 5. Render input + lista filtrada
  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        onKeyDown={manejarTeclas}
      />

      <ul>
        {animalesFiltrados.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
}

// 6. Componente en el DOM
ReactDOM.createRoot(document.getElementById("root")).render(<App />);