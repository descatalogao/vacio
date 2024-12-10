import "./cartPanel.css";
import openCart from "./openCart";
const cartPanel = ()=>{
    const cartPanel = document.createElement('div')
    cartPanel.id= 'cartPanel'
    cartPanel.innerHTML= '<div id=default>No hay nada en el carrito.</div>'
    app.appendChild(cartPanel)
    openCart()
}

export default cartPanel