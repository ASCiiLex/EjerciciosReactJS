// Script del ejercicio 3

// 1. Selección
const input = document.querySelector("#textoInput");
const btnAgregar = document.querySelector("#btnAgregar");
const btnReset = document.querySelector("#btnReset");
const lista = document.querySelector("#lista");

// 2. Crear elemento de lista
function crearElemento(texto) {

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";

  btnEliminar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(btnEliminar);

  return li;
}

// 3. Agregar elemento
function agregarElemento() {

  const texto = input.value.trim();

  if (texto === "") {
    alert("Escribe algo antes de agregar.");
    return;
  }

  if (texto.length > 50) {
    alert("El texto es demasiado largo (máx. 50 caracteres).");
    return;
  }

  lista.appendChild(crearElemento(texto));

  input.value = "";
  input.focus();
}

// 4. Limpiar lista completa
function limpiarLista() {

  if (lista.children.length === 0) return;

  if (confirm("¿Seguro que quieres borrar toda la lista?")) {
    lista.innerHTML = "";
  }
}

// 5. Eventos
btnAgregar.addEventListener("click", agregarElemento);

btnReset.addEventListener("click", limpiarLista);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    agregarElemento();
  }
});