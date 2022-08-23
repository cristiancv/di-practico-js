//Código del Cuadrado

const ladoCuadrado = 5;

function perimetroCuadrado(lado = 1) {
  let perimetro = 0;
  if (lado === 0){
    console.error(`El valor ingresado "${lado}" debe ser distinto de cero.`);
    return perimetro;
  }
  if (typeof lado !== "number") {
    return console.error(`El valor ingresado "${lado}" no es un número`);
  } else {
    perimetro = lado * 4;
  }
  return perimetro;
}

const areaCuadrado = (lado = 0) => {
  let area = 0;
  if (lado === 0){
    console.error(`El valor ingresado "${lado}" debe ser distinto de cero.`);
    return area;
  }
  if (typeof lado !== "number") {
    return console.error(`El valor ingresado '${lado}' no es un número`);
  } else {
    area = lado * lado;
  }
  return area;
};

//Código del Triángulo
//console.group("Tríangulos");
const perimetroTriangulo = (lado1 = 0, lado2 = 0, base = 0) => {
  let perimetroTri = 0;
  if (
    typeof lado1 !== "number" ||
    typeof lado2 !== "number" ||
    typeof base !== "number"
  )
    return console.error(
      `Todos los valores: ${lado1}, ${lado2}, ${base} deben ser números`
    );
  if(lado1 === 0 || lado2 === 0 || base === 0){
    console.error(`Cada cara del triángulo debe ser distinta a 0; perimetro = ${perimetroTri}`);
    //return perimetroTri;
  }
  else {
    perimetroTri = lado1 + lado2 + base;
  }
  return perimetroTri;
};

const areaTriangulo = (base=1, altura=1) => {
  let areaTri = 0;
  if (typeof base === undefined || typeof altura === undefined)
    return alert(
      `Verifica que fueron definidos todos los valores: ${base}, ${altura}`
    );
  if (typeof base !== "number" || typeof altura !== "number")
    return console.error(
      `Todos los valores: ${base}, ${altura} deben ser números`
    );
  else {
    areaTri = (base * altura) / 2;    
  }
  return areaTri;
};

//Código del Círculo
//console.group("Círculos");

//Radio
const radioCirculo = 4;

//Diámetro

const diametroCirculo = (radioCirculo=1) => {
  if (typeof radioCirculo !== "number") {
    return console.error(
      `El valor ingresado: ${radioCirculo}, debe ser número`
    );
  } else {
    let diametroC = radioCirculo * 2;
    return diametroC;
  }
};

//PI
const pi = Math.PI;

//Circunferencia
const perimetroCirculo = (diametro=1) => {
  if (typeof diametro !== "number") {
    return console.error(`El valor ingresado: ${diametro}, debe ser número`);
  } else {
    let perimetroC = diametro * Math.PI;
    return perimetroC;
  }
};

const areaCirculo = (radio) => {
  if (typeof radio !== "number") {
    return console.error(`El valor ingresado: ${radio}, debe ser número`);
  } else {
    let areaC = radio * radio * Math.PI;
    return areaC;
  }
};

//Seccion de funciones para los Eventos
function evaluarTexto (cadena=''){
  let valor=0.0;
  if (typeof cadena!=="string") return console.error(`El valor de la cadena: ${cadena} no es un texto` );
  if (cadena===undefined) return console.error(`No se ingreso/definió ningún valor: ${cadena}`);
  if (cadena===null) return console.error(`El texto: ${cadena} no puede quedar vacio`);  
  if (cadena==='') return console.error(`El texto: ${cadena} no puede ser un espacio vacio, tipo: ${typeof cadena}`);
  else{
    valor=parseFloat(cadena);
  }
  //console.log(`Evaluar texto devuelve: ${valor} de tipo: ${typeof valor}`);
  return valor;
}
function calcularPerimetroCuadrado() {
  const input1 = document.getElementById("InputCuadrado");
  //Luego de obtener el input html se extrae el valor
  const lado1 = evaluarTexto(input1.value);
  //El dato obtenido es convertido a flotante
  if (isNaN(lado1)){
  //Cuando el dato ingresado no es un número se muestra una alerta.
    input1.value="";
    return alert("Ingrese un número Ej.: 3, 4.56");
  }else{
    //Si isNan da falso se procede hacer la operación y presentar en pantalla el resultado
    let perimetro = perimetroCuadrado(lado1);
    let percuadrado = document.getElementById("respuesta-cuadrado");
    percuadrado.style.textAlign = "center";
    percuadrado.textContent = `El perímetro del cuadrado es:  ${perimetro}`;
  }
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const lado = evaluarTexto(input.value);
  if (isNaN(lado)){
    input.value="";
    return alert("Ingrese un número Ej.: 3, 4.56");
  }else{
    let area = areaCuadrado(lado);
    let acuadrado = document.getElementById("respuesta-cuadrado");
    acuadrado.style.textAlign = "center";
    acuadrado.textContent = `El área del cuadrado es: ${area}`;
  }
}
//Funciones para el Triángulo
function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("lado1");
  const lado1 = parseFloat(input1.value);
  const input2 = document.getElementById("lado2");
  const lado2 = parseFloat(input2.value);
  const inputb = document.getElementById("base");
  const base = parseFloat(inputb.value);
  if (isNaN(lado1)){
    input1.value="";
    return alert(`Ingrese un número entero o decimal para lado1`);
  }
  if (isNaN(lado2)){
    input2.value="";
    return alert(`Ingrese un número entero o decimal para lado2`);
  }
  if (isNaN(base)){
    inputb.value="";
    return alert(`Ingrese un número entero o decimal para base`);
  }
  else{
    let perimetro = perimetroTriangulo(lado1, lado2, base);
    let pertriangulo = document.getElementById("respuesta-triangulo");
    pertriangulo.style.textAlign = "center";
    pertriangulo.textContent = `El perímetro del triángulo es:  ${perimetro.toFixed(3)}`;
  }
}
function calcularAreaTriangulo() {
  const inputb = document.getElementById("base");
  const base = evaluarTexto(inputb.value);
  const inputAltura = document.getElementById("altura");
  const altura = evaluarTexto(inputAltura.value);
  if (isNaN(base)){
    inputb.value=1;
    return alert(`Ingrese un número entero o decimal para base`);
  }
  if (isNaN(altura)){
    inputAltura.value=1;
    return alert(`Ingrese un número entero o decimal para altura`);
  }
  else{
    let area = areaTriangulo(base, altura);
    let atriangulo = document.getElementById("respuesta-triangulo");
    atriangulo.style.textAlign = "center";
    atriangulo.textContent = `El área del triángulo es: ${area.toFixed(3)}`;
  }
  
}
//Funciones para Círculo
function calcularDiametroCirculo() {
  const inputc = document.getElementById("radio");
  const radio = evaluarTexto(inputc.value);
  if(isNaN(radio)) {
    inputc.value=1;
    return alert(`Ingrese un número entero o decimal para Radio`);
  }
  else{
    let diametro = diametroCirculo(radio);
    let pardiametro = document.getElementById("respuesta-circulo");
    pardiametro.style.textAlign = "center";
    pardiametro.textContent = `El diámetro del círculo es: ${diametro.toFixed(3)}`;
  }
}
function calcularPerimetroCirculo() {
  const inputc1 = document.getElementById("radio");
  const radio1 = evaluarTexto(inputc1.value);
  if(isNaN(radio1)) {
    inputc1.value=1;
    return alert(`Ingrese un número entero o decimal para Radio`);
  }
  else{
    let perimetroc = perimetroCirculo(radio1);
    let pardiametro = document.getElementById("respuesta-circulo");
    pardiametro.style.textAlign = "center";
    pardiametro.textContent = `El perímetro del círculo es: ${perimetroc.toFixed(3)}`;
  }
}
function calcularAreaCirculo() {
  const inputc2 = document.getElementById("radio");
  const radio2 = evaluarTexto(inputc2.value);
  if(isNaN(radio2)) {
    inputc2.value=1;
    return alert(`Ingrese un número entero o decimal para Radio`);
  }
  else{
    let areac = areaCirculo(radio2);
    let pardiametro = document.getElementById("respuesta-circulo");
    pardiametro.style.textAlign = "center";
    pardiametro.textContent = `El área del círculo es: ${areac.toFixed(3)}`;
  }
  
}
