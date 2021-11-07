const salariosEcu = ecuador.map(function (personita) {
  return personita.salary;
});

const salariosEcuSorted = salariosEcu.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

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
  const mitad = parseInt(lista.length / 2);
  if (esPar(lista.lenght)) {
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];
    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana;
  } else {
    const personitaMitad = lista[mitad];
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
