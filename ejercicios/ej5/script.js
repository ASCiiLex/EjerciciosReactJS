// Script del ejercicio 5

// 1. Selección
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const resultado = document.querySelector("#resultado");

// 2. Obtener valores
function obtenerValores() {

  if (num1.value === "" || num2.value === "") {
    resultado.textContent = "Error: completa ambos campos.";
    return null;
  }

  const a = Number(num1.value);
  const b = Number(num2.value);

  if (isNaN(a) || isNaN(b)) {
    resultado.textContent = "Error: introduce números válidos.";
    return null;
  }

  return [a, b];
}

// 3. Mostrar resultado
function mostrarResultado(valor) {
  resultado.textContent = `Resultado: ${valor}`;
}

// 4. Función calculadora
function calcular(operacion) {

  const valores = obtenerValores();
  if (!valores) return;

  const [a, b] = valores;

  if (operacion === "dividir" && b === 0) {
    mostrarResultado("Error: división por cero");
    return;
  }

  let resultadoOperacion;

  switch (operacion) {

    case "sumar":
      resultadoOperacion = a + b;
      break;

    case "restar":
      resultadoOperacion = a - b;
      break;

    case "multiplicar":
      resultadoOperacion = a * b;
      break;

    case "dividir":
      resultadoOperacion = a / b;
      break;

  }

  mostrarResultado(resultadoOperacion);

}

// 5. Eventos
document.querySelector("#sumar").addEventListener("click", () => calcular("sumar"));
document.querySelector("#restar").addEventListener("click", () => calcular("restar"));
document.querySelector("#multiplicar").addEventListener("click", () => calcular("multiplicar"));
document.querySelector("#dividir").addEventListener("click", () => calcular("dividir"));

// Permitir calcular con Enter
[num1, num2].forEach(input => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") calcular("sumar");
  });
});