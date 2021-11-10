const salariosEcu = ecuador.map(function (personita) {
  return personita.salary;
});

const salariosEcuSorted = salariosEcu.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});
const mitabla = document.getElementById("tabla-datos");
const tablabody = document.getElementById("tabla-body");
const campoNumero = document.getElementById("salario");
const campoNombre = document.getElementById("nombre");
const listanumeros = new Array();

function esPar(numero) {
  return numero % 2 === 0;
}
function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
function medianaSalarios(lista) {
  const listaOrd = lista.sort(function (a, b) {
    return a - b;
  });
  const mitad = parseInt(listaOrd.length / 2);
  if (esPar(listaOrd.lenght)) {
    const personitaMitad1 = listaOrd[mitad - 1];
    const personitaMitad2 = listaOrd[mitad];
    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana;
  } else {
    const personitaMitad = listaOrd[mitad];
    return personitaMitad;
  }
}
const medianaGeneralEcu = medianaSalarios(salariosEcuSorted);

//Mediana del Top 10%

const spliceStart = (salariosEcuSorted.length * 90) / 100;
const spliceCount = salariosEcuSorted.length - spliceStart;
const salariosEcuTop10 = salariosEcuSorted.splice(spliceStart, spliceCount);

const medianaEcuTop10 = medianaSalarios(salariosEcuTop10);
console.log(medianaGeneralEcu, medianaEcuTop10);

//Funciones para llenar las celdas
const agregarDato = (nombre, numero = 0 || numero) => {
  if (typeof nombre !== "string") return alert(`El nombre debe ser un texto`);
  if (typeof nombre === undefined) return alert("No ha definido el nombre");
  if (typeof numero !== "number")
    return alert(`El dato ingresado: ${numero} debe ser un número`);
  if (typeof numero === undefined) return alert("No ha definido el salario");
  listanumeros.push(numero);
  agregarFila(nombre, numero);
  return listanumeros;
  //Esta función agrega el numero recibido al arreglo listanumeros y a la celda correspondiente en la tabla
};
const agregarFila = (nombre = "", numero = 0) => {
  let fila = document.createElement("tr");
  let name = document.createElement("td");
  name.appendChild(document.createTextNode(nombre));
  fila.appendChild(name);
  let num = document.createElement("td");
  num.appendChild(document.createTextNode(numero));
  fila.appendChild(num);
  tablabody.appendChild(fila);
  //Está función agrega los datos correspondientes a una nueva fila en la tabla
};
function agregarFilaBtn() {
  let numleido = parseFloat(campoNumero.value);
  if (isNaN(numleido)) {
    campoNumero.value = "";
    return alert("El campo debe ser un número: ${numleido}.");
  } else {
    agregarDato(campoNombre.value, numleido);
    campoNumero.value = "";
    campoNombre.value = "";
  }
}
function medianaBoton() {
  let mediana = medianaSalarios(listanumeros);
  let resultado = document.getElementById("resultado");
  resultado.textContent = `La Mediana de salarios es: ${mediana}`;
}
