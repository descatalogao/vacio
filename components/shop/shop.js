import "./shop.css"
import products from "../../data/products";
import finder from "./components/finder/finder";
import shopContainer from "./components/shopContainer/shopContainer";

const shop = ()=>{
    //Se crea la tienda mediante DOM, se distinguen tres partes 1. TITULO, 2. BARRA BÚSQUEDA + BOTONES FILTROS, Y 3.CONTENEDOR CON CARTAS.
    const app = document.querySelector('#app');
    const shop = document.createElement('div');
    shop.id= 'shop';
    shop.innerHTML=`
    <div id=shopTitle> ¡Échale un vistazo a nuestras motos! </div>
    <div id=finder></div>
    <div id=shopContainer> </div>
    `
    app.appendChild(shop)

    //Se crea el buscador: incluye barra de búsqueda + botones de filtros(+ pantallas de filtros)
    finder();
    //Se crean las cartas respecto a los productos que hay (variable products)
    shopContainer(products);

}

  

  export default shop;