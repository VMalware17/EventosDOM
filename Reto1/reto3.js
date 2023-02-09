const btnPrimero = document.querySelector("#btnPrimero");
const btnSegundo = document.querySelector("#btnSegundo");
const btnTercero = document.querySelector("#btnTercero");
const btnCuarto = document.querySelector("#btnCuarto");
const btnQuinto = document.querySelector("#btnQuinto");

btnPrimero.addEventListener("mouseover", () => {
  btnPrimero.setAttribute("class", "btn btn-success btn-sm");
});

btnSegundo.addEventListener("mouseover", () => {
  btnSegundo.setAttribute("class", "btn btn-danger btn-sm");
});

btnTercero.addEventListener("mouseover", () => {
  btnTercero.setAttribute("class", "btn btn-light btn-sm");
});

btnCuarto.addEventListener("mouseover", () => {
  btnCuarto.setAttribute("class", "btn btn-dark btn-sm");
});

btnQuinto.addEventListener("mouseover", () => {
  btnQuinto.setAttribute("class", "btn btn-primary btn-sm");
});
