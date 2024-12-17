const openCart = () => {
  const cartBtn = document.querySelector("#headerCart");
  const cartPanel = document.querySelector("#cartPanel");

  cartBtn.addEventListener("click", function () {
    cartPanel.style.position = "fixed"; // Asegurarnos de que el panel esté fijo a la ventana

    // Obtener las coordenadas del botón del carrito
    const rect = cartBtn.getBoundingClientRect();

    // Calcular la nueva posición en función de la posición del botón
    const panelWidth = cartPanel.offsetWidth;
    const panelHeight = cartPanel.offsetHeight;

    // Establecer la posición del panel (por ejemplo, debajo y alineado a la izquierda del botón)
    let panelX = rect.left - 180;
    let panelY = rect.bottom - 20;

    // Ajustar si el panel se sale de los límites de la ventana
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Si el panel se sale por la derecha, ajustarlo
    if (panelX + panelWidth > windowWidth) {
      panelX = windowWidth - panelWidth;
    }

    // Si el panel se sale por abajo, ajustarlo
    if (panelY + panelHeight > windowHeight) {
      panelY = rect.top - panelHeight; // Posicionarlo por encima del botón
    }

    // Posicionar el panel del carrito
    cartPanel.style.left = `${panelX}px`;
    cartPanel.style.top = `${panelY}px`;

    // Mostrar el panel del carrito
    if (cartPanel.style.display === "none" || cartPanel.style.display === "") {
      cartPanel.style.display = "flex";
    } else {
      cartPanel.style.display = "none";
    }
  });

  window.addEventListener("resize", function () {
    // Al redimensionar la ventana, recalculamos la posición relativa al botón
    const rect = cartBtn.getBoundingClientRect();

    // Establecer la posición del panel
    let panelX = rect.left - 180;
    let panelY = rect.bottom - 20;

    // Ajustar si el panel se sale de los límites de la ventana
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const panelWidth = cartPanel.offsetWidth;
    const panelHeight = cartPanel.offsetHeight;

    if (panelX + panelWidth > windowWidth) {
      panelX = windowWidth - panelWidth;
    }

    if (panelY + panelHeight > windowHeight) {
      panelY = rect.top - panelHeight; // Posicionarlo por encima si no cabe abajo
    }

    // Reposicionar el panel
    cartPanel.style.left = `${panelX}px`;
    cartPanel.style.top = `${panelY}px`;
  });
};

export default openCart;
