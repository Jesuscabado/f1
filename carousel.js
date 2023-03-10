 function crearCarousel (nombre = "pilotos",nombreSeccion = "drivers") {
    // Variables
   /*  const elementos = [
        "image/ALB.Png",
        "image/ALO.png",
        "image/BOT.png"
    ]; */
    let elementos = document.getElementById(nombreSeccion).getElementsByClassName(nombre);
    elementos = [...elementos];
    Array.from(document.getElementById(nombreSeccion).getElementsByClassName(nombre)).forEach(element => {
        element.remove();
    });
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder-'+ nombre);
    let $botonAvanzar = document.querySelector('#avanzar-'+ nombre);
    let elementoCarousel = document.querySelector('#carousel-'+ nombre);
    let $botonPlay = document.querySelector('#play-'+ nombre);
    let $botonStop = document.querySelector('#stop-'+ nombre);
    let intervalo;
  
    // Funciones
  
    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= elementos.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarElemento();
    }
  
    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = elementos.length - 1;
        } else {
            posicionActual--;
        }
        renderizarElemento();
    }
  
    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarElemento() {
        elementoCarousel.innerHTML= "";
        elementoCarousel.appendChild(elementos[posicionActual]);
    }
  
    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');
  
    }
  
    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }
  
    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarElemento();
  }