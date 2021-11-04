const lista1 = [100, 200, 300, 500];

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
    console.info(`Se agrego el número: ${numero}`);
    return listanumeros;
}
const agregarCeldas= (lista=new Array()) => {

}