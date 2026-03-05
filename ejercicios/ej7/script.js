// Script del ejercicio 7

// 1. Selección
const inputLongitud = document.querySelector("#longitud");
const btnGenerar = document.querySelector("#btnGenerar");
const salida = document.querySelector("#resultado");

// 2. Caracteres disponibles
const caracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}";

// 3. Generar contraseña
function generarPassword(longitud) {

  let pass = "";

  for (let i = 0; i < longitud; i++) {

    const index = Math.floor(Math.random() * caracteres.length);

    pass += caracteres[index];

  }

  return pass;

}

// 4. Evento
btnGenerar.addEventListener("click", () => {

  const longitud = Number(inputLongitud.value);

  if (!longitud) {
    salida.textContent = "Error: introduce una longitud.";
    return;
  }

  if (longitud < 4) {
    salida.textContent = "Error: la longitud mínima es 4.";
    return;
  }

  if (longitud > 50) {
    salida.textContent = "Error: longitud demasiado grande (máx. 50).";
    return;
  }

  salida.textContent = generarPassword(longitud);

});