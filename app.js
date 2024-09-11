const products = [];
const cart = [];

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.addProduct = function () {
  products.push({
    name: this.name,
    price: this.price,
  });
  console.log(`${this.name} added to the inventory.`);
};

class UserCart extends Product {
  constructor(name, price, quantity) {
    super(name, price);
    this.quantity = quantity;
  }
  addToCart(){
    cart.push({
        name: this.name,
        price: this.price,
        quanty: this.quantity,
        total: this.price * this.quantity
    })
    console.log(`${this.name} added to the cart, total cost: $${this.price * this.quantity}`);
  }
}

const p1 = new Product('orange', 10);
const p2 = new Product('banana', 20);

p1.addProduct();
p2.addProduct();

const u1 = new UserCart('orange', 10, 3);
const u2 = new UserCart('banana', 20, 2)

u1.addToCart();
u2.addToCart();

console.log('Products: ',products);
console.log('Cart: ',cart);

