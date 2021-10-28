const salariosEcu = ecuador.map(function (personita) {
  return personita.salary;
});

const salariosEcuSorted = salarios.sort(function (salaryA, salaryB) {
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
  const mitad = parseInt(lista.lenght / 2);
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
console.log(medianaSalarios(salariosEcuSorted));
