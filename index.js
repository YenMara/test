import { Navbar } from "./src/component/layout/Navbar.js";
import { ProductCard } from "./src/component/ProductCard.js"
import { products } from "./src/component/store/product-mockdata.js";

console.log(products); 
let renderArea = document.querySelector("#render-area");

let navbar = document.querySelector("#navbar");
console.log(navbar);

navbar.innerHTML = Navbar();
products.map((product) => (renderArea.innerHTML += ProductCard(product)));
