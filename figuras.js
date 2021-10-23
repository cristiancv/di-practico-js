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
const perimetroTriangulo = (lado1, lado2, base) => {
  let perimetroTri = 0;
  if (
    typeof lado1 !== "number" ||
    typeof lado2 !== "number" ||
    typeof base !== "number"
  )
    return console.error(
      `Todos los valores: ${lado1}, ${lado2}, ${base} deben ser números`
    );
  else {
    perimetroTri = lado1 + lado2 + base;
    return perimetroTri;
  }
};

const areaTriangulo = (base, altura) => {
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
    let areaC = radio * radio * Math.PI;
    return areaC;
  }
};

//Seccion de funciones para los Eventos
function calcularPerimetroCuadrado() {
  const input1 = document.getElementById("InputCuadrado");
  const lado1 = parseFloat(input1.value);
  let perimetro = perimetroCuadrado(lado1);

  let percuadrado = document.getElementById("respuesta-cuadrado");
  percuadrado.style.textAlign = "center";
  percuadrado.textContent = `El perímetro del cuadrado es:  ${perimetro}`;
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const lado = parseFloat(input.value);
  let area = areaCuadrado(lado);

  let acuadrado = document.getElementById("respuesta-cuadrado");
  acuadrado.style.textAlign = "center";
  acuadrado.textContent = `El área del cuadrado es: ${area}`;
}
//Funciones para el Triángulo
function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("lado1");
  const lado1 = parseFloat(input1.value);
  const input2 = document.getElementById("lado2");
  const lado2 = parseFloat(input2.value);
  const inputb = document.getElementById("base");
  const base = parseFloat(inputb.value);

  let perimetro = perimetroTriangulo(lado1, lado2, base);

  let pertriangulo = document.getElementById("respuesta-triangulo");
  pertriangulo.style.textAlign = "center";
  pertriangulo.textContent = `El perímetro del triángulo es:  ${perimetro}`;
}
function calcularAreaTriangulo() {
  const inputb = document.getElementById("base");
  const base = parseFloat(inputb.value);
  const inputAltura = document.getElementById("altura");
  const altura = parseFloat(inputAltura.value);

  let area = areaTriangulo(base, altura);

  let atriangulo = document.getElementById("respuesta-triangulo");
  atriangulo.style.textAlign = "center";
  atriangulo.textContent = `El área del triángulo es: ${area}`;
}
//Funciones para Círculo
function calcularDiametroCirculo() {
  const inputc = document.getElementById("radio");
  const radio = parseFloat(inputc.value);

  let diametro = diametroCirculo(radio);

  let pardiametro = document.getElementById("respuesta-circulo");
  pardiametro.style.textAlign = "center";
  pardiametro.textContent = `El diámetro del círculo es: ${diametro}`;
}
function calcularPerimetroCirculo() {
  const inputc1 = document.getElementById("radio");
  const radio1 = parseFloat(inputc1.value);

  let perimetroc = perimetroCirculo(radio1);

  let pardiametro = document.getElementById("respuesta-circulo");
  pardiametro.style.textAlign = "center";
  pardiametro.textContent = `El perímetro del círculo es: ${perimetroc}`;
}
function calcularAreaCirculo() {
  const inputc2 = document.getElementById("radio");
  const radio2 = parseFloat(inputc2.value);

  let areac = areaCirculo(radio2);

  let pardiametro = document.getElementById("respuesta-circulo");
  pardiametro.style.textAlign = "center";
  pardiametro.textContent = `El área del círculo es: ${areac}`;
}
