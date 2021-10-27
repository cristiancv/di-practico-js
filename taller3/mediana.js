/*const lista1 = [300, 100, 200, 400000000, 700, 80, 60, 30];
 const listaOrdenada = lista1.sort(function (a, b) {
  return a - b;
});
// 30,60,80,100,200,300, 700, 400000000
const mitadLista1 = parseInt(lista1.length / 2);
*/
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
  let listaOrdenada1 = lista.sort(function (a, b) {
    return a - b;
  });
  let mitadLista = parseInt(listaOrdenada1.length / 2);
  let mediana = 0;
  if (esPar(listaOrdenada1.length)) {
    const elemento1 = listaOrdenada1[mitadLista - 1];
    const elemento2 = listaOrdenada1[mitadLista];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;
    return `La mediana es: ${mediana}`;
  } else {
  }
}
