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
  constructor(id, title, price, stock, images, onsale, supplier, colors, description) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier;
    this._colors = colors;
    this._description = description;
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

const prod1 = new Product(222, "helado", 45, 4, ["helado_image1", "helado_image2", "helado_image3"], 15, "pesiduri", ["azul", "verde", "crema"], "disfruta el sabor del helado de chicle, menta y vainilla");
const prod2 = new Product(455, "manzana", 30, 3, ["manzana_image1", "manzana_image2"], 10, "Huerta feliz", ["roja", "verde"], "Disfruta nuestras manzanas rojas y verdes frescas" );
const prod3 = new Product(40, "pera", 55, 3, ["perita_image1", "perita_image2"], 20, "cultivo maestro", ["verde", "amarillo"], "Disfruta de nuestras peras verdes y amarillas frescas");
const prod4 = new Product(
  80,
  "papitas",
  2.5,
  20,
  ["papita_image1", "papita_image2", "papita_image3"],
  15,
  "frilays", ["moradas", "amarillas", "verdes"], "Disfruta del sabor andino de nuestras papitas moradas y amarillas"
);
const prod5 = new Product(
  654,
  "Coca-cola",
  11,
  12,
  ["cocacola_image1", "cocacola_image2"],
  5,
  "coca-cola company", ["negro", "marrón"], "Disfruta del sabor de la coca-cola original"
);
const prod6 = new Product(
  463,
  "Inca-cola",
  9,
  30,
  ["inca-kola_image1", "inca-kola_image2"],
  7,
  "lindley", ["amarillo", "moradita"], "Una rica inca kola siempre cae bien en las comidas"
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

products.shift();
products.pop();
console.log(products);
console.log(products[0]);
// Accede al último elemento del array
const lastProduct3 = products[products.length - 1];
// Imprime la propiedad 'title' del último elemento
console.log(lastProduct3.title);

