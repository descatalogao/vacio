import "./shopContainer.css"
import createCards from "./createCards";
const shopContainer = (products,cartObjects)=>{
    const container= document.querySelector('#shopContainer')
    createCards(products , container)
    console.log(cartObjects)
  };

export default shopContainer;