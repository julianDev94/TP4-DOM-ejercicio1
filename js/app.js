const comenzarJuego = document.querySelector(".btn");
const articlePrincipal = document.querySelector("section");
const formValidacion = document.querySelector("form");

let numAleatorio = 0;

function ocultarArticle() {

  numAleatorio = Math.floor(Math.random() * 50);
  console.log(numAleatorio);
  articlePrincipal.removeChild(articlePrincipal.children[0]);

  const articleOcultar = document.getElementById("ocultar");
  console.log(articleOcultar);
  articleOcultar.className = "d-block";

  const validarValores = (e) => {
    e.preventDefault();
    const inputValor = document.querySelector("input");
    
    console.log(inputValor.value);
    if (inputValor.value == numAleatorio) {
      alert("Felicidades, acertó el valor");
    } else if (inputValor.value > numAleatorio) {
      alert("El valor ingresado es mayor al valor a adivinar");
    } else {
      alert("El valor ingresado es menor al valor a adivinar");
    }
    formValidacion.reset();
  };

  formValidacion.addEventListener("submit", validarValores);
}

comenzarJuego.addEventListener("click", ocultarArticle);
