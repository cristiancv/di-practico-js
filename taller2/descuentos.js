//Ejercicio para aplicar porcentajes y descuentos
/*Datos
- Precio original (numero decimal)
- Descuento (numero entero)
- Porcentaje a pagar (100 - Descuento)
- Precio a pagar (Precio original * Porcentaje a pagar)
*/

//Funciones Lógicas
const calcularPrecioFinal = (
  precio = 0 || precio,
  descuento = 0 || descuento
) => {
  let porcentajeFinal = 100 - descuento;
  let precioConDescuento = (precio * porcentajeFinal) / 100;
  return precioConDescuento;
};
// Funciones para trabajar con eventos desde HTML (click en el boton)
function obtenerPrecioFinal() {
  let inputPrecio = document.getElementById("input-precio");
  let precio = parseFloat(inputPrecio.value);
  let inputDescuento = document.getElementById("input-descuento");
  let descuento = parseFloat(inputDescuento.value);
  if (isNaN(precio) || isNaN(descuento)) {
    inputPrecio.value = "";
    inputDescuento.value = "";
    return alert("El precio y descuento deben ser números");
  }
  let preciofinal = calcularPrecioFinal(precio, descuento);
  document.getElementById(
    "resultado"
  ).textContent = `El precio del producto a pagar $${precio} con descuento: ${descuento}% es de: $${preciofinal.toFixed(
    2
  )}`;
}
