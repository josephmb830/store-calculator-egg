// const producto1 = {
//   nombre: "celular",
//   precio: 100000,
//   stock: 2,
// };

// producto1.id = "id123";
// producto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

// console.log(producto1);
// alert(producto1);

// console.log(producto1.nombre);
// alert(producto1.nombre);

class Product {
  constructor(id, title, price, stock, images, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier;
  }

  get getSupplier() {
    return this._supplier;
  }

  set setSupplier(newName) {
    this._supplier = newName;
  }

  sellUnits(units) {
    if (units <= 0) {
      console.log("El número de unidades debe ser positivo.");
      alert("El número de unidades debe ser positivo.");
      return;
    }

    if (this.stock >= units) {
      this.stock -= units;
      console.log(
        `Se vendieron ${units} unidades. Stock restante: ${this.stock}`
      );
      alert(`Se vendieron ${units} unidades. Stock restante: ${this.stock}`);
    } else {
      console.log(
        "Error: No hay suficiente stock para vender las unidades solicitadas."
      );
      alert(
        "Error: No hay suficiente stock para vender las unidades solicitadas."
      );
      return;
    }
  }
}

const prod1 = new Product(222, "helado", 45, 4, "helado_image", 15, "pesiduri");
const prod2 = new Product(455, "manzana", 30, 3, "manzana_image", 10, "rojita");
const prod3 = new Product(40, "pera", 55, 3, "image", 20, "verde");
const prod4 = new Product(
  80,
  "papitas",
  2.5,
  20,
  "papita_image",
  15,
  "frilays"
);
const prod5 = new Product(
  654,
  "Coca-cola",
  11,
  12,
  "cocacola_image",
  5,
  "coca-cola company"
);
const prod6 = new Product(
  463,
  "Inca-cola",
  9,
  30,
  "inca-kola_image",
  7,
  "lindley"
);

// console.log(prod1);
// alert(prod1);

// console.log(prod2);
// alert(prod2);

// console.log(prod3);
// alert(prod3);

// console.log(prod4);
// alert(prod4);

// console.log(prod5);
// alert(prod5);

// console.log(prod2.title);
// alert(prod2.title);

// console.log(prod3.onsale);
// alert(prod3.onsale);

// console.log(prod4._supplier);
// alert(prod4._supplier);

// prod4._supplier = "alicorp";

// // Vender 10 unidades
// prod5.sellUnits(10);

// // Vender 5 unidades
// prod5.sellUnits(5);

// // Obtener el valor del getter para el proveedor
// const supplier = prod4._supplier; // Asumiendo que prod4 es un objeto de clase con el atributo _supplier

// // Imprimir el valor del proveedor en la consola
// console.log("Supplier:", supplier); // Imprime: Supplier: alicorp

// // Crear un mensaje de alerta con el valor del proveedor
// const mensajeSupplier = `Supplier: ${supplier}`;

// // Mostrar una alerta con el mensaje
// alert(mensajeSupplier); // Muestra: Supplier: alicorp

// // Verificar el stock restante
// console.log(`Stock restante después de las ventas: ${prod5.stock}`);

const products = [prod1, prod2, prod3, prod4];

console.log(products);
console.log(products[1]);
// Accede al último elemento del array
const lastProduct = products[products.length - 1];

// Imprime la propiedad 'title' del último elemento
console.log(lastProduct.title);

products.unshift(prod5);

products.push(prod6);

console.log(products);
console.log(products[0]);
// Accede al último elemento del array
const lastProduct2 = products[products.length - 1];

// Imprime la propiedad 'title' del último elemento
console.log(lastProduct2.title);
