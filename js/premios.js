/*fetch('http://ergast.com/api/f1/current/last/results.json')//Integración de la API (GET) y la base de datos del resultado
  .then(response => response.json())//conversión en JSON
  .then(formateResult=> {//desde aqui manipulamos los datos obtenidos de la API
    let primerosTres = formateResult.slice(0, 3);//la función slice() la utilizamos para obtener los elementos de la posición 0 a la posición 2 del array (0,1 y 2 son las tres primeras posiciones).
    let premios = document.createElement('ul');//creamos una lista
    primerosTres.forEach(driver => {
    let posiciones = document.createElement('li');
      posiciones.textContent = driver.nombre;//agregamos las tres posicones a la lista, utilizando textContent
      premios.appendChild(posiciones);
    });
    document.body.appendChild(premios);//para agregar a HTML el listado
  });*/












