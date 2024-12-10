import "./sortByPanel.css";
import { filterProducts } from "../filterBy/filterByPanel";
import products from "../../../../../data/products";
import createCards from "../../shopContainer/createCards";
import agregarModelos from "../filterBy/modelo/agregarModelos";

const sortByPanel = () => {
  const sortByPanel = document.createElement("div");
  sortByPanel.id = "sortByPanel";
  sortByPanel.className = "hidden";

  document.body.appendChild(sortByPanel);

  // Función para filtrar productos por búsqueda
  const filterSearchResults = (value) => {
    let filteredMotos = [];
    products.forEach((moto) => {
      const activeSearch = ((moto.brand + moto.model + moto.tipo).toLowerCase()).replace(/[\s-]+/g, "");
      if (activeSearch.includes(value)) {
        filteredMotos.push(moto);
      }
    });
    return filteredMotos;
  };

  // Función para ordenar y filtrar productos
  const sortProducts = () => {
    let modelos =[]
    const radios = document.querySelectorAll("#radios input[type='radio']");
    radios.forEach((radio) => {
      radio.addEventListener("click", () => {
        const container = document.querySelector("#shopContainer");
        modelos = filterProducts()
        console.log(products)
        console.log(modelos)

        const search = document.querySelector("#search > input");
        const value = search ? search.value.toLowerCase().replace(/[\s-]+/g, "") : "";

        // Filtrar productos si hay valor de búsqueda
        if (value !== "") {
          modelos = filterSearchResults(value);
        }

        // Ordenar según la opción seleccionada
        if (radio.value === "priceDesc") {
          modelos.sort((a, b) => b.price - a.price);
        } else if (radio.value === "priceAsc") {
          modelos.sort((a, b) => a.price - b.price);
        } else if (radio.value === "relevance") {
          modelos.sort((a, b) => b.visits - a.visits);
        }

        // Actualizar el contenedor con los productos ordenados
        container.innerHTML = "";
        createCards(modelos, container);
      });
    });

    // Manejo de eventos de los botones de reset y cierre del panel
    document.querySelector("#sortByPanel").addEventListener("click", (event) => {
      const target = event.target;

      if (target.id === "reset") {
        const radios = sortByPanel.querySelectorAll("input[type='radio']");
        radios.forEach((radio) => (radio.checked = false));
        const container = document.querySelector("#shopContainer");
        const modelos = filterProducts();
        container.innerHTML = "";
        createCards(modelos, container);
      } else if (target.id === "go") {
        sortByPanel.classList.toggle("hidden");
      }
    });
  };

  // Crear contenido HTML del panel

  sortByPanel.innerHTML = `
    <div class="title"><h2>ORDENAR POR</h2></div>
    <div id="radios">
        <label>
            <input type="radio" name="sort" value="priceDesc">
            <span>Precios altos primero</span>
        </label>
        <label>
            <input type="radio" name="sort" value="priceAsc">
            <span>Precios bajos primero</span>
        </label>
        <label>
            <input type="radio" name="sort" value="relevance">
            <span>Relevancia</span>
        </label>
        <button id="reset">Resetear botones</button>
        <button id="go">Go!</button>
    </div>
  `;

  // Mostrar y ocultar el panel de ordenación
  const sortByBtn = document.querySelector("#sortByBtn");
  sortByBtn.addEventListener("click", () => {
    sortByPanel.classList.toggle("hidden"); // Alterna la clase 'hidden' para mostrar/ocultar
  });

  sortProducts(); // Inicializar los eventos de ordenación
};

export default sortByPanel;
