import "./header.css";
import cartPanel from "./cartPanel/cartPanel";

const header = ()=>{
    const app = document.querySelector('#app');
    const header = document.createElement('header');
    header.innerHTML=`

    <div class="headerLogo">
      <div class="icono-moto">
          <div class="faro"></div>
          <div class="faro2"></div>
          <div class="rueda rueda-delante"></div>
          <div class="rueda rueda-detras"></div>
          <div class="cuerpo"></div>
          <div class="manillar"></div>
          <div class="manillar2"></div>
          <div class="escape"></div>
      </div>
      <h1 class="nombre-tienda">Motocenter</h1>
  </div>
  
    <ul id='headerIcons'>
      <li id='headerUser'><img src='./assets/icons/options.png'></li>
      <li id='headerCart'><img src='./assets/icons/cart.png'></li>
    </ul>
    
    `
    app.appendChild(header)

    cartPanel()
    
  }
  ;
  
export default header