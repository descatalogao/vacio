import filterByPanel from "./filterBy/filterByPanel";
import sortByPanel from "./sortBy/sortByPanel";
import products from "../../../../data/products";
import createCards from "../shopContainer/createCards";
import "./finder.css";

const finder = () => {
  const finder = document.querySelector("#finder");
  finder.innerHTML = `<div id='search'>
        <input type="search" id="type" name="q" placeholder='Busque aquí su moto' />
        <button> Go! </button>
        </div>
        <div class='filters'>
        <div id='filterByBtn'> <img src='./assets/icons/filter.png'> </div>
        <div id='sortByBtn'> <img src='./assets/icons/sort.png'> </div>
    </div>
    `;

  let value = "";
  const search = document.querySelector("#search>input");
  search.addEventListener("input", () => {
    value = search.value.toLowerCase().replace(/[\s-]+/g, "");
    console.log(value);
  });

  search.addEventListener("keydown", (event) => {
    if (event.code === "Enter" || event.key === "Enter") {
      let filteredMotos = [];
      products.forEach((moto) => {
        const activeSearch = (moto.brand + moto.model + moto.tipo)
          .toLowerCase()
          .replace(/[\s-]+/g, "");
        if (activeSearch.includes(value)) {
          filteredMotos.push(moto);
        }
      });
      const container = document.querySelector("#shopContainer");
      createCards(filteredMotos, container);
    }
  });

  const searchBtn = document.querySelector("#search>button");
  searchBtn.addEventListener("click", () => {
    let filteredMotos = [];
    products.forEach((moto) => {
      const activeSearch = (moto.brand + moto.model + moto.tipo)
        .toLowerCase()
        .replace(/[\s-]+/g, "");
      if (activeSearch.includes(value)) {
        filteredMotos.push(moto);
      }
    });
    const container = document.querySelector("#shopContainer");
    console.log("hasta aquí bien SEARCH click");
    createCards(filteredMotos, container);
  });

  filterByPanel();
  sortByPanel();
};

export default finder;
