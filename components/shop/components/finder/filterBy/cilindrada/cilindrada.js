const cilindrada = `
    <li>
    <div id='box'>
    <p>CILINDRADA</p>
    </div>
    <div id='boxShadow'></div>
        <div id="cc">
            <input id='cilindrada' type="range" value="125" min="50" max="1300" step="25" oninput="this.nextElementSibling.value = this.value + ' cc'">
            <output>Selecciona una cilindrada deslizando</output>
        </div>


    </li>`;
export default cilindrada;