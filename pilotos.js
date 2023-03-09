fetch('http://ergast.com/api/f1/2023/drivers.json')
  .then(response => response.json())
  .then(data => {
    const drivers = data.MRData.DriverTable.Drivers;
    drivers.forEach(driver => {
      crearPilotos(driver.code, driver.givenName + ' ' + driver.familyName, driver.permanentNumber, driver.nationality);
    });
  })
  .catch(error => {
    console.log(error);
  });

  function createF1Event(evento) {
    evento.preventDefault();
    let nombre = document.getElementById("nombre").value.trim();
    let pais = document.getElementById("pais").value.trim();
    let numero = document.getElementById("numero").value.trim();
    crearPilotos(nombre,pais,numero);
    document.getElementById("drivers").reset();
  }

  function crearPilotos(id, nombre, pais, numero){
    let ul = document.createElement("ul");
     ul.setAttribute("id", "pilotos"); 
    let nombreApellido = document.createElement("li");
    let numeros = document.createElement("li");
    let nacionalidad = document.createElement("li");
    let foto = document.createElement("li");
    let img = document.createElement("img");
/*     let link = document.createElement("li");
    let a = document.createElement("a") */;
    img.setAttribute("src",`image/${id}.png`);  
    nombreApellido.innerText = nombre;
    numeros.innerText = pais;
    nacionalidad.innerText = numero;
    foto.appendChild(img);
/*     link.appendChild(url);
    link.appendChild(a) */;
    ul.appendChild(foto);
    ul.appendChild(nombreApellido);
    ul.appendChild(numeros);
    ul.appendChild(nacionalidad);
   /*  ul.appendChild(link); */
    
    document.getElementById("drivers").appendChild(ul);
    

  }