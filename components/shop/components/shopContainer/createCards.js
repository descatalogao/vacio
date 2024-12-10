import addToCart from "./addToCart";
import "./cartElements.css"

const createCards = (filteredObjects, container) => {
    // Vaciamos el container primero
    container.innerHTML = "";
    
    if (filteredObjects.length > 0) {
        filteredObjects.forEach(product => {
            // Crear el elemento del card
            const card = document.createElement('div');
            card.className = 'card';

            // Template de los UL's
            let ul = "";
            if (product.garantia) {
                ul = "<li><p>Con garantía</p></li>";
            }
            if (product.prime) {
                ul += "<li><p>Motocenter Prime</p></li>";
            }
            if (product.estado) {
                ul += `<li><p>${product.estado}</p></li>`;
            }
            if (product.revisada == "true") {
                ul += `<li><p>Revisada</p></li>`;  
            }

            // Poner los datos al card junto con el template de los UL's
            card.innerHTML = `
                <div id='cardDiv'>
                    <div class='h2'>
                        <h2> ${product.brand} - ${product.model}  </h2>
                    </div>
                    <img class='img' src=${product.img}>
                    <ul>${ul}</ul>
                </div>
                <p id='info'> ${product.tipo} | ${product.cilindrada} | ${product.año} | ${product.km} km | ${product.ubicacion}</p>
                <button id='buyBtn'>Precio:<p id='infoPrice'>${product.price}€ </p> </button>
                <p id='articleViews'> ${product.visits} visitas</p>
            `;

            // Mergeamos el card al container
            container.appendChild(card);

            // Asignar evento 'click' al botón 'buyBtn' después de crear el card
            const buyBtn = card.querySelector('#buyBtn');
            buyBtn.addEventListener('click', () => {
                const title = card.querySelector('h2').innerText;
                const price = card.querySelector('#infoPrice').innerText;
                let info = card.querySelector('ul').innerText;
                info = info.replace(/\n/g, '|');  // Reemplazar saltos de línea por '|' para el formato

                const img = card.querySelector('img').src;

                // Crear el objeto del producto
                const object = { title, price, info, img };
                console.log(object);

                // Añadir al carrito
                addToCart(object);

            alert('¡Se ha agregado el objeto al carrito de forma exitosa!')
            });
        });
    } else {
        container.innerHTML = '<h2>No hay motos que respondan a esos criterios.</h2>';
    }
};

export default createCards;
