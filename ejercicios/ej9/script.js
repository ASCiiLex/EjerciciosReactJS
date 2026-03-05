// =====================================
// Script del ejercicio 9 (React)
// =====================================

function App() {

  // 1. Estado inicial desde localStorage
  const [tareas, setTareas] = React.useState(() => {
    return JSON.parse(localStorage.getItem("tareas")) || [];
  });

  const [texto, setTexto] = React.useState("");

  // 2. Guardar en localStorage
  React.useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // 3. Añadir tarea con validaciones
  function agregarTarea() {
    const t = texto.trim();

    if (t === "") {
      alert("La tarea no puede estar vacía.");
      return;
    }

    if (t.length > 60) {
      alert("La tarea es demasiado larga (máx. 60 caracteres).");
      return;
    }

    if (tareas.some((x) => x.texto === t)) {
      alert("Esa tarea ya existe.");
      return;
    }

    const nueva = { texto: t, completada: false };
    setTareas([...tareas, nueva]);
    setTexto("");
  }

  // 4. Marcar tarea como completada
  function toggleCompletada(index) {
    const nuevas = tareas.map((t, i) =>
      i === index ? { ...t, completada: !t.completada } : t
    );
    setTareas(nuevas);
  }

  // 5. Limpiar tareas completadas
  function limpiarCompletadas() {
    setTareas(tareas.filter((t) => !t.completada));
  }

  // 6. Render: input, botones y lista
  return (
    <div>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && agregarTarea()}
      />

      <button onClick={agregarTarea}>Agregar</button>
      <button onClick={limpiarCompletadas}>Limpiar completadas</button>

      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => toggleCompletada(index)}
            />
            <span
              style={{
                textDecoration: tarea.completada ? "line-through" : "none",
              }}
            >
              {tarea.texto}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 7. Componente en DOM
ReactDOM.createRoot(document.getElementById("root")).render(<App />);