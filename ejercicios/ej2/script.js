// Script del ejercicio 2

// 1. Selección
const btnContar = document.querySelector("#btnContar");
const btnReset = document.querySelector("#btnReset");
const texto = document.querySelector("#contadorTexto");

// 2. Estado
let contador = 0;

// 3. Función
function actualizarTexto() {
  texto.textContent = `Clics: ${contador}`;
}

// 4. Eventos
btnContar.addEventListener("click", () => {
  contador++;
  actualizarTexto();
});

btnReset.addEventListener("click", () => {
  contador = 0;
  actualizarTexto();
});

// 5. Inicialización
actualizarTexto();