// Ejercicio para aplicar descuentos en base a cupones

//funciones Lógicas
const calcularPrecioFinal = (precio = 0 || precio, cupon = "" || cupon) => {
  let descuento = 0;
  if (cupon === "cupon_1") {
    descuento = 10;
  } else if (cupon === "cupon_2") {
    descuento = 12;
  } else if (cupon === "cupon_3") {
    descuento = 15;
  }
  let porcentajeFinal = 100 - descuento;
  let precioConDescuento = (precio * porcentajeFinal) / 100;
  return precioConDescuento;
};

// Funciones para trabajar con eventos desde HTML (click en el boton)
function totalAPagar() {
  let inputPrecio = document.getElementById("input-precio");
  let precio = parseFloat(inputPrecio.value);
  let selectCupon = document.getElementById("select-cupon");
  let valor_cupon = selectCupon.value;
  let texto_cupon = selectCupon.options;
  texto_cupon=texto_cupon[selectCupon.selectedIndex].text;
  if (isNaN(precio)) {
    inputPrecio.value = "";
    return alert("El precio debe ser un número.");
  }
  let preciofinal = calcularPrecioFinal(precio, valor_cupon);
  let presultado = document.getElementById("resultado");
  presultado.textContent = `El precio total con ${texto_cupon}, es de: $${preciofinal.toFixed(2)}`;
}