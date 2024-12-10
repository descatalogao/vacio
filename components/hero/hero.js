import "./hero.css";

const hero = ()=>{
    const app = document.querySelector('#app');
    const hero = document.createElement('div');
    hero.id= 'hero'
    hero.innerHTML=`
    <div id='heroIMG'><h1>¡Bienvenido motero!</h1></div>
    
    `
    app.appendChild(hero)
  }
 ;

 export default hero;