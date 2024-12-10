import "./sections.css";

const sections = ()=>{
    const app = document.querySelector('#app');
    const sections = document.createElement('section');
    sections.innerHTML=`
        <article>
          <img src='assets/icons/garantia.png'>
          <h2> Garantía MC Prime </h2>
          <div>
          <p>Para eso te damos los <b>3 años de garantía</b> con coberturas de cualquier fallo que aparezca y que su anterior dueño pudo ser consciente. </p><p>Sí, sabemos que hay gente que lo hace, pero las motos con <b>Garantía MC Prime</b> van a misa. </p>
          </div>
        </article>
        <article>
          <img src='assets/icons/mech3.png'>
          <h2> Expertos en mecánica </h2>
          <div>
          <p> ¡Pero qué te creías, motero! </p><p>En Moto Center <b>no*</b> dejamos pasar un rasguño, nuestros expertos limpian, pulen y corrigen cualquier imperfección que tenga la moto a la hora de la adquisición en nuestras instalaciones.</p>
          </div>
        </article>
        <article>
          <img src='assets/icons/ventas.png'>
          <h2> ¿Quieres vender? </h2>
          <div>
          <p>¡Genial!</p><p> Estamos aquí para asesorarte, aquí tu mismo puedes formar parte de Moto Center. La tasación será <b>online</b> con uno de nuestros peritos. </p><p> Te tasamos la moto a un módico precio, y si te parece bien...</p><p> ¡Te olvidas de todo el papeleo que va luego y tienes el dinero cuanto antes!</p>
          </div>
        </article>
    `
    app.appendChild(sections)
  }

  export default sections;
  