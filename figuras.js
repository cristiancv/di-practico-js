//Código del Cuadrado

const ladoCuadrado = 5;

function perimetroCuadrado(lado) {
  if (typeof lado !== "number") {
    return console.error(`El valor ingresado "${lado}" no es un número`);
  } else {
    const perimetro = lado * 4;
  }
  return perimetro;
}

const areaCuadrado = (lado) => {
  if (typeof lado !== "number") {
    return console.error(`El valor ingresado "${lado}" no es un número`);
  } else {
    const area = lado * lado;
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
  const lado1 = input1.value;
  const perimetro = perimetroCuadrado(lado1);
  alert(perimetro);
  let parrafo = document.getElementById("respuesta");
  parrafo.style.textAlign = "center";
  parrafo.textContent = String(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const lado = input.value;
  const area = areaCuadrado(lado);
  alert(area);
  let parrafo = document.getElementById("respuesta");
  parrafo.style.textAlign = "center";
  parrafo.textContent = String(area);
}
