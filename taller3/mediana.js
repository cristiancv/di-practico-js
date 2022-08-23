const mitabla = document.getElementById("tabla-numeros");
const tablabody = document.getElementById("tabla-body");
const camponumero = document.getElementById("numero");
const listanumeros = new Array();

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function calcularMediana(lista = []) {
  let mediana = 0;
  //Agregadas las siguientes líneas para validar Arreglo vacío o con 0 elementos
  if(lista===undefined) return alert(`La lista no fue definida: ${lista}`);
  if (lista===null) return alert("La lista se encuentra vacia.")
  if (lista.length===0){
    //alert(`La lista: ${lista} tiene 0 elementos`);
    //return mediana;
    return (`La lista ${lista} tiene 0 elementos`);
  }
  //Fin validaciones
  let listaOrdenada1 = lista.sort(function (a, b) {
    return a - b;
  });
  let mitadLista = parseInt(listaOrdenada1.length / 2);
  if (esPar(listaOrdenada1.length)) {
    const elemento1 = listaOrdenada1[mitadLista - 1];
    const elemento2 = listaOrdenada1[mitadLista];
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;
    //return `La mediana es: ${mediana}`;
  } else {
    mediana = listaOrdenada1[mitadLista];
  }
  return mediana;
}
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
function medianaBoton() {
  let mediana = calcularMediana(listanumeros);
  let resultado = document.getElementById("resultado");
  //resultado.textContent = `La Mediana es: ${mediana}`;
  if ( typeof mediana === "string") resultado.textContent = `${mediana}`;
  if ( typeof mediana === "number") resultado.textContent = `La Mediana es: ${mediana}`;
}
