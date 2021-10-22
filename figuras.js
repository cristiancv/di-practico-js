//Código del Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.info("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.info("El área del cuadrado es: " + areaCuadrado + " cm");

console.groupEnd();

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
console.info("La altura del triángulo es: " + alturaTriángulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.info("El perimetro del triángulo es: " + perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturaTriángulo) / 2;
console.info("El área del triángulo es: " + areaTriangulo);
console.groupEnd();

//Código del Círculo
console.group("Círculos");
//Radio
const radioCirculo = 4;
//Diámetro
const diametroCirculo = radioCirculo * 2;
//PI
const pi = Math.PI;
//Circunferencia
const permitroCirculo = diametroCirculo * pi;

const areaCirculo = radioCirculo * radioCirculo * pi;
console.groupEnd();
