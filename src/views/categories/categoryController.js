export const CategoryController = async (main) => {
  const peticion = await fetch("http://localhost:8080/api/categorias");
  const data = await peticion.json();
  const db = data.data;
  // let lista = "";
  // db.forEach((e) => {
  //   lista += e.id + ",";
  //   lista += e.nombre + ",";
  //   lista += e.descripcion;
  //   lista += `<br>`;
  // });
  // main.innerHTML += lista;
  const container = document.createElement("section");
  const containerNuevo = document.createElement("div")
  const btnNuevo = document.createElement("button");
  containerNuevo.classList.add("containerNuevo")
  btnNuevo.classList.add("boton");
  btnNuevo.classList.add("nuevo");
  btnNuevo.textContent = "Nuevo";
  containerNuevo.appendChild(btnNuevo);
  const tabla = document.createElement("table");

  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");

  const columnas = ["ID", "Nombre", "Descripcion","Acciones"];

  columnas.forEach((nombres) =>
  {
    const th = document.createElement("th");
    th.textContent = nombres;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);

  const tbody = document.createElement("tbody");
  const fragment = document.createDocumentFragment();
  db.forEach((datos) =>
  {
    const tr = document.createElement("tr");
    const campos = [datos.id,datos.nombre,datos.descripcion];
    campos.forEach((campo) =>
    {
      const td = document.createElement("td");
      td.textContent = campo;
      tr.appendChild(td);
      fragment.appendChild(tr);
    });
    const tdAcciones = document.createElement("td");
    const btnEditar = document.createElement("button");
    const btnEliminar = document.createElement("button");

    btnEditar.textContent = "Editar";
    btnEliminar.textContent = "Eliminar";
    btnEditar.classList.add("boton");
    btnEliminar.classList.add("boton");
    btnEditar.classList.add("editar");
    btnEliminar.classList.add("eliminar");
    btnEditar.dataset.id = datos.id;
    btnEliminar.dataset.id = datos.id;

    tdAcciones.append(btnEditar, btnEliminar);
    tr.appendChild(tdAcciones);
    fragment.appendChild(tr);
    tbody.appendChild(fragment)
  });
  tabla.append(thead, tbody);
  container.append(containerNuevo,tabla)
  main.appendChild(container);
};
