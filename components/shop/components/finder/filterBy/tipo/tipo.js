import "./tipo.css"
const tipo = `<li>
    <div id='box'>
    <p>TIPO</p>
    </div>
    <div id='boxShadow'></div>
    <div id='type'>
        <div class='carousel-container'>
            <button class="prev-btn">&lt;</button>
            <div class="carousel">
                <div class="carousel-track">
                    <!-- Elementos duplicados para bucle infinito -->
                    <div class="carousel-item" id="trail"><img src="../../../../../../assets/moto_icons/trail.png"></div> <!-- Duplicado al inicio -->
                    <div class="carousel-item" id="todos"><img src="../../../../../../assets/moto_icons/todos.png"></div>
                    <div class="carousel-item" id="custom"><img src="../../../../../../assets/moto_icons/custom.png"></div>
                    <div class="carousel-item" id="deportiva"><img src="../../../../../../assets/moto_icons/deportiva.png"></div>
                    <div class="carousel-item" id="enduro"><img src="../../../../../../assets/moto_icons/enduro.png"></div>
                    <div class="carousel-item" id="naked"><img src="../../../../../../assets/moto_icons/naked.png"></div>
                    <div class="carousel-item" id="scooter"><img src="../../../../../../assets/moto_icons/scooter.png"></div>
                    <div class="carousel-item" id="trail"><img src="../../../../../../assets/moto_icons/trail.png"></div>
                    <div class="carousel-item" id="todos"><img src="../../../../../../assets/moto_icons/todos.png"></div> <!-- Duplicado al final -->
                </div>
            </div>
            <button class="next-btn">&gt;</button>
        </div>
        <h3 id="current-item-id">1</h3>
    </div>
    </li>`;


    

export default tipo;