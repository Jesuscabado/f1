fetch('http://ergast.com/api/f1/2023/drivers.json')
  .then(response => response.json())
  .then(data => {
    const drivers = data.MRData.DriverTable.Drivers;
    drivers.forEach(driver => {
      crearPiloto(driver);
    });
    crearCarousel();

  })
  .catch(error => {
    console.log(error);
  });

  function crearPiloto(driver){
    let id = driver.code;
    let nombre = driver.givenName;
    let apellido = driver.familyName;
    let nombreNormalizado = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let apellidoNormalizado = apellido.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let pais = driver.nationality;
    let numero = driver.permanentNumber;
    let ul = document.createElement("ul");
     ul.setAttribute("class", "pilotos");
     ul.setAttribute("id",id);
    let nombreApellido = document.createElement("li");
    let numeros = document.createElement("li");
    let nacionalidad = document.createElement("li");
    let foto = document.createElement("li");
    let img = document.createElement("img");
    let enlace = document.createElement("li");
    let link = document.createElement("a");
    /* let plus = "class", "fa-solid fa-plus") */
    link.href = `https://www.formula1.com/en/drivers/${nombreNormalizado}-${apellidoNormalizado}.html`;
    link.innerText = " ";
    link.setAttribute("target","_blank");
    link.setAttribute("class", "fa-solid fa-plus")
    img.setAttribute("src",`image/${id}.png`);  
    nombreApellido.innerText = nombre + " " + apellido;
    numeros.innerText = numero;
    nacionalidad.innerText = pais;
    foto.appendChild(img);
    enlace.appendChild(link);
    ul.appendChild(foto);
    ul.appendChild(nombreApellido);
    ul.appendChild(numeros);
    ul.appendChild(nacionalidad);
    ul.appendChild(enlace);
   
    
    document.getElementById("drivers").appendChild(ul);
    

  }