const lista1 = [100, 200, 300, 500];
const mitabla=document.getElementById("tabla-numeros")
const tablabody=document.getElementById("tabla-body");
const camponumero=document.getElementById("numero");
//const numleido=parseFloat(document.getElementById("numero").value);
function calcularMediaAritmetica(lista) {
  /* let sumaLista = 0;

  for (let i = 0; i < lista.length; i++) {
    sumaLista += lista[i];
  } */
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
const listanumeros= new Array();
const agregarNumero = (numero=0 ||numero) =>{
  if(typeof numero!== "number") return alert(`El dato ingresado: ${numero} debe ser un número`);
  if(typeof numero=== undefined) return alert("No ha ingresado ningún dato"); 
    listanumeros.push(numero);
    agregarCelda(numero);
    return listanumeros;
}
const agregarCelda= (numero=0||numero) => {
  let fila=document.createElement("tr");
  let dato=document.createElement("td");
  dato.appendChild(document.createTextNode(numero));
  fila.appendChild(dato);
  tablabody.appendChild(fila);
}
function agregarNumeroBtn(){
  let numleido=parseFloat(document.getElementById("numero").value);
  if (isNaN(numleido)) {
    camponumero.value = "";
    return alert("El dato debe ser un número.");
  }else{
  agregarNumero(numleido);
  camponumero.value = "";
  }
}
function promedioBoton(){
  let promedio=calcularMediaAritmetica(listanumeros);
  let resultado= document.getElementById("resultado");
  resultado.textContent =`El promedio es: ${promedio}`;
}