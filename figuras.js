//Código del Cuadrado

const ladoCuadrado = 5;

function perimetroCuadrado(lado = 0) {
  let perimetro = 0;
  if (lado === 0)
    return console.error(
      `El valor ingresado "${lado}" debe ser distinto de cero.`
    );
  if (typeof lado !== "number") {
    return console.error(`El valor ingresado "${lado}" no es un número`);
  } else {
    perimetro = lado * 4;
  }
  return perimetro;
}

const areaCuadrado = (lado = 0) => {
  let area = 0;
  if (lado === 0)
    return console.error(
      `El valor ingresado "${lado}" debe ser distinto de cero.`
    );
  if (typeof lado !== "number") {
    return console.error(`El valor ingresado "${lado}" no es un número`);
  } else {
    area = lado * lado;
  }
  return area;
};

//Código del Triángulo
//console.group("Tríangulos");
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

const perimetroTriangulo = (lado1, lado2, base) => {
  if (
    typeof lado1 !== "number" ||
    typeof lado2 !== "number" ||
    typeof base !== "number"
  )
    return console.error(
      `Todos los valores: ${lado1}, ${lado2}, ${base} deben ser números`
    );
  else {
    let perimetroTri = lado1 + lado2 + base;
    return perimetroTri;
  }
};

const areaTriangulo = (base, altura) => {
  if (typeof base !== "number" || typeof altura !== "number")
    return console.error(
      `Todos los valores: ${base}, ${altura} deben ser números`
    );
  else {
    let areaTri = (base * altura) / 2;
    return areaTri;
  }
};

//Código del Círculo
//console.group("Círculos");

//Radio
const radioCirculo = 4;

//Diámetro

const diametroCirculo = (radioCirculo) => {
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
const perimetroCirculo = (diametro) => {
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
    let areaC = Math.pow(radio, 2) * Math.PI;
    return areaC;
  }
};
function calcularPerimetroCuadrado() {
  const input1 = document.getElementById("InputCuadrado");
  const lado1 = parseFloat(input1.value);
  let perimetro = perimetroCuadrado(lado1);

  let parrafo = document.getElementById("respuesta");
  parrafo.style.textAlign = "center";
  parrafo.textContent = `El perímetro del cuadrado es:  ${perimetro}`;
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const lado = parseFloat(input.value);
  let area = areaCuadrado(lado);

  let parrafo = document.getElementById("respuesta");
  parrafo.style.textAlign = "center";
  parrafo.textContent = `El área del cuadrado es: ${area}`;
}
