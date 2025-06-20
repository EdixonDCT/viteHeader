import { CategoryController } from "./views/categories/categoryController";
import { ProductController } from "./views/products/productsController";

const main = document.querySelector("main");

const cargarVistas = async (hash) => {
  console.log(`Hash #1:${hash}`);
  if (!hash) {
    main.textContent = "Error 404: NO LOADED PAGE...";
    return;
  }
  let palabra = hash.slice(1);
  console.log(`Hash #2:${hash}`);
  // url = `src/views/${palabra}/index.html`;
  // const valor = await fetch(url);
  // const body = await valor.text();
  // main.innerHTML = body;
  for (let cont = 0; cont < Vistas.length; cont++)
  {
    if (palabra == Vistas[cont].nombre)
    {
      const valor = await fetch(Vistas[cont].ubicacion);
      const body = await valor.text();
      main.innerHTML = body;
      Vistas[cont].controlador(main);
    }
  }
  console.log(`Hash #3:${hash}`);
};

addEventListener("DOMContentLoaded", (e) => {
  let hash = window.location.hash;
  if (!hash) {
    return;
  }
  cargarVistas(hash);
});

window.addEventListener("hashchange", (e) => {
  let hash = window.location.hash;
  cargarVistas(hash);
});
const Vistas = [
  {
    nombre: "categories",
    ubicacion: "src/views/categories/index.html",
    controlador: CategoryController,
  },
  {
    nombre: "products",
    ubicacion: "src/views/products/index.html",
    controlador: ProductController,
  },
];
