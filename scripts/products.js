const producto1 = {
  nombre: "celular",
  precio: 100000,
  stock: 2,
};

producto1.id = "id123";
producto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

console.log(producto1);
alert(producto1);

console.log(producto1.nombre);
alert(producto1.nombre);

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
}

const prod1 = new Product();
const prod2 = new Product(455, "manzana", 30);
const prod3 = new Product(40, "pera", 55, 3, "image", 20);
const prod4 = new Product(
  80,
  "papitas",
  2.5,
  20,
  "papita_image",
  15,
  "frilays"
);

console.log(prod1);
alert(prod1);

console.log(prod2);
alert(prod2);

console.log(prod3);
alert(prod3);

console.log(prod4);
alert(prod4);

console.log(prod2.title);
alert(prod2.title);

console.log(prod3.onsale);
alert(prod3.onsale);

console.log(prod4._supplier);
alert(prod4._supplier);

prod4._supplier = "alicorp";

// Imprimir el valor de los getters en la consola
console.log("Supplier:", prod4._supplier); // Imprime: Supplier: alicorp
alert("Supplier:", prod4._supplier); // Imprime: Supplier: alicorp
