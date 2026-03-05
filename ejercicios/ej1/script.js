// Script del ejercicio 1 //

// 1. Selección 
const btnColor = document.querySelector("#btnColor");

// 2. Función pura
function generarColorAleatorio() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// 3. DOM
function cambiarColorFondo() {
  const color = generarColorAleatorio();
  document.body.style.backgroundColor = color;
}

// 4. Evento
btnColor.addEventListener("click", cambiarColorFondo);