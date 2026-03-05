// =====================================
// Script del ejercicio 3 (React)
// =====================================

function App() {

  // 1. Estado: lista de elementos + texto del input
  const [texto, setTexto] = React.useState("");
  const [lista, setLista] = React.useState([]);

  // 2. Función pura: validar texto
  function validarTexto(t) {
    if (t.trim() === "") {
      alert("Escribe algo antes de agregar.");
      return false;
    }
    if (t.length > 50) {
      alert("El texto es demasiado largo (máx. 50 caracteres).");
      return false;
    }
    return true;
  }

  // 3. Agregar elemento
  function agregarElemento() {
    if (!validarTexto(texto)) return;

    setLista([...lista, texto]);
    setTexto("");
  }

  // 4. Eliminar un elemento concreto
  function eliminarElemento(index) {
    setLista(lista.filter((_, i) => i !== index));
  }

  // 5. Limpiar lista completa
  function limpiarLista() {
    if (lista.length === 0) return;

    if (confirm("¿Seguro que quieres borrar toda la lista?")) {
      setLista([]);
    }
  }

  // 6. Render del input, lista y botones
  return (
    <div>
      <input
        type="text"
        placeholder="Escribe algo..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && agregarElemento()}
      />

      <button onClick={agregarElemento}>Agregar</button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => eliminarElemento(index)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <button onClick={limpiarLista}>Borrar todo</button>
    </div>
  );
}

// 7. Componente en el DOM
ReactDOM.createRoot(document.getElementById("root")).render(<App />);