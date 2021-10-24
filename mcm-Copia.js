// PROGRAMA PARA ENCONTRAR EL Mínimo Común Múltiplo de dos números
var n2 = 0;
var n1 = 0;
var mcm = 1;
var arbases1 = new Array();
var arbases2 = new Array();
var arreglo = new Array();
var mapa1 = new Map();
var mapa2 = new Map();

const validarPrimo = (numero) => {
  let esprimo = true;
  for (i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esprimo = false;
    }
  }
  return esprimo;
};

const descomponer = (numero) => {
  if (numero === undefined) return console.error("No se ingreso un número");
  if (typeof numero !== "number")
    return console.error(`El dato ingresado ${numero} no es un número`);
  let arrtemp = new Array();
  let dividendo = numero;
  let divisor = 2;
  let cociente = 0,
    residuo = 0,
    ind = 0;
  while (cociente !== 1) {
    cociente = parseInt(dividendo / divisor);
    if (cociente === 1) {
      if (validarPrimo(dividendo)) {
        arrtemp[ind] = dividendo;
        //console.log(numero);
        //console.log("Bases:", arrtemp);
      }
      return numero, arrtemp;
    }
    residuo = dividendo % divisor;
    if (residuo === 0) {
      arrtemp[ind] = divisor;
      dividendo = cociente;
      ind++;
    } else if (residuo !== 0) {
      divisor++;
    }
  }
};
const obtenerExponentes = (numero, arreglo) => {
  if ((numero === undefined))
    return console.error("No se definio el número, ingrese un valor");
  if (typeof numero !== "number")
    return console.error(`El dato ingresado: "${numero} no es un número`);
  if ((arreglo === undefined))
    return console.error("No se definió el arreglo, ingrese un arreglo");
  if (!(arreglo instanceof Array))
    return console.error(`El dato ingresado: "${arreglo} no es un arreglo`);
  if (arreglo.length === 0)
    return console.warn("El arreglo se encuentra vacio");
  for (let el of arreglo) {
    if (typeof el !== "number")
      return console.warn(
        `El elemento "${el}" no es un número, todos deben ser números`
      );
  }
  this.arreglo = arreglo;
  let setarr = new Set(this.arreglo);
  let arreglo2 = Array.from(setarr);
  let expo = 0;
  let mapa0 = new Map();
  let i;
  console.log(numero);
  for (let el of arreglo2) {
    expo = 0;
    i = 0;
    while (i < this.arreglo.length && i !== -1) {
      i = this.arreglo.indexOf(el, i);
      if (i === -1) {
        continue;
      } else {
        expo++;
        i++;
      }
    }
    if (expo !== 0) {
      mapa0.set(el, expo);
    }
  }
  console.log("Factores primos:", mapa0);
  return mapa0;
};
const obtenerMayor = (n1, n2) => {
  let mayor = 0;
  if (n1 > n2) {
    mayor = n1;
  } else {
    mayor = n2;
  }
  return mayor;
};
const calcularMCM = (arbases1, arbases2) => {
  if (arbases1 === undefined)
    return console.error("No se definio el arreglo 1");
  if (arbases2 === undefined)
    return console.error("No se definio el arreglo 2");
  if (!(arbases1 instanceof Array))
    return console.error(
      `El dato ingresado debe ser un arreglo, no ${arbases1}`
    );
  if (!(arbases2 instanceof Array))
    return console.error(
      `El dato ingresado debe ser un arreglo, no ${arbases2}`
    );
  mapan1 = obtenerExponentes(n1, arbases1);
  mapan2 = obtenerExponentes(n2, arbases2);
  let mapcomunes = new Map(),
    mapnocomunes = new Map();
  mcm = 1;
  for (let [k, v] of mapan1) {
    for (let [k1, v1] of mapan2) {
      if (k === k1) {
        let n = obtenerMayor(v, v1);
        mapcomunes.set(k, n);
      }
    }
  }
  //Aqui empieza los bucles para llenar los NO COMUNES
  for (let [k, v] of this.mapan1) {
    if (!mapcomunes.has(k)) {
      mapnocomunes.set(k, v);
    }
  }
  for (let [k, v] of this.mapan2) {
    if (!mapcomunes.has(k)) {
      mapnocomunes.set(k, v);
    }
  }
  console.log("Bases comunes con sus exponentes: ", mapcomunes);
  console.log("Bases NO comunes con sus exponentes: ", mapnocomunes);
  //Acumulación de los productos
  for (let [k, v] of mapcomunes) {
    this.mcm *= Math.pow(k, v);
  }
  for (let [k, v] of mapnocomunes) {
    this.mcm *= Math.pow(k, v);
  }
  console.log(`EL Mínimo Común Múltiplo de ${n1} y ${n2} es: ${this.mcm}`);
  return this.mcm;
};

//n1 = parseInt(prompt("Ingrese el valor de n1"));
//n2 = parseInt(prompt("Ingrese el valor de n2"));

//const ejecutar = (n1, n2) => {
const ejecutar = (n1, n2) => {
  //n1 = undefined || parseInt(prompt("Ingrese el valor de n1"));
  if (typeof n1 === undefined)
    return console.error(`No ha ingresado ningún dato:"${n1}"`);
  if (typeof n1 !== "number")
    return console.error(`El Dato debe ser un número para n1: no "${n1}"`);
  //n2 = undefined || parseInt(prompt("Ingrese el valor de n2"));
  if (typeof n2 === undefined)
    return console.error(`No ha ingresado ningún dato:"${n2}"`);
  if (typeof n2 !== "number")
    return console.error(`El Dato debe ser un número para n2: no "${n2}"`);
  if (n1 > 0 && n2 > 0) {
    n1=parseInt(n1)
    n2=parseInt(n2)
    arbases1 = descomponer(n1);
    arbases2 = descomponer(n2);
    mcm = calcularMCM(arbases1, arbases2);
    return mcm;
  }
};
//document.getElementById("numero1").addEventListener()

document.getElementById("btncalcular").addEventListener("click", function () {
  let campo1 = document.getElementById("numero1");
  let campo2 = document.getElementById("numero2");
  let presult = document.getElementById("resultado");
  //console.log("Número de campo1:", campo1);
  n1 = campo1.valueAsNumber;
  if (isNaN(n1)){
    campo1.value=""
    return alert(`El dato ingresado para n1 debe ser un número: ${n1}`)
  }
  console.log("Numero 1 al hacer click:" + n1);
  n2 = campo2.valueAsNumber;
  if (isNaN(n2)){
    campo2.value=""
    return alert(`El dato ingresado para n2 debe ser un número: ${n2}`)
  }
  console.log("Numero 2 al hacer click:" + n2);
  console.info(typeof n1, typeof n2);
  mcm = ejecutar(n1, n2);
  console.info("mcm:"+ mcm);
  presult.innerHTML = "El mínimo común multiplo de los dos números es: "+mcm;
  //alert(mcm);
  console.info(`EL MCM resultado es: "${mcm}"`);
});
//ejecutar();
// Pruebas de los métodos
//n1 = 90;
//n2 = 260;
//esprimo = validarPrimo(n1);
//console.log(`El número ${n1} es primo: ${esprimo}`);
//arbases1 = descomponer(n1);
//arbases2 = descomponer(n2);
//mapan1 = obtenerExponentes(n1, arbases1);
//mapan2 = obtenerExponentes(n2, arbases2);
//calcularMCM(arbases1, arbases2);
