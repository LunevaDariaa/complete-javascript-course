//Importing module

//First way: piece by pice
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';

console.log('Importing module');

// addToCart('bread', 5);
// console.log(price, qt);

//Second way: all document
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

//////////////////////////////////////////
//Top-Level await (ES2022)

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

//Not very clean
const lastPost = getLastPost();
lastPost.then(res => console.log(res));

//Better with await
const lastPost2 = await getLastPost();
console.log(lastPost2);

////////////////////////////////////
//Module Pattern

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} added to cart`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('pizza', 6);
ShoppingCart2.addToCart('ananas', 1);
console.log(ShoppingCart2);

//////////////////////////////////////////
//CommomJS Modules
