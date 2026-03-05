// Script del ejercicio 6

// 1. Selección
const pantalla = document.querySelector("#pantalla");
const btnInicio = document.querySelector("#inicio");
const btnPausa = document.querySelector("#pausa");
const btnReiniciar = document.querySelector("#reiniciar");

// 2. Estado
let segundos = 0;
let intervalo = null;

// 3. Formatear tiempo
function formatearTiempo(seg) {
  const h = String(Math.floor(seg / 3600)).padStart(2, "0");
  const m = String(Math.floor((seg % 3600) / 60)).padStart(2, "0");
  const s = String(seg % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

// 4. Actualizar pantalla
function actualizarPantalla() {
  pantalla.textContent = formatearTiempo(segundos);
}

// 5. Iniciar
btnInicio.addEventListener("click", () => {

  if (intervalo) return;

  intervalo = setInterval(() => {
    segundos++;
    actualizarPantalla();
  }, 1000);

});

// 6. Pausar
btnPausa.addEventListener("click", () => {

  clearInterval(intervalo);
  intervalo = null;

});

// 7. Reiniciar
btnReiniciar.addEventListener("click", () => {

  clearInterval(intervalo);
  intervalo = null;

  segundos = 0;
  actualizarPantalla();

});

// 8. Inicialización
actualizarPantalla();