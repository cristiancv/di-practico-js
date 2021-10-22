//Código del Cuadrado
//console.group("Cuadrados");
const ladoCuadrado = 5;

function perimetroCuadrado(lado) {
  if (typeof lado !== "number") {
    return alert(`El valor ingresado "${lado}" no es un número`);
  } else {
    return lado * 4;
  }
}

const areaCuadrado = (lado) => {
  if (typeof lado !== "number") {
    return alert(`El valor ingresado "${lado}" no es un número`);
  } else {
    return lado * lado;
  }
};

//Código del Triángulo
console.group("Tríangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.info(
  "Los lados del tríangulo miden: " +
    ladoTriangulo1 +
    "cm ," +
    ladoTriangulo2 +
    "cm ," +
    baseTriangulo +
    "cm"
);
const alturaTriángulo = 5.5;
console.info("La altura del triángulo es: " + alturaTriángulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.info("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriángulo) / 2;
console.info("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

//Código del Círculo
console.group("Círculos");
//Radio
const radioCirculo = 4;
//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("EL diametro del círculo es: " + diametroCirculo + "cm");
//PI
const pi = Math.PI;

//Circunferencia
const perimetroCirculo = diametroCirculo * pi;
console.log("EL perimetro del círculo es: " + perimetroCirculo + "cm");

const areaCirculo = radioCirculo * radioCirculo * pi;
console.log("EL área del círculo es: " + areaCirculo + "cm^2");
console.groupEnd();
