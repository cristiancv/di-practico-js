//const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];
const mitabla = document.getElementById("tabla-numeros");
const tablabody = document.getElementById("tabla-body");
const camponumero = document.getElementById("numero");

const listanumeros = new Array();
const calcularModa = (lista = []) => {
  let listaCount = {};
  lista.map(function (elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });
  const lista1Array = Object.entries(listaCount).sort(function (
    elementoA,
    elementoB
  ) {
    return elementoA[1] - elementoB[1];
  });
  const moda = lista1Array[lista1Array.length - 1];
  //return `La moda es: ${moda}`;
  return moda;
};
const agregarNumero = (numero = 0 || numero) => {
  if (typeof numero !== "number")
    return alert(`El dato ingresado: ${numero} debe ser un número`);
  if (typeof numero === undefined) return alert("No ha ingresado ningún dato");
  listanumeros.push(numero);
  agregarCelda(numero);
  return listanumeros;
};
const agregarCelda = (numero = 0 || numero) => {
  let fila = document.createElement("tr");
  let dato = document.createElement("td");
  dato.appendChild(document.createTextNode(numero));
  fila.appendChild(dato);
  tablabody.appendChild(fila);
};
function agregarNumeroBtn() {
  let numleido = parseFloat(document.getElementById("numero").value);
  if (isNaN(numleido)) {
    camponumero.value = "";
    return alert("El dato debe ser un número.");
  } else {
    agregarNumero(numleido);
    camponumero.value = "";
  }
}
function modaBoton() {
  let moda = calcularModa(listanumeros);
  let resultado = document.getElementById("resultado");
  let num = moda[0];
  let veces = moda[1];
  resultado.textContent = `La Moda es: ${num}, ${veces} veces.`;
}
