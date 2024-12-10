// Importaciones
import estado from "./estado/estado";
import "./filterByPanel.css";
import garantia from "./garantia/garantia";
import marca from "./marca/marca";
import modelo from "./modelo/modelo";
import tipo from "./tipo/tipo";
import carne from "./carne/carne";
import cilindrada from "./cilindrada/cilindrada";
import templateCarousel from "./tipo/carrusel";
import createCards from "../../shopContainer/shopContainer";
import products from "../../../../../data/products";
import agregarMarcas from "./marca/agregarMarcas";
import agregarModelos from "./modelo/agregarModelos";

const container = document.querySelector('#shopContainer');




// Mueve `filterProducts` fuera de `filterByPanel`
const filterProducts = () => {
  const selectedBrand = document.querySelector('#marca').value;
  const selectedType = document.querySelector('#current-item-id').innerText;
  const selectedModel = document.querySelector('#modelo').value;
  const selectedCC = document.querySelector('#cc>output').value;
  const radiosCondition = document.querySelectorAll('input[name="estado"]');
  let selectedCondition;

  for (const radio of radiosCondition) {
    if (radio.checked) {
      selectedCondition = radio.value;
      break;
    }
  }

  const radiosLicense = document.querySelectorAll('input[name="carne"]');
  let selectedLicense;

  for (const radio of radiosLicense) {
    if (radio.checked) {
      selectedLicense = radio.value;
      break;
    }
  }

  const radiosGuarantee = document.querySelectorAll('input[name="garantia"]');
  let selectedGuarantee;

  for (const radio of radiosGuarantee) {
    if (radio.checked) {
      selectedGuarantee = radio.value;
      break;
    }
  }

  const filteredProducts = products.filter(moto => {
    const matchedBrand = moto.brand.toLowerCase() === selectedBrand.toLowerCase() || selectedBrand === '';
    const matchedType = moto.tipo.toLowerCase() === selectedType.toLowerCase() || selectedType.toLowerCase() === 'todos';
    const matchedModel = moto.model === selectedModel || selectedModel === '';
    const matchedCC = (parseInt(moto.cilindrada) < parseInt(selectedCC) && (parseInt(selectedCC) - parseInt(moto.cilindrada)) < 200) || selectedCC === 'Selecciona una cilindrada deslizando' || selectedCC === '';
    const matchedCondition = selectedCondition === undefined || moto.estado.toLowerCase() === selectedCondition.toLowerCase();
    const matchedLicense = selectedLicense === undefined || selectedLicense === '' || parseInt(moto.cilindrada) <= parseInt(selectedLicense);
    const matchedGuarantee = selectedGuarantee === undefined || selectedGuarantee === moto.garantia.toString();

    return matchedBrand && matchedType && matchedModel && matchedCC && matchedCondition && matchedLicense && matchedGuarantee;
  });
  console.log({ selectedBrand, selectedType, selectedModel, selectedCC, selectedCondition, selectedLicense, selectedGuarantee });
  return filteredProducts;
};

// Función `filterByPanel`
const filterByPanel = () => {
  const filterByPanel = document.createElement('div');
  filterByPanel.id = 'filterByPanel';
  document.body.appendChild(filterByPanel);

  const filterByBtn = document.querySelector('#filterByBtn');
  filterByBtn.addEventListener('click', () => {
    if (filterByPanel.style.display === "none" || filterByPanel.style.display === "") {
      filterByPanel.style.display = "inline-block"; // Mostrar el panel
    } else {
      filterByPanel.style.display = "none"; // Ocultar el panel
    }
  });

  filterByPanel.innerHTML = `
    <div class='title'><h2> FILTRAR POR </h2></div>
    <ul id='filterList'>
        ${marca}
        ${tipo}
        ${modelo}
        ${estado}
        ${carne}
        ${garantia}
        ${cilindrada}
        <button id='resetFlt'>Resetear filtros</button>
        <button id='sendFilters'>Go!</button>
    </ul>
  `;


        const reset = document.querySelector('button#resetFlt')
        reset.addEventListener('click', ()=>{ 
            document.querySelector('select#marca').value= 'todos';
            templateCarousel();
            document.querySelector('select#modelo').value= '';
            document.querySelector('input#cilindrada').value = '';
            document.querySelector('#cc>output').value = 'Selecciona una cilindrada deslizando';
            document.querySelectorAll('input[name="estado"]').forEach(radio=> radio.checked = false);
            document.querySelectorAll('input[name="carne"]').forEach(radio=> radio.checked = false);
            document.querySelectorAll('input[name="garantia"]').forEach(radio=> radio.checked = false);
        })

  // AGREGAR MARCAS
  agregarMarcas(products);

  // CATEGORÍA TIPO --> CARRUSEL:
  templateCarousel();

  // Activa los filtros
  activarFiltros();

  const sendFilters = document.querySelector('button#sendFilters');
  sendFilters.addEventListener('click', () => {
    alert('¡Cambios guardados de forma exitosa!');
    const modelos = filterProducts();
    agregarModelos(modelos);
    createCards(modelos, container);
    console.log(modelos);
    filterByPanel.style.display = "none";
  });
};

// Función `activarFiltros` que maneja los eventos
const activarFiltros = () => {
  const marcaFlt = document.querySelector('select#marca');
  const modeloFlt = document.querySelector('select#modelo');
  const tipoFltNBtn = document.querySelector('.next-btn');
  const tipoFltPBtn = document.querySelector('.prev-btn');
  const cilindradaFlt = document.querySelector('input#cilindrada');
  const estadoFlt = document.querySelectorAll('input[name="estado"]');
  const carneFlt = document.querySelectorAll('input[name="carne"]');
  const garantiaFlt = document.querySelectorAll('input[name="garantia"]');

  marcaFlt.addEventListener('change', () => {
    const modelos = filterProducts();
    agregarModelos(modelos);
  });

  tipoFltNBtn.addEventListener('click', () => {
    const modelos = filterProducts();
    agregarModelos(modelos);
  });

  tipoFltPBtn.addEventListener('click', () => {
    const modelos = filterProducts();
    agregarModelos(modelos);
  });

  modeloFlt.addEventListener('change', () => {
    const modelos = filterProducts();
  });

  cilindradaFlt.addEventListener('input', () => {
    const modelos = filterProducts();
    agregarModelos(modelos);
  });

  estadoFlt.forEach(estado => estado.addEventListener('change', () => {
    const modelos = filterProducts();
    agregarModelos(modelos);
  }));

  carneFlt.forEach(carne => carne.addEventListener('change', () => {
    const modelos = filterProducts();
    agregarModelos(modelos);
  }));

  garantiaFlt.forEach(garantia => garantia.addEventListener('change', () => {
    const modelos = filterProducts();
    agregarModelos(modelos);
  }));


  
};

// Exportaciones
export default filterByPanel;
export { filterProducts };
