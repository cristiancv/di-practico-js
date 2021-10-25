// Ejercicio para aplicar descuentos en base a cupones

//funciones Lógicas
const calcularPrecioFinal = (precio = 0 || precio, cupon = 0 || cupon) => {
  let descuento = 0;
  if (cupon === 1) {
    descuento = 10;
  } else if (cupon === 2) {
    descuento = 12;
  } else if (cupon === 3) {
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
  let inputCupon = document.getElementById("input-cupon");
  let cupon = parseFloat(inputCupon.value);
  if (isNaN(precio) || isNaN(cupon)) {
    inputPrecio.value = "";
    inputCupon.value = "";
    return alert("El precio y cupón deben ser números");
  }
  let preciofinal = calcularPrecioFinal(precio, cupon);
  let presultado = document.getElementById("resultado");
  presultado.textContent = `El precio total a pagar con cupón: ${cupon}, es de: $${preciofinal.toFixed(
    2
  )}`;
}
