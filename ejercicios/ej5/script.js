// =====================================
// Script del ejercicio 5 (React)
// =====================================

function App() {

  // 1. Estado: valores numéricos y resultado
  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = React.useState("");
  const [resultado, setResultado] = React.useState("Resultado:");

  // 2. Obtener valores (equivalente a tu función original)
  function obtenerValores() {
    if (num1 === "" || num2 === "") {
      setResultado("Error: completa ambos campos.");
      return null;
    }

    const a = Number(num1);
    const b = Number(num2);

    if (isNaN(a) || isNaN(b)) {
      setResultado("Error: introduce números válidos.");
      return null;
    }

    return [a, b];
  }

  // 3. Mostrar resultado
  function mostrarResultado(valor) {
    setResultado(`Resultado: ${valor}`);
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

  // 5. Reset con tecla Escape
  function manejarTeclas(e) {
    if (e.key === "Escape") {
      setNum1("");
      setNum2("");
      setResultado("Resultado:");
    }
    if (e.key === "Enter") {
      calcular("sumar");
    }
  }

  // 6. Render: inputs, botones y resultado
  return (
    <div>
      <input
        type="number"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        onKeyDown={manejarTeclas}
      />

      <input
        type="number"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        onKeyDown={manejarTeclas}
      />

      <div>
        <button onClick={() => calcular("sumar")}>Sumar</button>
        <button onClick={() => calcular("restar")}>Restar</button>
        <button onClick={() => calcular("multiplicar")}>Multiplicar</button>
        <button onClick={() => calcular("dividir")}>Dividir</button>
      </div>

      <p>{resultado}</p>
    </div>
  );
}

// 7. Montaje del componente en el DOM
ReactDOM.createRoot(document.getElementById("root")).render(<App />);