// Script del ejercicio 8

const textarea = document.querySelector("textarea");
const palabras = document.querySelector("#palabras");
const caracteres = document.querySelector("#caracteres");

function contar() {

  const texto = textarea.value.trim();

  const numCaracteres = texto.replace(/\s/g, "").length;

  const numPalabras = texto === "" ? 0 : texto.split(/\s+/).length;

  palabras.textContent = `Palabras: ${numPalabras}`;
  caracteres.textContent = `Caracteres: ${numCaracteres}`;

}

textarea.addEventListener("input", contar);

contar();