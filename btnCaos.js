const boton = document.getElementById('btnCaos');

    boton.addEventListener('click', () => {
      // 1. Cambiar el texto del botón
      boton.textContent = 'Botón bien locoooooooooo!';

      // 2. Cambiar el color (Agregando o alternando una clase CSS)
      boton.classList.add('btn-activo');
    });