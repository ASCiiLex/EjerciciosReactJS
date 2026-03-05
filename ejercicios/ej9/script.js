// Script del ejercicio 9

// 1. Selección de elementos
const input = document.querySelector("#tareaInput");
const btnAgregar = document.querySelector("#agregar");
const btnLimpiar = document.querySelector("#limpiar");
const lista = document.querySelector("#listaTareas");

// 2. Estado inicial
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

// 3. Guardar en localStorage
function guardar() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// 4. Crear elemento DOM
function crearElemento(tarea) {

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = tarea.completada;

  const texto = document.createElement("span");
  texto.textContent = tarea.texto;

  if (tarea.completada) {
    texto.style.textDecoration = "line-through";
  }

  checkbox.addEventListener("change", () => {

    tarea.completada = checkbox.checked;

    texto.style.textDecoration = checkbox.checked
      ? "line-through"
      : "none";

    guardar();

  });

  li.appendChild(checkbox);
  li.appendChild(texto);

  return li;
}

// 5. Renderizar lista
function render() {

  lista.innerHTML = "";

  tareas.forEach(tarea => {
    lista.appendChild(crearElemento(tarea));
  });

}

// 6. Añadir tarea
function agregarTarea() {

  const texto = input.value.trim();

  if (texto === "") {
    alert("La tarea no puede estar vacía.");
    return;
  }

  if (texto.length > 60) {
    alert("La tarea es demasiado larga (máx. 60 caracteres).");
    return;
  }

  if (tareas.some(t => t.texto === texto)) {
    alert("Esa tarea ya existe.");
    return;
  }

  const nueva = {
    texto,
    completada: false
  };

  tareas.push(nueva);

  guardar();
  render();

  input.value = "";
  input.focus();

}

// 7. Limpiar tareas completadas
function limpiarCompletadas() {

  tareas = tareas.filter(t => !t.completada);

  guardar();
  render();

}

// 8. Eventos
btnAgregar.addEventListener("click", agregarTarea);

btnLimpiar.addEventListener("click", limpiarCompletadas);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    agregarTarea();
  }
});

// 9. Inicialización
render();