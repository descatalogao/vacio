const agregarModelos =(motos) => {
    const modeloSelect = document.getElementById('modelo');
    modeloSelect.innerHTML='';
    if((motos.length > 0)){
        const firstOption = document.createElement('option');
            firstOption.value = '';
            firstOption.text = 'Selecciona un modelo';
            modeloSelect.appendChild(firstOption);
        motos.forEach(moto => {
            const option = document.createElement('option');
            option.value = moto.model;
            option.text = moto.model;
            modeloSelect.appendChild(option);
    })}else{
            const option = document.createElement('option');
            option.value = '';
            option.text = 'No hay coincidencias';
            modeloSelect.appendChild(option);

    }

};

export default agregarModelos;
