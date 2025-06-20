export const ProductController = async (main) => {
  const peticion = await fetch("http://localhost:8080/api/productos");
  const data = await peticion.json();
  const db = data.data
};
