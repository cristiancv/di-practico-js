const lista1 = [300, 100, 200, 400000000, 700, 80, 60, 30];
const listaOrdenada = lista1.sort(function (a, b) {
  return a - b;
});
const mitadLista1 = parseInt(lista1.length / 2);

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
let mediana;
if (esPar(lista1.length)) {
  const elemento1 = listaOrdenada[mitadLista1 - 1];
  const elemento2 = listaOrdenada[mitadLista1];

  const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
  mediana = promedioElemento1y2;
} else {
}
console.log("mediana= " + mediana);
