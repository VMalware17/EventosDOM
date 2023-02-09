const capa = document.querySelector("#capa");
const btnAplicar = document.querySelector("#btnAplicar");
const btnAplicarFondo = document.querySelector("#btnAplicarFondo");
// const inputTexto = document.querySelector("#inputTexto");
const inputColor = document.querySelector("#inputColor").value; //valor del color

btnAplicar.addEventListener("click", () => {
  //const p = document.createElement("p");
  capa.setAttribute("style", "background-color:" + inputColor);
});

btnAplicarFondo.addEventListener("click", () => {
  document.body.setAttribute("style", "background-color:" + inputColor);
});
