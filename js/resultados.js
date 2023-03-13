fetch('http://ergast.com/api/f1/current/last/results.json')//Integración de la API y la base de datos del resultado
  .then(response => response.json())//conversión en JSON
  .then(data => {
    const races = data.MRData.RaceTable.Races;
      races.forEach(race => {
      crearCarrera(race);//Creamos una carrera genérica que recoja todas las carreras de la base de datos
      }) 
  })
  .catch(error => {
  console.log(error);
});

  
  function createF1Event(evento) {//Creamos el evento carrera para obtener los datos que necesitamos carrera, fecha y posición
    evento.preventDefault();
    let carrera = document.getElementById("carrera").value.trim();
    let fecha= document.getElementById("fecha").value.trim();
    let posicion = document.getElementById("posicion").value.trim();
    crearResultados(carrera,fecha,posicion);
    document.getElementById("f1").reset();
}

  //PRIMERA PARTE DEL LISTADO (accedemos a la primera capa donde están los datos de acreera y fecha)
  //Nos devuelve un listado de las carreras realizadas con sus fechas en formato listado

  function crearCarrera(race){
    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    li1.innerText = race.raceName;
    li2.innerText = race.date;
    ul.appendChild(li1);
    ul.appendChild(li2);
    document.getElementById("resultados").appendChild(ul);
    let ul2 = crearResultados(race.Results);//creado para la siguiente función
    document.getElementById("resultados").appendChild(ul2);

   //SEGUNDA PARTE DEL LISTADO (segunda y tercera capa de la base de datos)
}
    function crearResultados(results){//con esta función accedemos a las siguientes capas de la base de datos
      let ul = document.createElement("ul");
            //creamos una variable ul antes del forEach para que cada resultado sea un li
      results.forEach (result => {//por cada carrera obtenemos los datos de resultados (posición y datos del piloto).
        let position = result.position; //segunda capa base datos
        let driverName = result.Driver.givenName;//tercera capa de datos
        let driverFamilyName = result.Driver.familyName;//tercera capa de datos
        let formateResult =`${position} ${driverName} ${driverFamilyName}`;//creamos una nueva variable "formateResult" que nos recoge los datos de los pilotos (segunda capa) y su posición en la carrera (tercera capa).
        let li =document.createElement("li"); //Creamos el listado de la segunda y tercera capa 
        li.innerText = formateResult;
        ul.appendChild(li);
        li.setAttribute("id","posicion" + position);
    });
 
      return ul;
  }
     //Hasta aquí tenemos creada la segunda parte del listado, pero no se visualiza.
      //Para visualizarlo necesitamos crear una variable ul2 (en la anterior función) que nos de los resultados de las carreras y su correspondiente appendChild.
      // Lo sacamos de la función porque si lo metemos dentro, no tendríamos acceso al array del último for reach.
      //En la consola nos saldría  Array.forEach (<anonymous>) y no podríamos entrar en la función de crearResultados (es un array dentro de un array y dentro de otro array).

    
    
      
     

