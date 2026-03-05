// Script del ejercicio 4

// 1. Selección
const input = document.querySelector("#filtroInput");
const elementos = document.querySelectorAll("#listaAnimales li");

// 2. Filtrar elementos
function filtrar() {

  const texto = input.value.toLowerCase();

  elementos.forEach(li => {

    const contenido = li.textContent.toLowerCase();

    li.style.display = contenido.includes(texto) ? "" : "none";

  });

}

// 3. Evento
input.addEventListener("input", filtrar);

input.addEventListener("keydown", (e) => {

  if (e.key === "Escape") {
    input.value = "";
    filtrar();
  }

});