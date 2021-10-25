//Código del Triángulo Isósceles

function perimetroTriangulo(lado = 0 || lado, base = 0 || base) {
  let perimetro = 0;
  if (lado === undefined)
    return console.error("No se definio el valor del lado");
  if (base === undefined)
    return console.error("No se definio el valor de la base");
  if (lado === 0)
    return console.error(
      `El valor ingresado lado: "${lado}" debe ser distinto de cero.`
    );
  if (base === 0)
    return console.error(
      `El valor ingresado base: "${base}" debe ser distinto de cero.`
    );
  if (typeof lado !== "number" || typeof base !== "number") {
    return console.error(
      `Los valores ingresados "${lado}" y "${base}" deben ser números`
    );
  }
  perimetro = lado * 2 + base;
  return perimetro;
}

const areaTriangulo = (lado = 0 || lado, base = 0 || base) => {
  let area = 0;
  if (lado === undefined)
    return console.error("No se definio el valor del lado");
  if (base === undefined)
    return console.error("No se definio el valor de la base");
  if (lado === 0)
    return console.error(
      `El valor ingresado "${lado}" debe ser distinto de cero.`
    );
  if (base === 0)
    return console.error(
      `El valor ingresado "${base}" debe ser distinto de cero.`
    );
  if (typeof lado !== "number" || typeof base !== "number") {
    return console.error(
      `Los valores ingresados "${lado}" y "${base}" deben ser números`
    );
  } else {
    area = (base * Math.sqrt(Math.pow(lado, 2) - Math.pow(base, 2) / 4)) / 2;
  }
  return area;
};

//Funciones para los eventos
function calcularPerimetro() {
  let inputlado1 = document.getElementById("inputLado");
  const lado = parseFloat(inputlado1.value);
  let inputBase = document.getElementById("inputBase");
  const base = parseFloat(inputBase.value);
  if (isNaN(lado)) {
    inputlado1.value = "";
    return alert("Ingrese un número para lado");
  }
  if (isNaN(base)) {
    inputBase.value = "";
    return alert("Ingrese un número para base");
  }
  let perimetro = perimetroTriangulo(lado, base);

  let parPer = document.getElementById("respuesta-triangulo");
  parPer.textContent = `El perímetro del Triángulo Isósceles es: ${perimetro}`;
}
function calcularArea() {
  let inputlado1 = document.getElementById("inputLado");
  const lado1 = parseFloat(inputlado1.value);
  let inputBase = document.getElementById("inputBase");
  const base1 = parseFloat(inputBase.value);
  if (isNaN(lado1)) {
    inputlado1.value = "";
    return alert("Ingrese un número para lado");
  }
  if (isNaN(base1)) {
    inputBase.value = "";
    return alert("Ingrese un número para base");
  }

  let area = areaTriangulo(lado1, base1);

  let parArea = document.getElementById("respuesta-triangulo");
  parArea.textContent = `El área del Triángulo Isósceles es: ${area}`;
}
