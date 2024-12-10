import cartObjects from "./cartObjects";
const addToCart = (object) => { 
    console.log(cartObjects)
    console.log('lo de arriba es la lectura de nuestro array modular de objetos del carrito')
    // Función para refrescar la visibilidad del mensaje "No hay productos"
    const refresh = () => {
        if (cartObjects.length > 0) {
            document.querySelector('div#cartPanel>div#default').style.display = "none";
        } else {
            document.querySelector('div#cartPanel>div#default').style.display = "inline-block";
        }
    };

    // Función para eliminar un producto del array
    function removeFromCart(index) {
        cartObjects.splice(index, 1); // Eliminar el elemento del array
    }

    const title = object.title;
    const price = object.price;
    const info = object.info;
    const img = object.img;

    const cart = document.querySelector('#cartPanel');
    
    // Agregar el producto al array del carrito
    cartObjects.push(object);

    // Renderizar el nuevo elemento en el DOM
    cart.innerHTML += `
    <div class='cartElement' data-index='${cartObjects.length - 1}'>
        <img src='${img}'></img>
        <h2 id="title">${title}</h2>
        <h2 id="info">${info}</h2>
        <h2>${price} €</h2>
        <button class="remove-btn">Quitar</button>
    </div>
    `;

    // Actualizar la vista del carrito
    refresh();

    // Asignar el evento click a los botones "Quitar"
    cart.querySelectorAll('button.remove-btn').forEach((button, idx) => {
        button.addEventListener('click', () => {
            const parentElement = button.parentElement;
            const index = parseInt(parentElement.getAttribute('data-index')); // Convertir a número
            
            // Verificar si el índice es válido antes de intentar eliminar
            if (index >= 0 && index < cartObjects.length) {
                removeFromCart(index); // Eliminar el producto del array

                parentElement.remove(); // Eliminar el producto del DOM

                // Actualizar los índices de los elementos restantes
                document.querySelectorAll('.cartElement').forEach((el, newIndex) => {
                    el.setAttribute('data-index', newIndex); // Actualizar el índice
                });

                console.log(cartObjects);
                refresh(); // Refrescar la vista del carrito
            }
        });
    });
};

export default addToCart;
