const capa = document.querySelector("#capa");
const imagen1 = document.querySelector("#imagen1");
const imagen2 = document.querySelector("#imagen2");
const imagen3 = document.querySelector("#imagen3");

imagen1.addEventListener("mouseover", () => {
  const texto = document.createElement("p");
  texto.innerText = imagen1.getAttribute("src");
  document.body.appendChild(texto);
});

imagen2.addEventListener("mouseover", () => {
  const texto = document.createElement("p");
  texto.innerText = imagen2.getAttribute("src");
  document.body.appendChild(texto);
});

imagen3.addEventListener("mouseover", () => {
  const texto = document.createElement("p");
  texto.innerText = imagen3.getAttribute("src");
  document.body.appendChild(texto);
});
