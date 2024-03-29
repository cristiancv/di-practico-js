//const lista1 = [100, 200, 300, 500];
const mitabla = document.getElementById("tabla-numeros");
const tablabody = document.getElementById("tabla-body");
const camponumero = document.getElementById("numero");
const listanumeros = new Array();

function calcularMediaAritmetica(lista) {
  //Agregadas
  let promedioLista=0;
  if(lista===undefined) return alert(`La lista no fue definida: ${lista}`);
  if(lista===null) return alert(`La lista se encuentra vacia: ${lista}`);
  if(lista.length===0){
    alert(`La lista tiene 0 elementos: ${lista}`);
    return promedioLista;
  };
  //Fin
  //if(lista.length >= 1){
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) { 
      return valorAcumulado + nuevoElemento;
    });
    promedioLista = sumaLista / lista.length;    
  //}
  return promedioLista;
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
function promedioBoton() {
  let promedio = calcularMediaAritmetica(listanumeros);
  let resultado = document.getElementById("resultado");
  resultado.textContent = `El promedio es: ${promedio}`;
}
