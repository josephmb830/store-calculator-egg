const comprar = () => {

  let totalApagar = 0; // Inicialización de la variable que acumula el total a pagar

  for (let index = 1; index <= 3; index++) {
    const nombre = prompt("¿Qué producto desea llevar?"); // Solicitar el nombre del producto
    let cantidad = Number(prompt("¿Cuántas unidades?")); // Solicitar la cantidad y convertir a número
    let precio = Number(prompt("¿Cuánto sale cada unidad?")); // Solicitar el precio y convertir a número

    const subtotal = cantidad * precio; // Calcular el subtotal
    totalApagar += subtotal; // Sumar el subtotal al total a pagar
    alert(cantidad + " unidades de " + nombre + " = " + subtotal);
    console.log(cantidad + " unidades de " + nombre + " = " + subtotal);
  }

  const mensajeTotal = "El resultado del total a pagar es " + totalApagar;

  alert(mensajeTotal); // Mostrar el total a pagar
  console.log(mensajeTotal); // Mostrar el total a pagar
  return totalApagar;

}


const total1 = comprar();
const total2 = comprar();
const total3 = comprar();
const total = total1 + total2 + total3;

const mensajeGlobal = "El resultado del total a de la suma de los totales de los clientes es " + total;

alert(mensajeGlobal); // Mostrar el total a pagar
console.log(mensajeGlobal); // Mostrar el total a pagar