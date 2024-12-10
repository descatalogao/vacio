
const templateCarousel= () => {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const currentItemDisplay = document.getElementById('current-item-id');

    const itemCount = items.length - 2; // Número de elementos originales
    let currentIndex = 1; // Comienza en el primer elemento original

    const updateCarousel = (animate = true) => {
        if (!animate) {
            track.style.transition = 'none';
        } else {
            track.style.transition = 'transform 0.5s ease-in-out';
        }
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
        updateCurrentItemDisplay();
    };

    const updateCurrentItemDisplay = () => {
        const activeItem = items[currentIndex];
        const activeItemId = activeItem.getAttribute('id');
        currentItemDisplay.textContent = activeItemId;
    };

    nextButton.addEventListener('click', () => {
        currentIndex++;
        updateCarousel();
        if (currentIndex === itemCount + 1) {
            setTimeout(() => {
                currentIndex = 1;
                updateCarousel(false); // Saltar sin animación al primer elemento
            }, 500); // Duración de la animación
        }
    });

    prevButton.addEventListener('click', () => {
        currentIndex--;
        updateCarousel();
        if (currentIndex === 0) {
            setTimeout(() => {
                currentIndex = itemCount;
                updateCarousel(false); // Saltar sin animación al último elemento
            }, 500); // Duración de la animación
        }
    });

    // Inicializa el carrusel en el primer elemento original
    updateCarousel(false);
};


export default templateCarousel;