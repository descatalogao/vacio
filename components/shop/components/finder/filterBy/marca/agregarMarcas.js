import products from "../../../../../../data/products";

const agregarMarcas =(motos) => {

    const marcaSelect = document.getElementById('marca');
    marcaSelect.innerHTML = "<option value=''>Selecciona una marca</option>"; // Opción por defecto con un valor distinto
    const uniqueBrands = new Set();
    motos.forEach(moto => {
      uniqueBrands.add(moto.brand);
  });
  uniqueBrands.forEach(brand => {
    let option = document.createElement('option');
    option.value = brand;
    option.text = brand;
    marcaSelect.appendChild(option);
});

};

export default agregarMarcas;
