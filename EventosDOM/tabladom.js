const mitabla = document.createElement("table");
const cuerpo = document.createElement("tbody");
mitabla.appendChild(cuerpo);

//creacion de la fila(row)

cuerpo.insertRow(0);
//CELDA 0
cuerpo.rows[0].insertCell(0); //maneja las filas como un arreglo(array) - rows[0] y llama el metodo del DOM insertCell
//las columnas tambien se manejan como arreglos, es decir cells[0], las filas y columnas me construyen una matriz
//rows[0].cells[0] para poder invocar los metodos de la celd
cuerpo.rows[0].cells[0].appendChild(
  document.createTextNode("Fila 0 Columna 0")
);
//CELDA 1
cuerpo.rows[0].insertCell(1);
cuerpo.rows[0].cells[1].appendChild(
  document.createTextNode("Fila 0 Columna 1")
);
//CELDA 2
cuerpo.rows[0].insertCell(2);
cuerpo.rows[0].cells[2].appendChild(
  document.createTextNode("Fila 0 Columna 2")
);

//FILA 2
//respetando la jerarquia DOM el contenedor superior es el cuerpo y su hijo natural. la fila insertRow crea la fila dentro del cuerpo.
cuerpo.insertRow(1);

//CELDA 0
cuerpo.rows[1].insertCell(0);
cuerpo.rows[1].cells[0].appendChild(
  document.createTextNode("Fila 1 Columna 0")
);
//CELDA 1
cuerpo.rows[1].insertCell(1);
cuerpo.rows[1].cells[1].appendChild(
  document.createTextNode("Fila 1 Columna 1")
);

//CELDA 2
cuerpo.rows[1].insertCell(2);
cuerpo.rows[1].cells[2].appendChild(
  document.createTextNode("Fila 1 Columna 2")
);

//recordar siempre la jerarquia del DOM el elemento superio es body
document.body.appendChild(latabla);
